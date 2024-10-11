"use client"
import React, { useState, useEffect, createContext, useContext } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Slider } from "@/components/ui/slider"
import { Headphones, Search, User, LogOut, Play, Pause, Volume2 } from "lucide-react"

// Create a context for the audio player
const AudioPlayerContext = createContext(null)

export function useAudioPlayer() {
  return useContext(AudioPlayerContext)
}

// Simple in-memory database
const db = {
  users: [],
  contacts: [],
}

export default function Layout({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentPodcast, setCurrentPodcast] = useState(null)
  const [volume, setVolume] = useState(1)
  const [showPodcastMenu, setShowPodcastMenu] = useState(false)

  const handleLogin = (email, password) => {
    // Simple login logic
    const user = db.users.find(u => u.email === email && u.password === password)
    if (user) {
      setIsLoggedIn(true)
      return true
    }
    return false
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
  }

  const handleRegister = (email, password) => {
    // Simple registration logic
    if (!db.users.some(u => u.email === email)) {
      db.users.push({ email, password })
      return true
    }
    return false
  }

  const handleContactSubmit = (name, email, message) => {
    // Save contact form submission
    db.contacts.push({ name, email, message })
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const handleVolumeChange = (newValue: number[]) => {
    setVolume(newValue[0])
  }

  const audioPlayerValue = {
    isPlaying,
    currentPodcast,
    volume,
    togglePlayPause,
    setCurrentPodcast,
    handleVolumeChange,
  }

  return (
    <AudioPlayerContext.Provider value={audioPlayerValue}>
      <div className="flex flex-col min-h-screen">
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-14 items-center">
            <Link className="mr-6 flex items-center space-x-2" href="/">
              <Image src="/logo.svg" alt="PodcastHub Logo" width={32} height={32} />
              <span className="hidden font-bold sm:inline-block">PodcastHub</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link className="transition-colors hover:text-foreground/80 text-foreground" href="/">
                Home
              </Link>
              <DropdownMenu open={showPodcastMenu} onOpenChange={setShowPodcastMenu}>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="p-0">
                    Podcasts
                    <span className="sr-only">Toggle podcasts menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  <DropdownMenuItem asChild>
                    <Link href="/episodes">Episodes</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/categories">Categories</Link>
                  </DropdownMenuItem>
                  {currentPodcast && (
                    <DropdownMenuItem onClick={togglePlayPause}>
                      {isPlaying ? "Pause" : "Play"} "{currentPodcast.title}"
                    </DropdownMenuItem>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
              <Link className="transition-colors hover:text-foreground/80 text-muted-foreground" href="/about">
                About
              </Link>
              <Link className="transition-colors hover:text-foreground/80 text-muted-foreground" href="/blog">
                Blog
              </Link>
              <Link className="transition-colors hover:text-foreground/80 text-muted-foreground" href="/contact">
                Contact
              </Link>
            </nav>
            <div className="flex flex-1 items-center justify-end space-x-2">
              <form className="w-full lg:w-auto lg:flex-none">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search podcasts..."
                    className="w-full appearance-none bg-background pl-8 lg:w-[300px]"
                  />
                </div>
              </form>
              {isLoggedIn ? (
                <Button variant="ghost" size="icon" onClick={handleLogout}>
                  <LogOut className="h-5 w-5" />
                  <span className="sr-only">Log out</span>
                </Button>
              ) : (
                <Button variant="ghost" size="icon" onClick={() => {/* Open login modal */}}>
                  <User className="h-5 w-5" />
                  <span className="sr-only">Log in</span>
                </Button>
              )}
            </div>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        {currentPodcast && (
          <div className="fixed bottom-0 left-0 right-0 bg-background border-t p-2">
            <div className="container flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="icon" onClick={togglePlayPause}>
                  {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
                </Button>
                <div>
                  <p className="font-medium">{currentPodcast.title}</p>
                  <p className="text-sm text-muted-foreground">Episode {currentPodcast.id}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Volume2 className="h-5 w-5" />
                <Slider
                  value={[volume]}
                  max={1}
                  step={0.01}
                  onValueChange={handleVolumeChange}
                  className="w-24"
                />
              </div>
            </div>
          </div>
        )}
        <footer className="w-full py-6 bg-background border-t">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="space-y-3">
                <h4 className="text-sm font-medium">About Us</h4>
                <ul className="space-y-1">
                  <li>
                    <Link className="text-sm text-muted-foreground hover:underline" href="/about">
                      Our Story
                    </Link>
                  </li>
                  <li>
                    <Link className="text-sm text-muted-foreground hover:underline" href="#">
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link className="text-sm text-muted-foreground hover:underline" href="#">
                      Press
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="text-sm font-medium">Support</h4>
                <ul className="space-y-1">
                  <li>
                    <Link className="text-sm text-muted-foreground hover:underline" href="#">
                      Help Center
                    </Link>
                  </li>
                  <li>
                    <Link className="text-sm text-muted-foreground hover:underline" href="#">
                      Safety Center
                    </Link>
                  </li>
                  <li>
                    <Link className="text-sm text-muted-foreground hover:underline" href="#">
                      Community Guidelines
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="text-sm font-medium">Legal</h4>
                <ul className="space-y-1">
                  <li>
                    <Link className="text-sm text-muted-foreground hover:underline" href="#">
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link className="text-sm text-muted-foreground hover:underline" href="#">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link className="text-sm text-muted-foreground hover:underline" href="#">
                      Cookie Policy
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="text-sm font-medium">Install App</h4>
                <div className="flex space-x-2">
                  <Link href="#">
                    <Image src="/app-store.svg" alt="Download on the App Store" width={120} height={40} />
                  </Link>
                  <Link href="#">
                    <Image src="/google-play.svg" alt="Get it on Google Play" width={135} height={40} />
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-6 text-center text-sm text-muted-foreground">
              © {new Date().getFullYear()} PodcastHub. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </AudioPlayerContext.Provider>
  )
}