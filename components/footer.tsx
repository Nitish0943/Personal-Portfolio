"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Twitter, Instagram, ArrowUp } from "lucide-react"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background py-12 px-4 border-t border-border">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl font-bold mb-6"
          >
            <span className="text-primary">Nitish</span> Pathak
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex space-x-4 mb-8"
          >
            <Button variant="ghost" size="icon" className="rounded-full">
            <a href="https://github.com/Nitish0943" target="_blank" rel="noopener noreferrer">
              <Github className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
            <a href="https://www.linkedin.com/in/nitish-pathak-935524260/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center text-foreground/70 mb-8"
          >
            <p>© {currentYear} Nitish Pathak. All rights reserved.</p>
            <p className="mt-2">Full Stack Developer & AI Enthusiast</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button variant="outline" size="icon" className="rounded-full" onClick={scrollToTop}>
              <ArrowUp className="h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
