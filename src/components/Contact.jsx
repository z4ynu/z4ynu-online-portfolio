"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import emailjs from '@emailjs/browser'
import { toast } from 'sonner'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Get EmailJS credentials from environment variables
      const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
      const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
      const USER_EMAIL = import.meta.env.VITE_USER_EMAIL

      // Check if all required environment variables are set
      if (!PUBLIC_KEY || !SERVICE_ID || !TEMPLATE_ID || !USER_EMAIL) {
        throw new Error('Missing EmailJS configuration. Please check your .env file.')
      }

      // Initialize EmailJS with your public key
      emailjs.init(PUBLIC_KEY)

      // Send the email
      const result = await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: USER_EMAIL, // Your email from env variable
      })

      console.log('Email sent successfully:', result)
      toast.success('Message sent successfully! I\'ll get back to you soon.')
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    } catch (error) {
      console.error('Error sending email:', error)
      toast.error('Failed to send message. Please try again or contact me directly.')
    } finally {
      setIsLoading(false)
    }
  }

  const contactInfo = [
    {
      title: "Email",
      value: "zyhenzonunez@gmail.com",
      href: "mailto:zyhenzonunez@gmail.com",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      title: "LinkedIn",
      value: "linkedin.com/in/z4ynu",
      href: "https://linkedin.com/in/z4ynu",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      title: "GitHub",
      value: "github.com/z4ynu",
      href: "https://github.com/z4ynu",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
  ]

  return (
    <section id="contact" className="py-20 px-6 md:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-500/10 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating circles */}
        <div className="absolute top-1/4 left-8 w-4 h-4 bg-primary/20 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-8 w-6 h-6 bg-accent/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-12 w-3 h-3 bg-blue-400/20 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute top-2/3 right-12 w-5 h-5 bg-green-400/20 rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-1/3 left-6 w-4 h-4 bg-purple-400/20 rounded-full animate-pulse delay-1500"></div>
        <div className="absolute bottom-1/4 right-6 w-3 h-3 bg-pink-400/20 rounded-full animate-pulse delay-3000"></div>

        {/* Gradient orbs */}
        <div className="absolute top-1/3 left-4 w-32 h-32 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-1/2 right-4 w-24 h-24 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-xl animate-float-delayed"></div>
        <div className="absolute bottom-1/3 left-8 w-28 h-28 bg-gradient-to-r from-green-400/10 to-yellow-400/10 rounded-full blur-xl animate-float"></div>

        {/* Contact-themed decorative elements */}
        <div className="absolute top-1/4 right-16 w-2 h-2 bg-yellow-400/30 rounded-full animate-bounce"></div>
        <div className="absolute top-2/3 left-16 w-3 h-3 bg-pink-400/30 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-1/3 right-20 w-2 h-2 bg-orange-400/30 rounded-full animate-bounce delay-2000"></div>
        
        {/* Contact-themed floating elements */}
        <div className="absolute top-1/4 left-4 w-16 h-16 rounded-full bg-primary/15 border-2 border-primary/30 flex items-center justify-center shadow-xl animate-float hover:scale-110 transition-transform duration-300">
          <svg className="w-8 h-8 text-primary animate-spin-slow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a9 9 0 01-9-9c0-4.418 3.582-8 8-8 4.418 0 8 3.592 8 8z" />
          </svg>
        </div>
        
        <div className="absolute top-1/2 right-4 w-14 h-14 rounded-full bg-accent/15 border-2 border-accent/30 flex items-center justify-center shadow-xl animate-float-delayed hover:scale-110 transition-transform duration-300">
          <svg className="w-7 h-7 text-accent animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </div>

        <div className="absolute bottom-1/3 left-8 w-12 h-12 rounded-full bg-green-500/15 border-2 border-green-400/30 flex items-center justify-center shadow-xl animate-float hover:scale-110 transition-transform duration-300">
          <svg className="w-6 h-6 text-green-400 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        </div>

        <div className="absolute top-2/3 right-8 w-10 h-10 rounded-full bg-purple-500/15 border-2 border-purple-400/30 flex items-center justify-center shadow-xl animate-float-delayed hover:scale-110 transition-transform duration-300">
          <svg className="w-5 h-5 text-purple-400 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
          </svg>
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="text-sm text-muted-foreground uppercase tracking-wider mb-4">Contact</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Let's Work Together</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Have a project in mind or just want to chat? I'd love to hear from you. Let's create something amazing
            together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="text-xl">Send me a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or just say hello..."
                    rows={6}
                    required
                  />
                </div>

                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="text-xl">Get in touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  I'm always open to discussing new opportunities, interesting projects, or just having a friendly chat
                  about technology, writing, or music.
                </p>

                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      target={info.href.startsWith("http") ? "_blank" : undefined}
                      rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-center space-x-3 p-3 rounded-lg border border-border/50 hover:border-primary/50 transition-colors group"
                    >
                      <div className="text-primary group-hover:text-accent transition-colors">{info.icon}</div>
                      <div>
                        <div className="font-medium">{info.title}</div>
                        <div className="text-sm text-muted-foreground">{info.value}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="text-xl">Response Time</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  I typically respond to messages within 24-48 hours. For urgent inquiries, feel free to reach out via
                  email directly.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
