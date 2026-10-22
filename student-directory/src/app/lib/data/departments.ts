
import type { Department } from "@/app/types";

export const departments: Department[] = [
  {
    name: "Computer Science",
    slug: "computer-science",
    description:
      "Software engineering, artificial intelligence, algorithms, and systems infrastructure.",
    specializations: 4,
    enrolledStudents: 320,
  },
  {
    name: "Design",
    slug: "design",
    description:
      "User experience research, visual communication, interaction design, and product prototyping.",
    specializations: 3,
    enrolledStudents: 185,
  },
  {
    name: "Business",
    slug: "business",
    description:
      "Strategic management, financial technology, international entrepreneurship, and analytics.",
    specializations: 3,
    enrolledStudents: 240,
  },
];
