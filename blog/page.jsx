import React from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "The Rise of True Crime Podcasts",
      excerpt: "Exploring the phenomenon of true crime podcasts and their impact on modern storytelling.",
      author: "Jane Doe",
      date: "2024-03-15",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 2,
      title: "How to Start Your Own Podcast",
      excerpt: "A comprehensive guide to launching your first podcast, from planning to publishing.",
      author: "John Smith",
      date: "2024-03-10",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 3,
      title: "The Future of Audio: AI in Podcasting",
      excerpt: "Examining how artificial intelligence is shaping the future of podcast creation and consumption.",
      author: "Alex Johnson",
      date: "2024-03-05",
      image: "/placeholder.svg?height=200&width=400",
    },
  ]

  return (
    <>
    <Link href="/Podcast">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white absolute top-2 left-4">
              <ArrowLeft className="h-3 w-4 mr-2" /> 
            </Button>
          </Link>
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-200 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold relative top-5 text-purple-800 mb-10">PodcastHub Blog</h1>
        <div className="grid gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <Image
                src={post.image}
                alt={post.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-purple-700">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-indigo-600 mb-4">{post.excerpt}</p>
                <p className="text-sm text-gray-600">
                  By {post.author} on {post.date}
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white">
                  <Link href={`/blog/${post.id}`}>Read More</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
    </>
  )
}