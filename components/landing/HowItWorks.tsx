import { ArrowRight } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      title: "Enter Startup Details",
      description: "Briefly fill in your startup's name, industry, and revenue model",
    },
    {
      title: "Select Industry & Style",
      description: "Choose a template style suited to your industry",
    },
    {
      title: "Download or Share",
      description: "Export the finished pitch deck as a PDF or shareable link",
    },
  ]

  return (
    <section className="w-full bg-black px-4 py-24 md:px-6">
      <div className="mx-auto max-w-6xl w-full">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">How It Works</h2>
          <p className="mt-4 text-lg text-gray-400">Pitching Made Effortless – We Handle the Deck, You Bring the Vision</p>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-3">
          {steps.map((step, i) => (
            <div key={i} className="relative flex flex-col items-center text-center">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-xl font-bold text-white">
                {i + 1}
              </div>
              <h3 className="mb-2 text-xl font-semibold text-white">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
              {i < steps.length - 1 && (
                <ArrowRight className="absolute -right-4 top-6 hidden h-8 w-8 text-green-500 sm:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}