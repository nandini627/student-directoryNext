import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-6 py-20 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
        404
      </p>
      <h1 className="mt-4 text-4xl font-bold text-slate-900">Page not found</h1>
      <p className="mt-3 text-slate-600">
        The page you are looking for does not exist or may have been moved.
      </p>
      <Link
        href="/students"
        className="mt-8 rounded-full bg-slate-900 px-5 py-3 font-medium text-white hover:bg-slate-700"
      >
        Return to students
      </Link>
    </main>
  );
}
