import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Play, Pause, SkipBack, SkipForward, Volume2 } from "lucide-react"
import Image from "next/image"

export default function PodcastPage() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(1)
  const audioRef = useRef<HTMLAudioElement>(null)

  const podcast = {
    id: 1,
    title: "The Daily Buzz",
    host: "Sarah Johnson",
    description: "Join Sarah Johnson for your daily dose of news, pop culture, and engaging conversations.",
    image: "/placeholder.svg?height=400&width=400",
    audioSrc: "https://example.com/podcast-audio.mp3", // Replace with actual audio file
  }

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener("loadedmetadata", () => {
        setDuration(audioRef.current!.duration)
      })
      audioRef.current.addEventListener("timeupdate", () => {
        setCurrentTime(audioRef.current!.currentTime)
      })
    }
  }, [])

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleSeek = (newValue: number[]) => {
    if (audioRef.current) {
      audioRef.current.currentTime = newValue[0]
      setCurrentTime(newValue[0])
    }
  }

  const handleVolumeChange = (newValue: number[]) => {
    if (audioRef.current) {
      audioRef.current.volume = newValue[0]
      setVolume(newValue[0])
    }
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, "0")}`
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3">
          <Image
            src={podcast.image}
            alt={podcast.title}
            width={400}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-2/3">
          <h1 className="text-3xl font-bold mb-2">{podcast.title}</h1>
          <p className="text-xl text-muted-foreground mb-4">Hosted by {podcast.host}</p>
          <p className="text-lg mb-6">{podcast.description}</p>
          <div className="bg-muted p-4 rounded-lg">
            <audio ref={audioRef} src={podcast.audioSrc} />
            <div className="flex items-center justify-between mb-4">
              <Button variant="ghost" size="icon" onClick={() => audioRef.current!.currentTime -= 10}>
                <SkipBack className="h-6 w-6" />
              </Button>
              <Button variant="ghost" size="icon" onClick={togglePlayPause}>
                {isPlaying ? <Pause className="h-8 w-8" /> : <Play className="h-8 w-8" />}
              </Button>
              <Button variant="ghost" size="icon" onClick={() => audioRef.current!.currentTime += 10}>
                <SkipForward className="h-6 w-6" />
              </Button>
            </div>
            <Slider
              value={[currentTime]}
              max={duration}
              step={1}
              onValueChange={handleSeek}
              className="mb-2"
            />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
            <div className="flex items-center mt-4">
              <Volume2 className="h-5 w-5 mr-2" />
              <Slider
                value={[volume]}
                max={1}
                step={0.01}
                onValueChange={handleVolumeChange}
                className="w-32"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}