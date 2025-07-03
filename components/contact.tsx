"use client"

import type React from "react"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react"

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.target as HTMLFormElement
    const formData = new FormData(form)
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    }

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbx86W9JkEYLmhNlvJNwnPSDL_AtiFrTShuN9MHYpwdW4Wi1VUaIqe9807FPs0c2mCNlRw/exec", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      })
      if (response.ok) {
        setIsSubmitted(true)
        form.reset()
      } else {
        alert("There was an error submitting the form. Please try again later.")
      }
    } catch (error) {
      alert("There was an error submitting the form. Please check your connection and try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email",
      value: "ntshpthk09@gmail.com",
      link: "mailto:ntshpthk09@gmail.com",
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Phone",
      value: "+91 7029954644",
      link: "tel:+917029954644",
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Location",
      value: "Bhilai, Chhattisgarh, India",
      link: "https://maps.google.com/?q=Bhilai,Chhattisgarh,India",
    },
  ]

  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="flex flex-col items-center"
        >
          <motion.div variants={itemVariants} className="flex items-center space-x-2">
            <div className="h-1 w-12 bg-primary rounded-full"></div>
            <p className="text-primary font-medium">Get In Touch</p>
            <div className="h-1 w-12 bg-primary rounded-full"></div>
          </motion.div>

          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mt-4 mb-8 text-center">
            Contact Me
          </motion.h2>

          <motion.p variants={itemVariants} className="text-foreground/70 text-center max-w-3xl mb-12">
            Feel free to reach out to me for any questions, opportunities, or just to say hello! I&apos;ll get back to
            you as soon as possible.
          </motion.p>

          <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full max-w-5xl">
            <div className="lg:col-span-1 space-y-6">
              {contactInfo.map((info, i) => (
                <motion.div
                  key={info.title}
                  variants={itemVariants}
                  whileHover={{ y: -5, transition: { duration: 0.3 } }}
                >
                  <Card className="border border-primary/10 bg-background/50 backdrop-blur-sm hover:shadow-md hover:shadow-primary/5 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <div className="p-2 rounded-full bg-primary/10 mr-4">{info.icon}</div>
                        <div>
                          <h3 className="text-lg font-semibold">{info.title}</h3>
                          <a
                            href={info.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-foreground/70 hover:text-primary transition-colors"
                          >
                            {info.value}
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div variants={itemVariants} className="lg:col-span-2">
              <Card className="border border-primary/10 bg-background/50 backdrop-blur-sm hover:shadow-md hover:shadow-primary/5 transition-all duration-300">
                <CardContent className="p-6">
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center justify-center py-8"
                    >
                      <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
                      <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                      <p className="text-foreground/70 text-center">
                        Thank you for reaching out. I&apos;ll get back to you soon!
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium">
                            Your Name
                          </label>
                          <Input
                            id="name"
                            placeholder="John Doe"
                            required
                            className="border-primary/20 focus-visible:ring-primary"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium">
                            Your Email
                          </label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="john@example.com"
                            required
                            className="border-primary/20 focus-visible:ring-primary"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium">
                          Subject
                        </label>
                        <Input
                          id="subject"
                          placeholder="How can I help you?"
                          required
                          className="border-primary/20 focus-visible:ring-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium">
                          Message
                        </label>
                        <Textarea
                          id="message"
                          placeholder="Your message here..."
                          rows={5}
                          required
                          className="border-primary/20 focus-visible:ring-primary resize-none"
                        />
                      </div>
                      <Button type="submit" className="w-full group" disabled={isSubmitting}>
                        {isSubmitting ? (
                          <div className="flex items-center">
                            <div className="animate-spin mr-2 h-4 w-4 border-2 border-background border-t-transparent rounded-full"></div>
                            Sending...
                          </div>
                        ) : (
                          <div className="flex items-center">
                            Send Message
                            <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </div>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
