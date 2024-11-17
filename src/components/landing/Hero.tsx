import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative flex min-h-[80vh] w-full items-center justify-center overflow-hidden bg-black">
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cpath d='M0 0h40v40H0V0zm1 1v38h38V1H1z' fill='%23ffffff' fill-opacity='0.4'/%3E%3C/svg%3E")`,
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-500/20 via-green-500/5 to-transparent" />
      <div className="container relative z-10 mx-auto px-4 text-center md:px-6">
        <div className="relative">
          <div className="absolute -inset-x-20 -top-20 h-[400px] bg-[radial-gradient(circle_500px_at_50%_50%,_var(--tw-gradient-stops))] from-green-500/30 via-green-500/5 to-transparent blur-2xl" />
          <h1 className="relative bg-gradient-to-b from-white to-white/80 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-6xl md:text-7xl">
            Generate a Winning
            <br />
            Pitch Deck in Minutes
          </h1>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300 md:text-xl">
          Create professional pitch decks fast, with customizable slides that capture investors&apos; attention.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/signup">
            <Button
              size="lg"
              className="group h-12 bg-green-500 px-8 text-lg text-white hover:bg-green-600 flex items-center"
            >
              Start Your Free Trial
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-200 transform group-hover:translate-x-1" />
            </Button>
          </Link>
          <Link href="/">
            <Button
              variant="outline"
              size="lg"
              className="h-12 px-8 text-lg text-white border-white hover:bg-gray-200 hover:text-black"
            >
              Watch Demo
            </Button>
          </Link>
        </div>
        <p className="mt-6 text-sm text-gray-400">
          No credit card required • 14-day free trial
        </p>
      </div>
    </section>
  );
}
