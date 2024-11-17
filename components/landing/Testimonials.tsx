import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export function Testimonials() {
  const testimonials = [
    {
      quote: "Generated our seed round deck in minutes. Absolutely game-changing for early-stage founders.",
      author: "Sarah Chen",
      role: "Founder, TechStart",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      quote: "The AI suggestions helped us articulate our value proposition perfectly. Raised $2M with this deck.",
      author: "Michael Ross",
      role: "CEO, HealthTech Solutions",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      quote: "Professional templates and smart suggestions made our pitch deck stand out. Highly recommended!",
      author: "Lisa Wang",
      role: "Founder, EduTech Pro",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  return (
    <section className="w-full bg-black px-4 py-24 md:px-6">
      <div className="mx-auto max-w-6xl w-full">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">User Feedbacks</h2>
          <p className="mt-4 text-lg text-gray-400">Loved by Founders. Trusted by Investors.</p>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <Card key={i} className="border-green-500/20 bg-black/50 backdrop-blur-sm">
              <CardContent className="flex flex-col items-start gap-4 p-6">
                <div className="flex items-center gap-4">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-semibold text-white">{testimonial.author}</p>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300">{testimonial.quote}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}