import { Sparkles, Layers, FileText, Share2 } from "lucide-react"
import { Feature, Step, Testimonial } from "@/types/landing"

export const features: Feature[] = [
  {
    icon: <Sparkles className="h-6 w-6"/>,
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

export const steps: Step[] = [
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

export const testimonials: Testimonial[] = [
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