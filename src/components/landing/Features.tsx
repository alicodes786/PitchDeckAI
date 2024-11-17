import { Card, CardContent } from "@/components/ui/card"
import { FileText, Layers, Share2, Sparkles } from "lucide-react"

export function Features() {
  const features = [
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "AI-Suggested Content",
      description: "Auto-generated content suggestions tailored to your industry",
    },
    {
      icon: <Layers className="h-6 w-6" />,
      title: "Industry-Specific Templates",
      description: "Curated templates that align with various industries",
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "PDF Export",
      description: "Instantly download pitch decks as a high-quality PDF",
    },
    {
      icon: <Share2 className="h-6 w-6" />,
      title: "One-Click Sharing",
      description: "Share view-only links with investors for instant feedback",
    },
  ]

  return (
    <section id="features" className="w-full bg-black px-4 py-24 md:px-6">
      <div className="mx-auto max-w-6xl w-full">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Powerful Features</h2>
          <p className="mt-4 text-lg text-gray-400">Everything you need to create a compelling pitch deck</p>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <Card key={i} className="border-green-500/20 bg-black/50 backdrop-blur-sm">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 rounded-full bg-green-500/10 p-3 text-green-500">{feature.icon}</div>
                <h3 className="mb-2 font-semibold text-white">{feature.title}</h3>
                <p className="text-sm text-gray-400">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}