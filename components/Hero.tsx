
"use client";

export default function Hero() {
  const email = "x7k29f@tempnest.com";

  return (
    <section className="w-full bg-white px-4 py-12 sm:py-16">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Your Temporary Email
          </h1>

          <p className="text-sm leading-6 text-gray-600 sm:text-base">
            Get a temporary email address instantly. Receive emails without
            exposing your personal inbox.
          </p>
        </div>

        <div className="w-full max-w-lg rounded-xl border border-blue-100 bg-blue-50/60 p-5 shadow-sm sm:p-7">
          <p className="mb-3 text-sm font-medium text-gray-700">
            Your temporary email address
          </p>

          <div className="flex flex-col items-center justify-between gap-3 rounded-lg border border-gray-200 bg-white p-3 sm:flex-row">
            <span className="break-all text-sm font-semibold text-gray-900">
              {email}
            </span>

            <button
              type="button"
              onClick={() => {
                navigator.clipboard.writeText(email);
              }}
              className="w-full shrink-0 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 sm:w-auto"
            >
              Copy
            </button>
          </div>

          <div className="mt-4 flex flex-col justify-center gap-3 sm:flex-row">
            <button
              type="button"
              className="rounded-md bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
            >
              Generate New Email
            </button>

            <button
              type="button"
              className="rounded-md border border-gray-300 bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50"
            >
              Refresh Inbox
            </button>
          </div>

          <p className="mt-4 text-xs text-gray-500">
            Your temporary inbox expires after 10 minutes.
          </p>
        </div>

        <p className="text-xs text-gray-500">
          Free to use · No registration required · Protect your personal inbox
        </p>
      </div>
    </section>
  );
}
