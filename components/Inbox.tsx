
export default function Inbox() {
  const emails = [
    {
      sender: "Welcome Team",
      subject: "Welcome to TempMails",
      preview: "Thank you for trying our temporary email service.",
      time: "10:42 AM",
    },
    {
      sender: "Example Website",
      subject: "Your verification code",
      preview: "Your verification code is 482913.",
      time: "10:40 AM",
    },
    {
      sender: "Newsletter",
      subject: "Your weekly update",
      preview: "Here are the latest updates for you.",
      time: "10:35 AM",
    },
  ];

  return (
    <section className="w-full bg-gray-50 px-4 py-12 sm:py-16">
      <div className="mx-auto max-w-5xl">
        <div className="mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Your Inbox
            </h2>

            <p className="mt-1 text-sm text-gray-600">
              Emails received at your temporary address will appear here.
            </p>
          </div>

          <span className="w-fit rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
            3 sample emails
          </span>
        </div>

        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
          <div className="flex items-center justify-between border-b border-gray-200 px-5 py-4">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-green-500" />

              <span className="text-sm font-semibold text-gray-800">
                Inbox messages
              </span>
            </div>

            <span className="text-xs text-gray-500">
              Demo preview
            </span>
          </div>

          <div>
            {emails.map((email, index) => (
              <div
                key={index}
                className="flex flex-col gap-2 border-b border-gray-100 px-5 py-4 last:border-b-0 sm:flex-row sm:items-start sm:justify-between"
              >
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-gray-900">
                    {email.sender}
                  </p>

                  <p className="mt-1 text-sm font-medium text-gray-800">
                    {email.subject}
                  </p>

                  <p className="mt-1 break-words text-sm text-gray-500">
                    {email.preview}
                  </p>
                </div>

                <span className="shrink-0 text-xs text-gray-400">
                  {email.time}
                </span>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-200 bg-gray-50 px-5 py-3">
            <p className="text-center text-xs text-gray-500">
              These are sample messages for design purposes only.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
