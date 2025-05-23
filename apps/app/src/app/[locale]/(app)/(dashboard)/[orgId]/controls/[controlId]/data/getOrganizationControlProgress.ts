"use server";

import { auth } from "@/utils/auth";
import { db } from "@comp/db";
import { TaskEntityType } from "@comp/db/types";
import { ArtifactType } from "@prisma/client";
import { headers } from "next/headers";

export interface ControlProgressResponse {
	total: number;
	completed: number;
	progress: number;
	byType: {
		[key: string]: {
			total: number;
			completed: number;
		};
	};
}

export const getOrganizationControlProgress = async (controlId: string) => {
	const session = await auth.api.getSession({
		headers: await headers(),
	});

	if (!session) {
		return {
			error: "Unauthorized",
		};
	}

	const orgId = session.session.activeOrganizationId;

	if (!orgId) {
		return {
			error: "Unauthorized",
		};
	}

	// Get the control with its artifacts
	const control = await db.control.findUnique({
		where: {
			id: controlId,
		},
		include: {
			artifacts: {
				include: {
					policy: true,
				},
			},
		},
	});

	if (!control) {
		return {
			error: "Control not found",
		};
	}

	const artifacts = control.artifacts;
	const tasks = await db.task.findMany({
		where: {
			organizationId: orgId,
			entityId: controlId,
			entityType: "control",
		},
	});

	const progress: ControlProgressResponse = {
		total: artifacts.length + tasks.length,
		completed: 0,
		progress: 0,
		byType: {},
	};

	for (const artifact of artifacts) {
		// Initialize type counters if not exists
		if (!progress.byType[artifact.type]) {
			progress.byType[artifact.type] = {
				total: 0,
				completed: 0,
			};
		}

		progress.byType[artifact.type].total++;

		// Check completion based on artifact type
		let isCompleted = false;
		switch (artifact.type) {
			case ArtifactType.policy:
				isCompleted = artifact.policy?.status === "published";
				break;
			case ArtifactType.procedure:
			case ArtifactType.training:
				// These types might need special handling based on your business logic
				isCompleted = false;
				break;
			default:
				isCompleted = false;
		}

		if (isCompleted) {
			progress.completed++;
			progress.byType[artifact.type].completed++;
		}
	}

	for (const task of tasks) {
		// Initialize type counters if not exists
		if (!progress.byType[task.entityType]) {
			progress.byType[task.entityType] = {
				total: 0,
				completed: 0,
			};
		}

		progress.byType[task.entityType].total++;

		// Check completion based on task type
		let isCompleted = false;
		switch (task.entityType) {
			case TaskEntityType.control:
				isCompleted = task.status === "done";
				break;
			default:
				isCompleted = false;
		}

		if (isCompleted) {
			progress.completed++;
			progress.byType[task.entityType].completed++;
		}
	}

	// Calculate overall progress percentage
	progress.progress =
		progress.total > 0
			? Math.round((progress.completed / progress.total) * 100)
			: 0;

	return {
		data: {
			progress,
		},
	};
};
