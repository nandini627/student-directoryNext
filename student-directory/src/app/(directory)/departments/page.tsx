
import DepartmentCard from "../../components/departments/DepartmentCard";
import { departments } from "../../lib/data/departments";

export default function DepartmentsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
          Faculties
        </p>
        <h1 className="mt-2 text-4xl font-bold text-slate-900">Departments</h1>
        <p className="mt-3 text-slate-600">
          Explore academic faculties, programs, and student communities across the campus.
        </p>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {departments.map((department) => (
          <DepartmentCard key={department.slug} department={department} />
        ))}
      </div>
    </div>
  );
}
