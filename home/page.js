"use client"
import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { ChevronRight, Headphones, Home, Mic, Play, Search, User, Menu, X, LogOut } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"

export default function PodcastWebsite() {
  const [activeTab, setActiveTab] = useState("home")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [showLoginModal, setShowLoginModal] = useState(false)

  const featuredPodcasts = [
    { id: 1, title: "The Daily Buzz", host: "Sarah Johnson", image: "/placeholder.svg?height=400&width=600" },
    { id: 2, title: "Tech Talk", host: "Mike Chen", image: "/placeholder.svg?height=400&width=600" },
    { id: 3, title: "History Unveiled", host: "Emma Thompson", image: "/placeholder.svg?height=400&width=600" },
    { id: 1, title: "The Daily Buzz", host: "Sarah Johnson", image: "/placeholder.svg?height=400&width=600" },
    { id: 2, title: "Tech Talk", host: "Mike Chen", image: "/placeholder.svg?height=400&width=600" },
    { id: 3, title: "History Unveiled", host: "Emma Thompson", image: "/placeholder.svg?height=400&width=600" },
    { id: 1, title: "The Daily Buzz", host: "Sarah Johnson", image: "/placeholder.svg?height=400&width=600" },
    { id: 2, title: "Tech Talk", host: "Mike Chen", image: "/placeholder.svg?height=400&width=600" },
    { id: 3, title: "History Unveiled", host: "Emma Thompson", image: "/placeholder.svg?height=400&width=600" },
  ]

  const categories = [
    { id: 1, name: "News & Politics", icon: Mic },
    { id: 2, name: "Technology", icon: Headphones },
    { id: 3, name: "Business", icon: Mic },
    { id: 4, name: "Science", icon: Headphones },
    { id: 5, name: "Arts", icon: Mic },
    { id: 6, name: "Sports", icon: Headphones },
  ]

  const popularPodcasts = [
    { id: 1, title: "The Joe Rogan Experience", host: "Joe Rogan", image: "/placeholder.svg?height=300&width=300" },
    { id: 2, title: "Serial", host: "Sarah Koenig", image: "/placeholder.svg?height=300&width=300" },
    { id: 3, title: "This American Life", host: "Ira Glass", image: "/placeholder.svg?height=300&width=300" },
    { id: 4, title: "Radiolab", host: "Jad Abumrad", image: "/placeholder.svg?height=300&width=300" },
  ]

  const handleSearch = (e) => {
    e.preventDefault()
    console.log("Searching for:", searchQuery)
    // Implement search logic here
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setShowLoginModal(true)
  }

  const handleLogin = (e) => {
    e.preventDefault()
    setIsLoggedIn(true)
    setShowLoginModal(false)
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-purple-100 to-indigo-200">
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-14 items-center justify-between p-10">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
            <Link className="flex items-center space-x-2" href="/">
              <Headphones className="h-6 w-6 text-purple-600" />
              <span className="hidden font-bold text-xl text-purple-600 sm:inline-block">PodcastHub</span>
            </Link>
          </div>
          <nav className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex absolute md:relative top-14 md:top-0 left-0 right-0 bg-white md:bg-transparent flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 p-4 md:p-0 text-sm font-medium`}>
            <Link className="transition-colors hover:text-purple-600 text-gray-700" href="/Podcast/home">
              Home
            </Link>
            <Link className="transition-colors hover:text-purple-600 text-gray-700" href="/Podcast/podcasts">
              Podcasts
            </Link>
            <Link className="transition-colors hover:text-purple-600 text-gray-700" href="/Podcast/categories">
              Categories
            </Link>
            <Link className="transition-colors hover:text-purple-600 text-gray-700" href="/Podcast/about">
              About
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <form onSubmit={handleSearch} className="hidden md:block">
              <Input
                className="w-64"
                placeholder="Search podcasts..."
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>
            <Dialog open={showLoginModal} onOpenChange={setShowLoginModal}>
              <DialogTrigger asChild>
                <Button variant="ghost" size="icon">
                  {isLoggedIn ? (
                    <div className="relative">
                      <User className="h-5 w-5 text-purple-600" />
                      <div className="absolute top-0 right-0 -mt-1 -mr-1 h-3 w-3 rounded-full bg-green-500 border-2 border-white"></div>
                    </div>
                  ) : (
                    <User className="h-5 w-5 text-gray-600" />
                  )}
                </Button>
              </DialogTrigger>
              <DialogContent>
                {isLoggedIn ? (
                  <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Account</h2>
                    <p className="mb-4">You are currently logged in.</p>
                    <Button onClick={handleLogout} className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                      Log Out
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleLogin}>
                    <DialogHeader>
                      <DialogTitle>Log In</DialogTitle>
                      <DialogDescription>Enter your credentials to access your account.</DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="your@email.com" required />
                      </div>
                      <div>
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" type="password" required />
                      </div>
                    </div>
                    <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white">Log In</Button>
                  </form>
                )}
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 justify-center items-center bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Discover Your Next Favorite Podcast
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
                  Explore thousands of podcasts on various topics. Start listening now and expand your knowledge.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-white text-purple-600 hover:bg-gray-100">Browse Podcasts</Button>
                <Button variant="outline" className="text-black border-white hover:bg-white/10">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
          {/* <Carousel className="w-full max-w-5xl mx-auto">
                <CarouselContent>
                  {featuredPodcasts.map((podcast) => (
                    <CarouselItem key={podcast.id} className="md:basis-1/2 lg:basis-1/3">
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-6">
                            <Image
                              src={podcast.image}
                              alt={podcast.title}
                              width={300}
                              height={300}
                              className="rounded-md object-cover"
                            />
                          </CardContent>
                          <CardFooter className="flex flex-col items-start">
                            <h3 className="text-lg font-semibold">{podcast.title}</h3>
                            <p className="text-sm text-muted-foreground">Hosted by {podcast.host}</p>
                          </CardFooter>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>  */}
            <section className="w-full py-12 md:py-24 lg:py-32 flex justify-center items-center
            pt-11">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter justify-center items-center sm:text-4xl md:text-5xl mb-8">Browse by Category</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {categories.map((category) => (
                <Card key={category.id} className="flex flex-col items-center justify-center p-4 hover:bg-muted cursor-pointer transition-colors">
                  <category.icon className="h-12 w-12 mb-2" />
                  <CardTitle className="text-center">{category.name}</CardTitle>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Popular Podcasts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {popularPodcasts.map((podcast) => (
                <Card key={podcast.id} className="flex flex-col">
                  <CardContent className="p-4">
                    <Image
                      src={podcast.image}
                      alt={podcast.title}
                      width={300}
                      height={300}
                      className="rounded-md object-cover w-full aspect-square mb-4"
                    />
                    <h3 className="text-lg font-semibold mb-1">{podcast.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">Hosted by {podcast.host}</p>
                    <Button className="w-full">
                      <Play className="mr-2 h-4 w-4" /> Listen Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-gray-100">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-3">
              <h4 className="text-sm font-medium text-purple-600">About Us</h4>
              <ul className="space-y-1">
                <li>
                  <Link className="text-sm text-gray-600 hover:text-purple-600" href="#">
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link className="text-sm text-gray-600 hover:text-purple-600" href="#">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link className="text-sm text-gray-600 hover:text-purple-600" href="#">
                    Press
                  </Link>
                </li>
              </ul>
            </div>
            {/* Other footer sections remain the same */}
          </div>
          <div className="mt-6 text-center text-sm text-gray-600">
            © 2024 PodcastHub. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}