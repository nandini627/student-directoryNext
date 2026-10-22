
export interface Specialization {
  slug: string;
  name: string;
  departmentSlug: string;
  departmentName: string;
  description: string;
  trackCode: string;
  academicLead: string;
  coreLab: string;
  totalEnrollment: number;
  curriculumCycle: string;
  studentIds: string[];
}

export const specializations: Specialization[] = [
  {
    slug: "web-development",
    name: "Web Development",
    departmentSlug: "computer-science",
    departmentName: "Computer Science",
    description:
      "Focusing on modern frontend architectures, full-stack frameworks, reactive interfaces, and distributed web APIs.",
    trackCode: "CS-SPEC-04",
    academicLead: "Prof. Elena Vance",
    coreLab: "Turing Hall 408",
    totalEnrollment: 4,
    curriculumCycle: "2024–2025 Revised",
    studentIds: ["STU-1042", "STU-1155", "STU-1310", "STU-1388"],
  },
  {
    slug: "artificial-intelligence",
    name: "Artificial Intelligence",
    departmentSlug: "computer-science",
    departmentName: "Computer Science",
    description:
      "Explores machine learning workflows, data pipelines, neural architectures, and responsible AI systems design.",
    trackCode: "CS-SPEC-01",
    academicLead: "Dr. Nikhil Rao",
    coreLab: "Innovation Lab B12",
    totalEnrollment: 5,
    curriculumCycle: "2025–2026 Updated",
    studentIds: ["STU-1042", "STU-1310", "STU-1388"],
  },
  {
    slug: "systems-engineering",
    name: "Systems Engineering",
    departmentSlug: "computer-science",
    departmentName: "Computer Science",
    description:
      "Covers distributed computing, cloud orchestration, resilience engineering, and scalable service design.",
    trackCode: "CS-SPEC-07",
    academicLead: "Prof. Isabel Gomez",
    coreLab: "Systems Studio 204",
    totalEnrollment: 3,
    curriculumCycle: "2024–2025 Cycle",
    studentIds: ["STU-1042", "STU-1310"],
  },
  {
    slug: "interaction-design",
    name: "Interaction Design",
    departmentSlug: "design",
    departmentName: "Design",
    description:
      "Focuses on how users navigate experiences, create meaningful flows, and interact with digital systems thoughtfully.",
    trackCode: "DS-SPEC-02",
    academicLead: "Prof. Maya Nair",
    coreLab: "Studio North 5",
    totalEnrollment: 2,
    curriculumCycle: "2025–2026 Cycle",
    studentIds: ["STU-1089", "STU-1201"],
  },
  {
    slug: "design-research",
    name: "Design Research",
    departmentSlug: "design",
    departmentName: "Design",
    description:
      "Introduces evidence-based design thinking, user interviews, prototyping, and accessibility-led research practices.",
    trackCode: "DS-SPEC-05",
    academicLead: "Dr. Sara Bell",
    coreLab: "Research Atelier 3",
    totalEnrollment: 3,
    curriculumCycle: "2024–2025 Cycle",
    studentIds: ["STU-1089", "STU-1201"],
  },
  {
    slug: "financial-technology",
    name: "Financial Technology",
    departmentSlug: "business",
    departmentName: "Business",
    description:
      "Studies fintech models, digital payments, data-driven decision-making, and innovation in financial services.",
    trackCode: "BU-SPEC-02",
    academicLead: "Prof. Daniel Brooks",
    coreLab: "Business Analytics Lab",
    totalEnrollment: 2,
    curriculumCycle: "2025–2026 Cycle",
    studentIds: ["STU-1120", "STU-1244"],
  },
  {
    slug: "business-analytics",
    name: "Business Analytics",
    departmentSlug: "business",
    departmentName: "Business",
    description:
      "Teaches forecasting, dashboards, strategic modeling, and analytics frameworks for operational decision support.",
    trackCode: "BU-SPEC-04",
    academicLead: "Dr. Rachel Kim",
    coreLab: "Data Insight Hub",
    totalEnrollment: 2,
    curriculumCycle: "2024–2025 Cycle",
    studentIds: ["STU-1120", "STU-1244"],
  },
];
