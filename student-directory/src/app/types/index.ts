export interface Subject {
  code: string;
  name: string;
  credits: number;
}

export interface Student {
  id: string;
  name: string;
  initials: string;
  department: string;
  departmentSlug: string;
  year: number;
  email: string;
  enrolled: string;
  status: "Active" | "Inactive";
  about: string;
  subjects: Subject[];
}

export interface Department {
  name: string;
  slug: string;
  description: string;
  specializations: number;
  enrolledStudents: number;
}