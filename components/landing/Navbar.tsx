import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export function Navbar({ isScrolled }: { isScrolled: boolean }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav className={`sticky top-0 z-50 w-full transition-all duration-300 bg-black backdrop-blur-sm ${isScrolled ? 'h-16' : 'h-20'}`}>
      <div className="mx-auto max-w-6xl flex h-full items-center justify-between px-4 md:px-6">
        <Link href="/" className="text-xl font-bold text-white">
          PitchDeck AI
        </Link>
        <div className="hidden items-center space-x-6 md:flex">
          <Link href="#features" className="text-sm text-white hover:text-gray-300">
            Features
          </Link>
          <Link href="#pricing" className="text-sm text-white hover:text-gray-300">
            Pricing
          </Link>
          <Link href="#support" className="text-sm text-white hover:text-gray-300">
            Support
          </Link>
          <Link href={'/login'}  className="text-sm text-white hover:bg-white/10">
            Log In
          </Link>
          <Button size="sm" className="bg-green-500 text-white hover:bg-green-600">
            Generate My Pitch Deck
          </Button>
        </div>
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6 text-white" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] bg-black/95 text-white">
            <div className="flex flex-col space-y-4">
              <Link href="#features" className="text-lg" onClick={() => setIsMobileMenuOpen(false)}>
                Features
              </Link>
              <Link href="#pricing" className="text-lg" onClick={() => setIsMobileMenuOpen(false)}>
                Pricing
              </Link>
              <Link href="#support" className="text-lg" onClick={() => setIsMobileMenuOpen(false)}>
                Support
              </Link>
              <Link href={"/login"} className="w-full text-white hover:bg-white/10">
                Log In
              </Link>
              <Button className="w-full bg-green-500 text-white hover:bg-green-600">
                Generate My Pitch Deck
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}