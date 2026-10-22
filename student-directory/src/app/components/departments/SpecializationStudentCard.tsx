import Link from "next/link";
import type { Student } from "@/app/types";

export default function SpecializationStudentCard({
  student,
}: {
  student: Student;
}) {
  return (
    <li className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <Link href={`/students/${student.id}`} className="text-lg font-semibold text-sky-700 hover:underline">
        {student.name}
      </Link>
      <p className="mt-2 text-sm text-slate-600">{student.id}</p>
      <p className="mt-1 text-sm text-slate-600">Year {student.year}</p>
      <p className="mt-2 text-sm text-slate-500">{student.email}</p>
    </li>
  );
}
