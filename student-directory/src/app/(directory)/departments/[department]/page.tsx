import Link from "next/link";
import { notFound } from "next/navigation";
import { departments } from "../../../lib/data/departments";
import { specializations } from "../../../lib/data/specializations";
import { students } from "../../../lib/data/students";

export function generateStaticParams() {
  return departments.map((department) => ({ department: department.slug }));
}

export default async function DepartmentPage({
  params,
}: {
  params: Promise<{ department: string }>;
}) {
  const { department: departmentSlug } = await params;
  const department = departments.find((item) => item.slug === departmentSlug);

  if (!department) {
    notFound();
  }

  const departmentSpecializations = specializations.filter(
    (item) => item.departmentSlug === department.slug,
  );
  const departmentStudents = students.filter(
    (student) => student.departmentSlug === department.slug,
  );

  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <Link href="/departments" className="text-sm font-medium text-sky-700 hover:underline">
        ← All departments
      </Link>

      <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h1 className="text-4xl font-bold text-slate-900">{department.name}</h1>
        <p className="mt-3 max-w-3xl text-slate-600">{department.description}</p>

        <dl className="mt-8 grid gap-4 rounded-2xl bg-slate-50 p-5 sm:grid-cols-2">
          <div>
            <dt className="text-sm text-slate-500">Specializations</dt>
            <dd className="mt-1 font-medium text-slate-800">{department.specializations}</dd>
          </div>
          <div>
            <dt className="text-sm text-slate-500">Enrolled students</dt>
            <dd className="mt-1 font-medium text-slate-800">{department.enrolledStudents}</dd>
          </div>
        </dl>
      </div>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-slate-900">Specializations</h2>
        {departmentSpecializations.length > 0 ? (
          <ul className="mt-4 grid gap-4 md:grid-cols-2">
            {departmentSpecializations.map((specialization) => (
              <li
                key={specialization.slug}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-slate-900">{specialization.name}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {specialization.description}
                </p>
                <Link
                  href={`/departments/${department.slug}/${specialization.slug}`}
                  className="mt-4 inline-block text-sm font-medium text-sky-700 hover:underline"
                >
                  View specialization →
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-3 text-slate-600">
            No specializations have been added for this department yet.
          </p>
        )}
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-slate-900">Students</h2>
        {departmentStudents.length > 0 ? (
          <ul className="mt-4 divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-200 bg-white">
            {departmentStudents.map((student) => (
              <li key={student.id} className="p-4">
                <Link
                  href={`/students/${student.id}`}
                  className="font-medium text-sky-700 hover:underline"
                >
                  {student.name}
                </Link>
                <p className="mt-1 text-sm text-slate-600">
                  Year {student.year} · {student.status}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-3 text-slate-600">
            No students have been added for this department yet.
          </p>
        )}
      </section>
    </div>
  );
}
