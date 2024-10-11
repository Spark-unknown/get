import React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Implement form submission logic here
  }

  return (
    <>
     <Link href="/Podcast">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white absolute top-2 left-4">
              <ArrowLeft className="h-3 w-4 mr-2" /> 
            </Button>
          </Link>
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-200 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-purple-800 mb-8 relative top-5">Contact Us</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-purple-700">Get in Touch</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-indigo-600 mb-1">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-indigo-600 mb-1">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-indigo-600 mb-1">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-indigo-600 mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
          <Card className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-purple-700">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <Mail className="text-purple-600" />
                <span className="text-indigo-600">support@podcasthub.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="text-purple-600" />
                <span className="text-indigo-600">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="text-purple-600" />
                <span className="text-indigo-600">123 Podcast Street, Audio City, 90210</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
    </>
  )
}