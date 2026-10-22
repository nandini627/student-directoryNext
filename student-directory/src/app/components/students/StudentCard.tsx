import Link from "next/link";
import type { Student } from "@/app/types";

export default function StudentCard({ student }: { student: Student }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-sky-200 hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-100 text-sm font-semibold text-sky-700">
            {student.initials}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900">{student.name}</h3>
            <p className="text-sm text-slate-500">{student.id}</p>
          </div>
        </div>
        <span className="rounded-full bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-700">
          {student.status}
        </span>
      </div>

      <div className="mt-5 space-y-2 text-sm text-slate-600">
        <p>
          <span className="font-medium text-slate-700">Department:</span> {student.department}
        </p>
        <p>
          <span className="font-medium text-slate-700">Study year:</span> {student.year}
        </p>
      </div>

      <div className="mt-auto pt-5">
        <Link
          href={`/students/${student.id}`}
          className="inline-flex rounded-full bg-sky-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-sky-500"
        >
          View Profile
        </Link>
      </div>
    </article>
  );
}
