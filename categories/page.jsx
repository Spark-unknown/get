import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mic, Headphones, Briefcase, Atom, Palette, Trophy ,ArrowLeft} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
// Remove the import of useAudioPlayer if it's not properly set up
// import { useAudioPlayer } from "./layout"

export default function Categories() {
  // Remove the destructuring of currentPodcast from useAudioPlayer
  // const { currentPodcast } = useAudioPlayer()

  const categories = [
    { id: 1, name: "News & Politics", icon: Mic, color: "bg-red-100 text-red-600" },
    { id: 2, name: "Technology", icon: Headphones, color: "bg-blue-100 text-blue-600" },
    { id: 3, name: "Business", icon: Briefcase, color: "bg-green-100 text-green-600" },
    { id: 4, name: "Science", icon: Atom, color: "bg-yellow-100 text-yellow-600" },
    { id: 5, name: "Arts", icon: Palette, color: "bg-pink-100 text-pink-600" },
    { id: 6, name: "Sports", icon: Trophy, color: "bg-purple-100 text-purple-600" },
  ]

  return (
    <>
     <Link href="/Podcast">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white absolute top-2 left-4">
              <ArrowLeft className="h-3 w-4 mr-2" /> 
            </Button>
          </Link>
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-200 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-purple-800 mb-8 relative top-5">Podcast Categories</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link href={`/Podcast/category/${category.id}`} key={category.id}>
              <Card className="hover:shadow-lg transition-shadow duration-300 cursor-pointer bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg">
                <CardHeader className={`flex flex-col items-center pb-2 ${category.color}`}>
                  <category.icon className="h-12 w-12 mb-2" />
                  <CardTitle className="text-xl font-semibold">{category.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-600">
                    Explore the latest {category.name.toLowerCase()} podcasts
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
    </>
  )
}