import Link from "next/link";
import { notFound } from "next/navigation";
import { specializations } from "../../../../lib/data/specializations";
import { students } from "../../../../lib/data/students";

export function generateStaticParams() {
  return specializations.map((specialization) => ({
    department: specialization.departmentSlug,
    specialization: specialization.slug,
  }));
}

export default async function SpecializationPage({
  params,
}: {
  params: Promise<{ department: string; specialization: string }>;
}) {
  const { department: departmentSlug, specialization: specializationSlug } =
    await params;
  const specialization = specializations.find(
    (item) =>
      item.departmentSlug === departmentSlug && item.slug === specializationSlug,
  );

  if (!specialization) {
    notFound();
  }

  const enrolledStudents = specialization.studentIds
    .map((id) => students.find((student) => student.id === id))
    .filter((student): student is (typeof students)[number] => student !== undefined);

  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <Link
        href={`/departments/${specialization.departmentSlug}`}
        className="text-sm font-medium text-sky-700 hover:underline"
      >
        ← {specialization.departmentName}
      </Link>

      <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h1 className="text-4xl font-bold text-slate-900">{specialization.name}</h1>
        <p className="mt-3 max-w-3xl text-slate-600">{specialization.description}</p>

        <dl className="mt-8 grid gap-4 rounded-2xl bg-slate-50 p-5 sm:grid-cols-2">
          <div>
            <dt className="text-sm text-slate-500">Track</dt>
            <dd className="mt-1 font-medium text-slate-800">{specialization.trackCode}</dd>
          </div>
          <div>
            <dt className="text-sm text-slate-500">Academic lead</dt>
            <dd className="mt-1 font-medium text-slate-800">{specialization.academicLead}</dd>
          </div>
          <div>
            <dt className="text-sm text-slate-500">Core lab</dt>
            <dd className="mt-1 font-medium text-slate-800">{specialization.coreLab}</dd>
          </div>
          <div>
            <dt className="text-sm text-slate-500">Curriculum</dt>
            <dd className="mt-1 font-medium text-slate-800">{specialization.curriculumCycle}</dd>
          </div>
          <div>
            <dt className="text-sm text-slate-500">Enrollment</dt>
            <dd className="mt-1 font-medium text-slate-800">{specialization.totalEnrollment}</dd>
          </div>
        </dl>
      </div>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-slate-900">Students</h2>
        {enrolledStudents.length > 0 ? (
          <ul className="mt-4 grid gap-4 md:grid-cols-2">
            {enrolledStudents.map((student) => (
              <li
                key={student.id}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <Link
                  href={`/students/${student.id}`}
                  className="text-lg font-semibold text-sky-700 hover:underline"
                >
                  {student.name}
                </Link>
                <p className="mt-2 text-sm text-slate-600">
                  Year {student.year} · {student.email}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-3 text-slate-600">
            No students are listed for this specialization yet.
          </p>
        )}
      </section>
    </div>
  );
}