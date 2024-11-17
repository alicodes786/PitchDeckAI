'use client'

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { ArrowRight, FileText, Home, Layout, LogOut, Moon, Plus, Settings, Sun, LayoutTemplateIcon as Templates, User } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import './globals.css'

export default function DashboardPage() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true'
    setDarkMode(isDarkMode)
    document.documentElement.classList.toggle('dark', isDarkMode)
  }, [])

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    localStorage.setItem('darkMode', newDarkMode.toString())
    document.documentElement.classList.toggle('dark', newDarkMode)
  }

  const decks = [
    {
      id: 1,
      title: "SaaS Startup Pitch",
      lastModified: "2024-11-17",
    },
    {
      id: 2,
      title: "E-commerce Growth Plan",
      lastModified: "2024-11-16",
    },
    {
      id: 3,
      title: "AI Platform Pitch",
      lastModified: "2024-11-15",
    },
  ]

  const stats = [
    {
      title: "Total Decks",
      value: "12",
    },
    {
      title: "Downloads",
      value: "48",
    },
    {
      title: "Templates Used",
      value: "5",
    },
  ]

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <Sidebar className="border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 w-64 flex-shrink-0">
          <SidebarHeader>
            <div className="flex items-center gap-2 px-4 py-2">
              <div className="rounded-lg bg-green-500/10 p-1">
                <FileText className="h-6 w-6 text-green-500" />
              </div>
              <span className="text-lg font-bold text-gray-900 dark:text-white">PitchDeck AI</span>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive>
                  <Link href="/dashboard" className="w-full">
                    <Home className="h-4 w-4" />
                    <span>Dashboard</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/templates" className="w-full">
                    <Templates className="h-4 w-4" />
                    <span>Templates</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/decks" className="w-full">
                    <Layout className="h-4 w-4" />
                    <span>My Decks</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/settings" className="w-full">
                    <Settings className="h-4 w-4" />
                    <span>Settings</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/logout" className="w-full">
                    <LogOut className="h-4 w-4" />
                    <span>Logout</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>

        <div className="flex-1 flex flex-col min-w-0">
          <header className="flex h-16 items-center justify-between border-b border-gray-200 dark:border-gray-700 px-6 bg-white dark:bg-gray-900 w-full">
            <SidebarTrigger />
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-700">
                    <Image
                      src="/placeholder.svg?height=32&width=32"
                      width={32}
                      height={32}
                      className="rounded-full"
                      alt="Profile"
                    />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" side="bottom">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </header>

          <main className="flex-1 p-6 bg-gray-100 dark:bg-black w-full overflow-x-hidden">
            <div className="max-w-[1920px] mx-auto">
              <section className="mb-8 rounded-2xl bg-white dark:bg-gray-900 p-8 shadow-md">
                <h1 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
                  Welcome back, <span className="text-green-500">John!</span>
                </h1>
                <p className="mb-6 text-gray-600 dark:text-gray-400">Ready to craft your pitch deck?</p>
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-green-500 text-white hover:bg-green-600">
                    Generate My Deck
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" className="border-green-500 text-green-500 hover:bg-green-500 hover:text-white">
                    Explore Templates
                  </Button>
                  <Button variant="outline" className="border-green-500 text-green-500 hover:bg-green-500 hover:text-white">
                    Continue Editing
                  </Button>
                </div>
              </section>

              <section className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {stats.map((stat, i) => (
                  <Card key={i} className="bg-white dark:bg-gray-900 rounded-2xl">
                    <CardContent className="flex flex-col items-center p-6">
                      <p className="text-4xl font-bold text-green-500">{stat.value}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{stat.title}</p>
                    </CardContent>
                  </Card>
                ))}
              </section>

              <section>
                <div className="mb-6 flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Your Pitch Decks</h2>
                  <Button className="bg-green-500 hover:bg-green-600">
                    <Plus className="mr-2 h-4 w-4" />
                    New Deck
                  </Button>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {decks.map((deck) => (
                    <Card
                      key={deck.id}
                      className="bg-white dark:bg-gray-900 rounded-2xl transition-all hover:-translate-y-1 hover:shadow-lg"
                    >
                      <CardHeader>
                        <CardTitle className="text-gray-900 dark:text-white">{deck.title}</CardTitle>
                        <CardDescription className="text-gray-600 dark:text-gray-400">
                          Last modified: {deck.lastModified}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-green-500 bg-white text-black hover:bg-green-500 hover:text-white dark:bg-gray-800 dark:text-white dark:hover:bg-green-500"
                          >
                            View
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-green-500 bg-white text-black hover:bg-green-500 hover:text-white dark:bg-gray-800 dark:text-white dark:hover:bg-green-500"
                          >
                            Edit
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-green-500 bg-white text-black hover:bg-green-500 hover:text-white dark:bg-gray-800 dark:text-white dark:hover:bg-green-500"
                          >
                            Delete
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}