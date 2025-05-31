"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { User, Users, MapPin, Code, Video } from "lucide-react"

export default function Registration() {
  const [formData, setFormData] = useState({
    teamName: "",
    teamSize: "",
    member1Name: "",
    member1Email: "",
    member1Phone: "",
    member1Institution: "",
    member2Name: "",
    member2Email: "",
    member2Phone: "",
    member2Institution: "",
    member3Name: "",
    member3Email: "",
    member3Phone: "",
    member3Institution: "",
    member4Name: "",
    member4Email: "",
    member4Phone: "",
    member4Institution: "",
    city: "",
    projectIdea: "",
    techStack: "",
    videoSubmission: "",
    agreeTerms: false,
  })

  const [registrationStats, setRegistrationStats] = useState({
    registered: 0,
    spotsLeft: 400,
  })

  // Simulate real-time registration data
  useEffect(() => {
    const interval = setInterval(() => {
      setRegistrationStats((prev) => {
        const newRegistered = Math.min(prev.registered + Math.floor(Math.random() * 3), 400)
        return {
          registered: newRegistered,
          spotsLeft: 400 - newRegistered,
        }
      })
    }, 30000) // Update every 30 seconds

    // Initial load
    setRegistrationStats({
      registered: 247,
      spotsLeft: 153,
    })

    return () => clearInterval(interval)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Validate team size
    const teamSizeNum = Number.parseInt(formData.teamSize)
    if (teamSizeNum < 2 || teamSizeNum > 4) {
      alert("Team size must be between 2 and 4 members.")
      return
    }

    // Validate required member information
    for (let i = 1; i <= teamSizeNum; i++) {
      if (
        !formData[`member${i}Name` as keyof typeof formData] ||
        !formData[`member${i}Email` as keyof typeof formData]
      ) {
        alert(`Please fill in the name and email for team member ${i}.`)
        return
      }
    }

    console.log("Registration submitted:", formData)
    alert("Registration submitted successfully! We'll contact you soon with further details.")

    // Reset form
    setFormData({
      teamName: "",
      teamSize: "",
      member1Name: "",
      member1Email: "",
      member1Phone: "",
      member1Institution: "",
      member2Name: "",
      member2Email: "",
      member2Phone: "",
      member2Institution: "",
      member3Name: "",
      member3Email: "",
      member3Phone: "",
      member3Institution: "",
      member4Name: "",
      member4Email: "",
      member4Phone: "",
      member4Institution: "",
      city: "",
      projectIdea: "",
      techStack: "",
      videoSubmission: "",
      agreeTerms: false,
    })
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const cities = ["Kathmandu", "Pokhara", "Chitwan", "Butwal"]
  const teamSizeOptions = ["2", "3", "4"]

  const renderMemberFields = (memberNumber: number) => {
    const teamSizeNum = Number.parseInt(formData.teamSize) || 2
    const isRequired = memberNumber <= teamSizeNum
    const memberPrefix = `member${memberNumber}`

    return (
      <div key={memberNumber} className="border rounded-lg p-4 bg-gray-50">
        <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
          <User className="h-4 w-4 mr-2" />
          Team Member {memberNumber} {isRequired && <span className="text-red-500 ml-1">*</span>}
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor={`${memberPrefix}Name`} className="text-sm">
              Full Name {isRequired && <span className="text-red-500">*</span>}
            </Label>
            <Input
              id={`${memberPrefix}Name`}
              type="text"
              placeholder="Enter full name"
              value={formData[`${memberPrefix}Name` as keyof typeof formData] as string}
              onChange={(e) => handleInputChange(`${memberPrefix}Name`, e.target.value)}
              required={isRequired}
              className="text-sm"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor={`${memberPrefix}Email`} className="text-sm">
              Email Address {isRequired && <span className="text-red-500">*</span>}
            </Label>
            <Input
              id={`${memberPrefix}Email`}
              type="email"
              placeholder="Enter email"
              value={formData[`${memberPrefix}Email` as keyof typeof formData] as string}
              onChange={(e) => handleInputChange(`${memberPrefix}Email`, e.target.value)}
              required={isRequired}
              className="text-sm"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor={`${memberPrefix}Phone`} className="text-sm">
              Phone Number {isRequired && <span className="text-red-500">*</span>}
            </Label>
            <Input
              id={`${memberPrefix}Phone`}
              type="tel"
              placeholder="Enter phone number"
              value={formData[`${memberPrefix}Phone` as keyof typeof formData] as string}
              onChange={(e) => handleInputChange(`${memberPrefix}Phone`, e.target.value)}
              required={isRequired}
              className="text-sm"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor={`${memberPrefix}Institution`} className="text-sm">
              Institution/Company {isRequired && <span className="text-red-500">*</span>}
            </Label>
            <Input
              id={`${memberPrefix}Institution`}
              type="text"
              placeholder="Enter institution or company"
              value={formData[`${memberPrefix}Institution` as keyof typeof formData] as string}
              onChange={(e) => handleInputChange(`${memberPrefix}Institution`, e.target.value)}
              required={isRequired}
              className="text-sm"
            />
          </div>
        </div>
      </div>
    )
  }

  return (
    <section
      id="registration"
      className="py-16 sm:py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-purple-600"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Register for <span className="text-purple-200">Cyber Utsav 2.0</span>
          </h2>
          <p className="text-lg sm:text-xl text-purple-100 max-w-3xl mx-auto px-4">
            Form your team and secure your spot in the ultimate 24-hour hackathon!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="bg-white/95 backdrop-blur-sm shadow-2xl">
            <CardHeader className="text-center">
              <CardTitle className="text-xl sm:text-2xl text-gray-900">Team Registration Form</CardTitle>
              <CardDescription className="text-sm sm:text-base">
                Register your team of 2-4 members for the 24-hour hackathon
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Team Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                    <Users className="h-5 w-5 mr-2" />
                    Team Information
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="teamName" className="text-sm">
                        Team Name *
                      </Label>
                      <Input
                        id="teamName"
                        type="text"
                        placeholder="Enter your team name"
                        value={formData.teamName}
                        onChange={(e) => handleInputChange("teamName", e.target.value)}
                        required
                        className="text-sm"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="teamSize" className="text-sm">
                        Team Size *
                      </Label>
                      <Select onValueChange={(value) => handleInputChange("teamSize", value)} required>
                        <SelectTrigger className="text-sm">
                          <SelectValue placeholder="Select team size" />
                        </SelectTrigger>
                        <SelectContent>
                          {teamSizeOptions.map((size) => (
                            <SelectItem key={size} value={size}>
                              {size} members
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="city" className="flex items-center text-sm">
                        <MapPin className="h-4 w-4 mr-2" />
                        Preferred City *
                      </Label>
                      <Select onValueChange={(value) => handleInputChange("city", value)} required>
                        <SelectTrigger className="text-sm">
                          <SelectValue placeholder="Select city" />
                        </SelectTrigger>
                        <SelectContent>
                          {cities.map((city) => (
                            <SelectItem key={city} value={city.toLowerCase()}>
                              {city}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Team Members */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">Team Members</h3>
                  <div className="space-y-4">
                    {[1, 2, 3, 4].map((memberNumber) => {
                      const teamSizeNum = Number.parseInt(formData.teamSize) || 2
                      if (memberNumber > teamSizeNum) return null

                      return renderMemberFields(memberNumber)
                    })}
                  </div>
                </div>

                {/* Project Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                    <Code className="h-5 w-5 mr-2" />
                    Project Information
                  </h3>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="projectIdea" className="text-sm">
                        Project Idea *
                      </Label>
                      <Textarea
                        id="projectIdea"
                        placeholder="Describe your software project idea (website, mobile app, or PC software)"
                        value={formData.projectIdea}
                        onChange={(e) => handleInputChange("projectIdea", e.target.value)}
                        rows={4}
                        required
                        className="text-sm"
                      />
                      <p className="text-xs text-gray-500">
                        Note: Only software programs such as websites, mobile apps, or PC software are allowed.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="techStack" className="text-sm">
                        Technology Stack *
                      </Label>
                      <Textarea
                        id="techStack"
                        placeholder="List the programming languages, frameworks, and tools you plan to use"
                        value={formData.techStack}
                        onChange={(e) => handleInputChange("techStack", e.target.value)}
                        rows={3}
                        required
                        className="text-sm"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="videoSubmission" className="flex items-center text-sm">
                          <Video className="h-4 w-4 mr-2" />
                          Project Idea Video URL *
                        </Label>
                        <Input
                          id="videoSubmission"
                          type="url"
                          placeholder="YouTube/Drive link to your project idea video"
                          value={formData.videoSubmission}
                          onChange={(e) => handleInputChange("videoSubmission", e.target.value)}
                          required
                          className="text-sm"
                        />
                        <p className="text-xs text-gray-500">
                          Upload a short video explaining your project idea for team shortlisting.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Terms and Conditions */}
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="terms"
                    checked={formData.agreeTerms}
                    onCheckedChange={(checked) => handleInputChange("agreeTerms", checked as boolean)}
                    className="mt-1"
                  />
                  <Label htmlFor="terms" className="text-xs sm:text-sm leading-relaxed">
                    I agree to the{" "}
                    <a href="#" className="text-purple-600 hover:underline">
                      Terms and Conditions
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-purple-600 hover:underline">
                      Privacy Policy
                    </a>
                    . I understand that this is a 24-hour hackathon and all project work must be committed to GitHub.
                  </Label>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 text-sm sm:text-lg"
                  disabled={!formData.agreeTerms}
                >
                  Register Team for Cyber Utsav 2.0
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>

        {/* Registration Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 sm:mt-12 text-center"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-4">Live Registration Status</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-center">
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-purple-200">{registrationStats.registered}</p>
                <p className="text-purple-100 text-sm sm:text-base">Registered</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-purple-200">{registrationStats.spotsLeft}</p>
                <p className="text-purple-100 text-sm sm:text-base">Spots Left</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-purple-200">400</p>
                <p className="text-purple-100 text-sm sm:text-base">Total Capacity</p>
              </div>
            </div>
            <div className="mt-4">
              <div className="bg-white/20 rounded-full h-2">
                <div
                  className="bg-purple-300 h-2 rounded-full transition-all duration-1000"
                  style={{ width: `${(registrationStats.registered / 400) * 100}%` }}
                ></div>
              </div>
              <p className="text-purple-100 text-sm mt-2">
                {Math.round((registrationStats.registered / 400) * 100)}% Full
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
