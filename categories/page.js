import React from "react";
import dynamic from "next/dynamic";
import { Link } from "next/link";
import { Mic, Headphones, Briefcase, Flask, Palette, Trophy } from "lucide-react";

const { default: Card, Header, Content } = dynamic(() => import("@/components/ui/card"), {
  ssr: false,
});

export default function Categories() {
  const categories = [
    { id: 1, name: "News & Politics", icon: Mic, description: "Stay informed with the latest news and political discussions" },
    { id: 2, name: "Technology", icon: Headphones, description: "Explore the cutting edge of tech and digital innovation" },
    { id: 3, name: "Business", icon: Briefcase, description: "Insights and strategies from the world of business and finance" },
    { id: 4, name: "Science", icon: Flask, description: "Discover the wonders of scientific research and breakthroughs" },
    { id: 5, name: "Arts", icon: Palette, description: "Dive into the world of creativity, culture, and artistic expression" },
    { id: 6, name: "Sports", icon: Trophy, description: "Get the latest updates and analysis from the world of sports" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-200 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-purple-800 mb-8">Podcast Categories</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link href={`/category/${category.id}`} key={category.id}>
              <Card className="hover:shadow-lg transition-shadow duration-300 cursor-pointer bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg">
                <Header className="flex flex-col items-center pb-2">
                  {React.createElement(category.icon, { className: "h-12 w-12 text-purple-600 mb-2" })}
                  <h2 className="text-xl font-semibold text-purple-700">{category.name}</h2>
                </Header>
                <Content>
                  <p className="text-center text-indigo-600">{category.description}</p>
                </Content>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}