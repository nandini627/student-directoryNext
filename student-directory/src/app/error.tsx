'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-6 py-20 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-600">
        Error
      </p>
      <h1 className="mt-4 text-4xl font-bold text-slate-900">
        Something went wrong
      </h1>
      <p className="mt-3 text-slate-600">
        The page failed to load unexpectedly. Please try again.
      </p>
      <button
        type="button"
        onClick={() => reset()}
        className="mt-8 rounded-full bg-rose-600 px-5 py-3 font-medium text-white hover:bg-rose-500"
      >
        Try again
      </button>
    </main>
  );
}
