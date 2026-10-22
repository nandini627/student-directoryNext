import Link from "next/link";
import type { Department } from "@/app/types";

export default function DepartmentCard({ department }: { department: Department }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-sky-200 hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold text-slate-900">{department.name}</h2>
        </div>
      </div>

      <p className="mt-4 text-sm leading-6 text-slate-600">{department.description}</p>

      <div className="mt-5 text-sm text-slate-600">
        {department.specializations} specializations · {department.enrolledStudents} enrolled students
      </div>

      <Link
        href={`/departments/${department.slug}`}
        className="mt-6 inline-flex w-fit rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
      >
        View department →
      </Link>
    </article>
  );
}
