import type { TemplatePolicy } from "../types";

export const availabilityPolicy: TemplatePolicy = {
	type: "doc",
	metadata: {
		id: "availability",
		name: "Availability Policy",
		description:
			"This policy defines the requirements for ensuring that information systems and data are available for use when needed.",
		frequency: "yearly",
		department: "it",
	},
	content: [
		{
			type: "heading",
			attrs: { level: 1 },
			content: [{ type: "text", text: "Availability Policy" }],
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
			content: [{ type: "text", text: "Revision History" }],
		},
		{
			type: "table",
			content: [
				{
					type: "tableRow",
					content: [
						{
							type: "tableCell",
							content: [{ type: "text", text: "Version" }],
						},
						{
							type: "tableCell",
							content: [{ type: "text", text: "Date" }],
						},
						{
							type: "tableCell",
							content: [{ type: "text", text: "Description" }],
						},
					],
				},
				{
					type: "tableRow",
					content: [
						{
							type: "tableCell",
							content: [{ type: "text", text: "1.0" }],
						},
						{
							type: "tableCell",
							content: [{ type: "text", text: "{{date}}" }],
						},
						{
							type: "tableCell",
							content: [{ type: "text", text: "Initial document" }],
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
									text: "The purpose of this policy is to define requirements for proper controls to protect the availability of the organization's information systems.",
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
									text: 'This policy applies to all users of information systems within the organization. This typically includes employees and contractors, as well as any external parties that come into contact with systems and information controlled by the organization (hereinafter referred to as "users"). This policy must be made readily available to all users.',
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
			content: [{ type: "text", text: "Background" }],
		},
		{
			type: "paragraph",
			content: [
				{
					type: "text",
					text: "The intent of this policy is to minimize the amount of unexpected or unplanned downtime (also known as outages) of information systems under the organization's control. This policy prescribes specific measures for the organization that will increase system redundancy, introduce failover mechanisms, and implement monitoring such that outages are prevented as much as possible. Where they cannot be prevented, outages will be quickly detected and remediated.",
				},
			],
		},
		{
			type: "paragraph",
			content: [
				{
					type: "text",
					text: "Within this policy, availability is defined as a characteristic of information or information systems in which such information or systems can be accessed by authorized entities whenever needed.",
				},
			],
		},
		{
			type: "heading",
			attrs: { level: 2 },
			content: [{ type: "text", text: "References" }],
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
							content: [{ type: "text", text: "Risk Assessment Policy" }],
						},
					],
				},
			],
		},
		{
			type: "heading",
			attrs: { level: 2 },
			content: [{ type: "text", text: "Policy" }],
		},
		{
			type: "heading",
			attrs: { level: 3 },
			content: [{ type: "text", text: "System Availability Requirements" }],
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
									text: "Information systems must be consistently available to conduct and support business operations.",
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
									text: "Information systems must have a defined availability classification, with appropriate controls enabled and incorporated into development and production processes based on this classification.",
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
									text: "System and network failures must be reported promptly to the organization's lead for Information Technology (IT) or designated IT operations manager.",
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
									text: "Users must be notified of scheduled outages (e.g., system maintenance) that require periods of downtime. This notification must specify the date and time of the system maintenance, expected duration, and anticipated system or service resumption time.",
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
									text: "Prior to production use, each new or significantly modified application must have a completed risk assessment that includes availability risks. Risk assessments must be completed in accordance with the Risk Assessment Policy.",
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
									text: "Capacity management and load balancing techniques must be used, as deemed necessary, to help minimize the risk and impact of system failures.",
								},
							],
						},
					],
				},
			],
		},
		{
			type: "heading",
			attrs: { level: 3 },
			content: [{ type: "text", text: "Backup Requirements" }],
		},
		{
			type: "paragraph",
			content: [
				{
					type: "text",
					text: "Information systems must have an appropriate data backup plan that ensures:",
				},
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
									text: "All sensitive data can be restored within a reasonable time period.",
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
									text: "Full backups of critical resources are performed on at least a weekly basis.",
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
									text: "Incremental backups for critical resources are performed on at least a daily basis.",
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
									text: "Backups and associated media are maintained for a minimum of thirty (30) days and retained for at least one (1) year, or in accordance with legal and regulatory requirements.",
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
									text: "Backups are stored off-site with multiple points of redundancy and protected using encryption and key management.",
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
									text: "Tests of backup data must be conducted once per quarter. Tests of configurations must be conducted twice per year.",
								},
							],
						},
					],
				},
			],
		},
		{
			type: "heading",
			attrs: { level: 3 },
			content: [{ type: "text", text: "Redundancy and Failover" }],
		},
		{
			type: "paragraph",
			content: [
				{
					type: "text",
					text: "Information systems must have an appropriate redundancy and failover plan that meets the following criteria:",
				},
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
									text: "Network infrastructure that supports critical resources must have system-level redundancy (including but not limited to a secondary power supply, backup disk-array, and secondary computing system).",
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
									text: "Critical core components must have an actively maintained spare. SLAs must require parts replacement within twenty-four (24) hours.",
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
									text: "Servers that support critical resources must have redundant power supplies and network interface cards.",
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
									text: "Servers classified as high availability must use disk mirroring.",
								},
							],
						},
					],
				},
			],
		},
		{
			type: "heading",
			attrs: { level: 3 },
			content: [{ type: "text", text: "Business Continuity" }],
		},
		{
			type: "paragraph",
			content: [
				{
					type: "text",
					text: "Information systems must have an appropriate business continuity plan that adheres to the following availability classifications and requirements:",
				},
			],
		},
		{
			type: "table",
			content: [
				{
					type: "tableRow",
					content: [
						{
							type: "tableCell",
							content: [{ type: "text", text: "Availability Classification" }],
						},
						{
							type: "tableCell",
							content: [{ type: "text", text: "Availability Requirements" }],
						},
						{
							type: "tableCell",
							content: [{ type: "text", text: "Scheduled Outage" }],
						},
						{
							type: "tableCell",
							content: [{ type: "text", text: "Recovery Time" }],
						},
						{
							type: "tableCell",
							content: [{ type: "text", text: "Data Loss or Impact Loss" }],
						},
					],
				},
				{
					type: "tableRow",
					content: [
						{
							type: "tableCell",
							content: [{ type: "text", text: "High" }],
						},
						{
							type: "tableCell",
							content: [{ type: "text", text: "High to Continuous" }],
						},
						{
							type: "tableCell",
							content: [{ type: "text", text: "30 minutes" }],
						},
						{
							type: "tableCell",
							content: [{ type: "text", text: "1 hour" }],
						},
						{
							type: "tableCell",
							content: [{ type: "text", text: "Minimal" }],
						},
					],
				},
				{
					type: "tableRow",
					content: [
						{
							type: "tableCell",
							content: [{ type: "text", text: "Medium" }],
						},
						{
							type: "tableCell",
							content: [{ type: "text", text: "Standard Availability" }],
						},
						{
							type: "tableCell",
							content: [{ type: "text", text: "2 hours" }],
						},
						{
							type: "tableCell",
							content: [{ type: "text", text: "4 hours" }],
						},
						{
							type: "tableCell",
							content: [
								{
									type: "text",
									text: "Some data loss is tolerated if it results in quicker restoration",
								},
							],
						},
					],
				},
				{
					type: "tableRow",
					content: [
						{
							type: "tableCell",
							content: [{ type: "text", text: "Low" }],
						},
						{
							type: "tableCell",
							content: [{ type: "text", text: "Limited Availability" }],
						},
						{
							type: "tableCell",
							content: [{ type: "text", text: "4 hours" }],
						},
						{
							type: "tableCell",
							content: [{ type: "text", text: "Next business day" }],
						},
						{
							type: "tableCell",
							content: [
								{
									type: "text",
									text: "Some data loss is tolerated if it results in quicker restoration",
								},
							],
						},
					],
				},
			],
		},
		{
			type: "paragraph",
			content: [
				{
					type: "text",
					text: "The business continuity plan must also ensure:",
				},
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
									text: "Recovery time requirements and data loss limits must be adhered to with specific documentation in the plan.",
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
									text: "Company and/or external critical resources, personnel, and necessary corrective actions must be specifically identified.",
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
									text: "Specific responsibilities and tasks for responding to emergencies and resuming business operations must be included in the plan.",
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
									text: "All applicable legal and regulatory requirements must be satisfied.",
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
									text: "Requirements for information system availability and redundancy are defined in the System Availability Policy.",
								},
							],
						},
					],
				},
			],
		},
	],
} as const;
