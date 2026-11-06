
export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Get Your Email",
      description:
        "Get a temporary email address instantly without creating an account.",
      icon: "📧",
    },
    {
      number: "02",
      title: "Use Anywhere",
      description:
        "Copy your temporary email address and use it on websites or online services.",
      icon: "🌐",
    },
    {
      number: "03",
      title: "Receive Messages",
      description:
        "Return to your temporary inbox to read incoming messages.",
      icon: "📥",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="w-full bg-gray-50 px-4 py-16"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section heading */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            How It Works
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-gray-600">
            Start using a temporary email address
            in just three simple steps.
          </p>
        </div>

        {/* Steps container */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">

          {steps.map((step) => (
            <div
              key={step.number}
              className="relative flex flex-col items-center rounded-xl border border-gray-200 bg-white p-8 text-center shadow-sm"
            >

              {/* Step number */}
              <span className="absolute right-5 top-5 text-sm font-bold text-blue-500">
                {step.number}
              </span>

              {/* Step icon */}
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-3xl">
                {step.icon}
              </div>

              {/* Step title */}
              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                {step.title}
              </h3>

              {/* Step description */}
              <p className="text-sm leading-6 text-gray-600">
                {step.description}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
