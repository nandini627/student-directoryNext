import Link from "next/link";
import { notFound } from "next/navigation";
import { students } from "../../../lib/data/students";

export function generateStaticParams() {
  return students.map((student) => ({ id: student.id }));
}

export default async function StudentDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const student = students.find((item) => item.id === id);

  if (!student) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-4xl px-6 py-12">
      <Link href="/students" className="text-sm font-medium text-sky-700 hover:underline">
        ← All students
      </Link>

      <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-sky-100 text-xl font-bold text-sky-700">
            {student.initials}
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500">{student.id}</p>
            <h1 className="mt-1 text-3xl font-bold text-slate-900">{student.name}</h1>
            <p className="mt-2 text-slate-600">
              {student.department} · Year {student.year}
            </p>
          </div>
        </div>

        <dl className="mt-8 grid gap-4 rounded-2xl bg-slate-50 p-5 sm:grid-cols-2">
          <div>
            <dt className="text-sm text-slate-500">Email</dt>
            <dd className="mt-1 font-medium text-slate-800">{student.email}</dd>
          </div>
          <div>
            <dt className="text-sm text-slate-500">Enrollment</dt>
            <dd className="mt-1 font-medium text-slate-800">{student.enrolled}</dd>
          </div>
          <div>
            <dt className="text-sm text-slate-500">Status</dt>
            <dd className="mt-1 font-medium text-slate-800">{student.status}</dd>
          </div>
          <div>
            <dt className="text-sm text-slate-500">Department</dt>
            <dd className="mt-1 font-medium text-slate-800">{student.department}</dd>
          </div>
        </dl>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-slate-900">About</h2>
          <p className="mt-3 leading-7 text-slate-600">{student.about}</p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-slate-900">Subjects</h2>
          <ul className="mt-3 divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-200">
            {student.subjects.map((subject) => (
              <li
                key={subject.code}
                className="flex items-center justify-between gap-4 bg-white p-4"
              >
                <span>
                  <span className="font-medium text-slate-800">{subject.name}</span>
                  <span className="ml-2 text-sm text-slate-500">{subject.code}</span>
                </span>
                <span className="shrink-0 text-sm text-slate-600">
                  {subject.credits} credits
                </span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </article>
  );
}