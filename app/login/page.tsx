'use client'

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Apple, Mail, Lock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import './globals.css'

export default function LoginPage() {
  return (
    <div className="min-h-screen w-full bg-black flex items-center justify-center relative px-4">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cpath d='M0 0h40v40H0V0zm1 1v38h38V1H1z' fill='%23ffffff' fill-opacity='0.4'/%3E%3C/svg%3E")`,
          backgroundSize: "40px 40px",
        }}
      />
      
      {/* Login Card */}
      <Card className="w-full max-w-md border-green-500/20 bg-black/50 backdrop-blur-sm">
        <CardHeader className="space-y-3">
          <div className="flex justify-center">
            <div className="rounded-full bg-black/50 p-3 backdrop-blur-sm border border-green-500/20">
              <Image
                src="/favicon.ico"
                width={40}
                height={40}
                alt="Logo"
                className="rounded-full"
              />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold text-center text-white">Welcome Back</CardTitle>
          <CardDescription className="text-center text-gray-400">
            Don&apos;t have an account yet?{" "}
            <Link href="/signup" className="text-green-500 hover:text-green-400 font-medium">
              Sign up
            </Link>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <Input
                  id="email"
                  placeholder="Enter your email"
                  type="email"
                  className="pl-10 bg-black/50 border-green-500/20 text-white placeholder:text-gray-400"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-white">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  className="pl-10 bg-black/50 border-green-500/20 text-white placeholder:text-gray-400"
                />
              </div>
            </div>
            <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
              Login
            </Button>
            
            <div className="flex items-center gap-4 py-2">
              <Separator className="flex-1 bg-gray-600" />
              <span className="text-sm text-gray-400">OR</span>
              <Separator className="flex-1 bg-gray-600" />
            </div>
            
            <div className="grid grid-cols-3 gap-3">
              <Button variant="outline" className="border-green-500/20 hover:bg-white/10">
                <Apple className="h-5 w-5 text-black" />
              </Button>
              <Button variant="outline" className="border-green-500/20 hover:bg-white/10">
                <svg className="h-5 w-5" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
                  <path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
                </svg>
              </Button>
              <Button variant="outline" className="border-green-500/20 hover:bg-white/10">
                <svg className="h-5 w-5" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="x-twitter" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path fill="currentColor" d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                </svg>
              </Button>
            </div>

            <div className="text-center">
              <Link
                href="/forgot-password"
                className="text-sm text-gray-400 hover:text-gray-300"
              >
                Forgot your password?
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}