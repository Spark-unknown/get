import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function About() {
  return (
    <>
     <Link href="/Podcast">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white absolute top-2 left-4">
              <ArrowLeft className="h-3 w-4 mr-2" /> 
            </Button>
          </Link>
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-200 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-purple-800 relative top-5 mb-8">About PodcastHub</h1>
        <div className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-8 mb-8">
         
          <h2 className="text-2xl font-semibold text-purple-700 mb-4">Our Mission</h2>
          <p className="text-indigo-600 mb-6">
            At PodcastHub, we're passionate about connecting listeners with amazing content. Our mission is to make it
            easy for everyone to discover, enjoy, and share the world's best podcasts.
          </p>
          <Image src="/images/z1xlki8e-720.jpg" alt="" width={100} height={100}/>
          <h2 className="text-2xl font-semibold text-purple-700 mb-4">Our Story</h2>
          <p className="text-indigo-600 mb-6">
            Founded in 2024, PodcastHub started as a small project by a group of podcast enthusiasts. Today, we've grown
            into a vibrant community of creators and listeners, united by our love for great audio content.
          </p>
          <h2 className="text-2xl font-semibold text-purple-700 mb-4">What We Offer</h2>
          <ul className="list-disc list-inside text-indigo-600 mb-6">
            <li>A vast library of podcasts across various categories</li>
            <li>Personalized recommendations based on your listening habits</li>
            <li>User-friendly interface for easy navigation and playback</li>
            <li>Ability for creators to upload and share their own podcasts</li>
            <li>Community features to connect with other podcast enthusiasts</li>
          </ul>
          <div className="flex justify-center">
            <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white">
              <Link href="/Podcast/categories">Explore Our Podcasts</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}