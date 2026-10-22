export default function StudentsLoading() {
  return (
    <div
      className="mx-auto max-w-5xl px-6 py-12"
      role="status"
      aria-label="Loading students"
    >
      <div className="h-9 w-48 animate-pulse rounded bg-slate-200" />
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {Array.from({ length: 4 }, (_, index) => (
          <div
            key={index}
            className="h-28 animate-pulse rounded-lg border border-slate-200 bg-slate-100"
          />
        ))}
      </div>
    </div>
  );
}