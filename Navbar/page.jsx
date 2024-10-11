import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Headphones, Search, User, LogOut } from "lucide-react"
import { useState } from "react"

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogin = () => {
    // Implement actual login logic here
    setIsLoggedIn(true)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <Link className="mr-6 flex items-center space-x-2" href="/">
            <Headphones className="h-6 w-6" />
            <span className="hidden font-bold sm:inline-block">PodcastHub</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link className="transition-colors hover:text-foreground/80 text-foreground" href="/">
              Home
            </Link>
            <Link className="transition-colors hover:text-foreground/80 text-muted-foreground" href="/categories">
              Categories
            </Link>
            <Link className="transition-colors hover:text-foreground/80 text-muted-foreground" href="/learn-more">
              Learn More
            </Link>
            <Link className="transition-colors hover:text-foreground/80 text-muted-foreground" href="/contact">
              Contact
            </Link>
            {isLoggedIn && (
              <Link className="transition-colors hover:text-foreground/80 text-muted-foreground" href="/upload-podcast">
                Upload Podcast
              </Link>
            )}
          </nav>
          <div className="flex flex-1 items-center justify-end space-x-2">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <Input className="max-w-xs" placeholder="Search podcasts..." type="search" />
            </div>
            {isLoggedIn ? (
              <Button variant="ghost" size="icon" onClick={handleLogout}>
                <LogOut className="h-5 w-5" />
                <span className="sr-only">Log out</span>
              </Button>
            ) : (
              <Button variant="ghost" size="icon" onClick={handleLogin}>
                <User className="h-5 w-5" />
                <span className="sr-only">Log in</span>
              </Button>
            )}
          </div>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="w-full py-6 bg-background border-t">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-3">
              <h4 className="text-sm font-medium">About Us</h4>
              <ul className="space-y-1">
                <li>
                  <Link className="text-sm text-muted-foreground hover:underline" href="/learn-more">
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
                  <img src="/placeholder.svg?height=40&width=120" alt="Download on the App Store" className="h-10" />
                </Link>
                <Link href="#">
                  <img src="/placeholder.svg?height=40&width=135" alt="Get it on Google Play" className="h-10" />
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-6 text-center text-sm text-muted-foreground">
            © 2024 PodcastHub. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}