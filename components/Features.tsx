
export default function Features() {
  const features = [
    {
      icon: "🔒",
      title: "Privacy Protection",
      description:
        "Keep your personal email address private when signing up for websites and online services.",
    },
    {
      icon: "⚡",
      title: "Instant Email",
      description:
        "Get a temporary email address instantly without registration or complicated setup.",
    },
    {
      icon: "🛡️",
      title: "Reduce Spam",
      description:
        "Use a disposable address to help keep unwanted messages away from your personal inbox.",
    },
    {
      icon: "💰",
      title: "Completely Free",
      description:
        "Use temporary email addresses without paying subscription fees.",
    },
    {
      icon: "📩",
      title: "Easy Inbox",
      description:
        "View received messages directly on the website through a simple inbox.",
    },
    {
      icon: "⏱️",
      title: "Temporary Access",
      description:
        "Use an address for a short period without keeping it permanently.",
    },
  ];

  return (
    <section
      id="features"
      className="w-full bg-white px-4 py-16"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section heading */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Why Choose TempMails?
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-gray-600">
            A simple and convenient way to protect
            your personal inbox.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl border border-gray-200 bg-white p-6 transition-shadow hover:shadow-lg"
            >

              {/* Feature icon */}
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-2xl">
                {feature.icon}
              </div>

              {/* Feature title */}
              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                {feature.title}
              </h3>

              {/* Feature description */}
              <p className="text-sm leading-6 text-gray-600">
                {feature.description}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
