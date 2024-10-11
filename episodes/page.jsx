"use client"
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Play, Pause, Search ,ArrowLeft} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Episodes() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [currentEpisode, setCurrentEpisode] = React.useState(null);

  const episodes = [
    { id: 1, title: "The Future of AI", host: "Sarah Johnson", date: "2024-03-15", duration: "45:30", image: "/placeholder.svg?height=200&width=200" },
    { id: 2, title: "Exploring Mars", host: "Mike Chen", date: "2024-03-10", duration: "38:15", image: "/placeholder.svg?height=200&width=200" },
    { id: 3, title: "The Art of Storytelling", host: "Emma Thompson", date: "2024-03-05", duration: "52:00", image: "/placeholder.svg?height=200&width=200" },
    { id: 4, title: "Cryptocurrency Explained", host: "Alex Rodriguez", date: "2024-02-28", duration: "41:45", image: "/placeholder.svg?height=200&width=200" },
    { id: 5, title: "Mindfulness and Meditation", host: "Lisa Chen", date: "2024-02-20", duration: "35:20", image: "/placeholder.svg?height=200&width=200" },
    ]

  const filteredEpisodes = episodes.filter((episode) =>
    episode.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    episode.host.toLowerCase().includes(searchQuery.toLowerCase()) ||
    episode.date.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = () => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  const handlePlayPause = (episode) => {
    if (currentEpisode && currentEpisode.id === episode.id) {
      setCurrentEpisode(null);
    } else {
      setCurrentEpisode(episode);
    }
  };

  return (
    <>
     <Link href="/Podcast">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white absolute top-2 left-4">
              <ArrowLeft className="h-3 w-4 mr-2" /> 
            </Button>
          </Link>
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-200 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-purple-800 mb-8 relative top-5">Latest Episodes</h1>
        <form onSubmit={handleSearch} className="mb-8">
          <div className="relative">
            <Input
              type="search"
              placeholder="Search episodes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full border-2 border-purple-300 focus:border-purple-500 focus:outline-none"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400" />
          </div>
        </form>
        <div className="grid gap-6">
          {filteredEpisodes.map((episode) => (
            <Card key={episode.id} className="flex flex-col md:flex-row overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <Image
                src={episode.image}
                alt={episode.title}
                width={200}
                height={200}
                className="w-full md:w-48 h-48 object-cover"
              />
              <CardContent className="flex-1 p-6">
                <h2 className="text-2xl font-semibold text-purple-700 mb-2">{episode.title}</h2>
                <p className="text-indigo-600 mb-2">Hosted by {episode.host}</p>
                <p className="text-sm text-gray-600 mb-4">
                  {episode.date} • {episode.duration}
                </p>
                <Button
                  onClick={() => handlePlayPause(episode)}
                  className="bg-purple-600 hover:bg-purple-700 text-white"
                >
                  {currentEpisode && currentEpisode.id === episode.id ? (
                    <><Pause className="mr-2 h-4 w-4" /> Pause</>
                  ) : (
                    <><Play className="mr-2 h-4 w-4" /> Listen Now</>
                  )}
                </Button>
              </CardContent>
            </Card>
          ))}
          {filteredEpisodes.length === 0 && (
            <p className="text-gray-600">No episodes found matching your search query.</p>
          )}
        </div>
      </div>
    </div>
    </>
  );
}