"use client";

export default function GlobalError({
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body>
        <main className="flex min-h-dvh items-center justify-center bg-brand-offwhite px-5 text-brand-black">
          <section className="max-w-xl rounded-lg border border-brand-black/10 bg-white p-8 shadow-line">
            <p className="mb-3 text-sm font-semibold uppercase text-brand-graphite">
              Research for Purpose
            </p>
            <h1 className="font-display text-4xl font-medium leading-tight">
              Something interrupted this page.
            </h1>
            <p className="mt-4 text-base leading-7 text-brand-graphite">
              Please try loading the AI platforms page again.
            </p>
            <button
              type="button"
              onClick={() => reset()}
              className="mt-6 min-h-12 rounded-full bg-brand-black px-6 text-sm font-semibold text-brand-offwhite transition hover:bg-brand-warm"
            >
              Try again
            </button>
          </section>
        </main>
      </body>
    </html>
  );
}
