export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
          About
        </p>
        <h1 className="mt-2 text-4xl font-bold text-slate-900">
          About the Campus Directory
        </h1>
        <p className="mt-4 leading-7 text-slate-600">
          The Campus Directory helps students explore departments, specializations,
          and the people who make up our academic community. It provides a clear,
          responsive overview of academic life and helps visitors understand how
          programs and student groups are organized.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-slate-50 p-5">
            <h2 className="text-lg font-semibold text-slate-900">Students</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Browse student records and profile details across the campus.
            </p>
          </div>
          <div className="rounded-2xl bg-slate-50 p-5">
            <h2 className="text-lg font-semibold text-slate-900">Departments</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Review academic faculties and their program offerings.
            </p>
          </div>
          <div className="rounded-2xl bg-slate-50 p-5">
            <h2 className="text-lg font-semibold text-slate-900">Specializations</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Navigate into focused learning tracks and connected student groups.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}