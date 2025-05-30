import type { TemplatePolicy } from "../types";

export const softwareDevelopmentPolicy: TemplatePolicy = {
	type: "doc",
	metadata: {
		id: "software_development",
		name: "Software Development Lifecycle Policy",
		description:
			"This policy outlines the requirements for the software development lifecycle to ensure secure, reliable, and high-quality software development practices.",
		frequency: "yearly",
		department: "it",
	},
	content: [
		{
			type: "heading",
			attrs: { level: 1 },
			content: [
				{
					type: "text",
					text: "Software Development Lifecycle (SDLC) Policy",
				},
			],
		},
		{
			type: "heading",
			attrs: { level: 2 },
			content: [{ type: "text", text: "Policy Information" }],
		},
		{
			type: "table",
			content: [
				{
					type: "tableRow",
					content: [
						{
							type: "tableCell",
							content: [{ type: "text", text: "Organization" }],
						},
						{
							type: "tableCell",
							content: [{ type: "text", text: "Last Review" }],
						},
						{
							type: "tableCell",
							content: [{ type: "text", text: "Review Frequency" }],
						},
						{
							type: "tableCell",
							content: [{ type: "text", text: "Approved By" }],
						},
						{
							type: "tableCell",
							content: [{ type: "text", text: "Classification" }],
						},
					],
				},
				{
					type: "tableRow",
					content: [
						{
							type: "tableCell",
							content: [{ type: "text", text: "{{organization}}" }],
						},
						{
							type: "tableCell",
							content: [{ type: "text", text: "{{date}}" }],
						},
						{
							type: "tableCell",
							content: [{ type: "text", text: "Annual" }],
						},
						{
							type: "tableCell",
							content: [
								{ type: "text", text: "Chief Information Security Officer" },
							],
						},
						{
							type: "tableCell",
							content: [{ type: "text", text: "Confidential" }],
						},
					],
				},
			],
		},
		{
			type: "heading",
			attrs: { level: 2 },
			content: [{ type: "text", text: "Purpose and Scope" }],
		},
		{
			type: "orderedList",
			attrs: { tight: true, start: 1 },
			content: [
				{
					type: "listItem",
					content: [
						{
							type: "paragraph",
							content: [
								{
									type: "text",
									text: "The purpose of this policy is to define a structured Software Development Lifecycle (SDLC) to ensure secure, reliable, and high-quality software development practices.",
								},
							],
						},
					],
				},
				{
					type: "listItem",
					content: [
						{
							type: "paragraph",
							content: [
								{
									type: "text",
									text: "This policy applies to all software development teams, including employees, contractors, and third-party developers involved in designing, developing, testing, deploying, and maintaining software for the organization.",
								},
							],
						},
					],
				},
				{
					type: "listItem",
					content: [
						{
							type: "paragraph",
							content: [
								{
									type: "text",
									text: "The policy covers all software, including internal applications, customer-facing applications, and third-party integrated software solutions.",
								},
							],
						},
					],
				},
			],
		},
		{
			type: "heading",
			attrs: { level: 2 },
			content: [
				{ type: "text", text: "Software Development Lifecycle Phases" },
			],
		},
		{
			type: "orderedList",
			attrs: { tight: true, start: 1 },
			content: [
				{
					type: "listItem",
					content: [
						{
							type: "paragraph",
							content: [
								{
									type: "text",
									marks: [{ type: "bold" }],
									text: "1. Planning & Requirements:",
								},
							],
						},
						{
							type: "paragraph",
							content: [
								{
									type: "text",
									text: "Define business, functional, and security requirements before software development begins. Risk assessments must be conducted to identify security concerns early in the process.",
								},
							],
						},
					],
				},
				{
					type: "listItem",
					content: [
						{
							type: "paragraph",
							content: [
								{
									type: "text",
									marks: [{ type: "bold" }],
									text: "2. Design & Architecture:",
								},
							],
						},
						{
							type: "paragraph",
							content: [
								{
									type: "text",
									text: "Software design must incorporate security principles, including secure authentication, encryption, and least privilege access controls.",
								},
							],
						},
					],
				},
				{
					type: "listItem",
					content: [
						{
							type: "paragraph",
							content: [
								{
									type: "text",
									marks: [{ type: "bold" }],
									text: "3. Development & Implementation:",
								},
							],
						},
						{
							type: "paragraph",
							content: [
								{
									type: "text",
									text: "Developers must adhere to secure coding practices, including input validation, proper error handling, and protection against known vulnerabilities (e.g., OWASP Top Ten threats).",
								},
							],
						},
					],
				},
				{
					type: "listItem",
					content: [
						{
							type: "paragraph",
							content: [
								{
									type: "text",
									marks: [{ type: "bold" }],
									text: "4. Testing & Validation:",
								},
							],
						},
						{
							type: "paragraph",
							content: [
								{
									type: "text",
									text: "All software must undergo security, functional, and performance testing before deployment. Automated and manual security testing must be conducted, including penetration testing and code reviews.",
								},
							],
						},
					],
				},
			],
		},
	],
} as const;
