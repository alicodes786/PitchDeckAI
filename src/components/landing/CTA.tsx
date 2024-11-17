import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section className="relative w-full bg-black px-4 py-24 md:px-6">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-500/20 via-black to-black" />
      <div className="relative z-10 mx-auto max-w-4xl w-full text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Ready to Craft Your Winning Pitch?</h2>
        <p className="mt-4 text-lg text-gray-300">Join thousands of founders who&apos;ve successfully raised with our platform</p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button size="lg" className="group h-12 bg-green-500 px-8 text-lg hover:bg-green-600">
            Get Started Now
            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
          </Button>
          <Button variant="outline" size="lg" className="h-12 px-8 text-lg text-white hover:bg-white/10">
            View Sample Deck
          </Button>
        </div>
      </div>
    </section>
  )
}