import Link from "next/link";

const overviewCards = [
  {
    title: "Students",
    description: "Browse student records across departments and year levels.",
    href: "/students",
  },
  {
    title: "Departments",
    description: "Explore faculties, specializations, and academic programs.",
    href: "/departments",
  },
  {
    title: "About",
    description: "Learn how the campus directory is organized and used.",
    href: "/about",
  },
];

export default function HomePage() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col px-6 py-16">
      <section className="rounded-3xl bg-slate-900 px-8 py-12 text-white shadow-xl">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-sky-300">
          Campus Directory
        </p>
        <h1 className="mt-4 max-w-2xl text-4xl font-bold tracking-tight md:text-5xl">
          Discover student records, departments, and academic paths.
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-300">
          A responsive university directory built for browsing students, exploring
          departments, and reviewing specialization details.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/students"
            className="rounded-full bg-sky-500 px-5 py-3 font-medium text-white transition hover:bg-sky-400"
          >
            View students
          </Link>
          <Link
            href="/departments"
            className="rounded-full border border-slate-600 bg-transparent px-5 py-3 font-medium text-white transition hover:border-slate-400 hover:bg-slate-800"
          >
            Explore departments
          </Link>
        </div>
      </section>

      <section className="mt-10 grid gap-5 md:grid-cols-3">
        {overviewCards.map((card) => (
          <Link
            key={card.title}
            href={card.href}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-sky-200 hover:shadow-md"
          >
            <h2 className="text-xl font-semibold text-slate-900">{card.title}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              {card.description}
            </p>
            <span className="mt-5 inline-flex text-sm font-medium text-blue-700">
              Open page →
            </span>
          </Link>
        ))}
      </section>
    </main>
  );
}
