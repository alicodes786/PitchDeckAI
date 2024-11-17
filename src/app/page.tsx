'use client'

import { useEffect, useState } from "react"
import { Navbar } from "@/components/landing/Navbar"
import { Hero } from "@/components/landing/Hero"
import { Features } from "@/components/landing/Features"
import { HowItWorks } from "@/components/landing/HowItWorks"
import { Testimonials } from "@/components/landing/Testimonials"
import { CTA } from "@/components/landing/CTA"
import './globals.css'

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="flex min-h-screen w-full flex-col">
      <Navbar isScrolled={isScrolled} />
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <CTA />
    </div>
  )
}