"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useTypewriter, Cursor } from "react-simple-typewriter"
import { ArrowRight, Download, Github, Linkedin } from "lucide-react"
import Image from "next/image"

export function Hero() {
  const [text] = useTypewriter({
    words: ["Full Stack Developer", "AI Enthusiast", "Student"],
    loop: true,
    delaySpeed: 2000,
  })

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-10 px-4">
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col space-y-6"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex items-center space-x-2"
          >
            <div className="h-1 w-12 bg-primary rounded-full"></div>
            <p className="text-primary font-medium">Welcome to my portfolio</p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold"
          >
            Hi, I&apos;m <span className="text-primary">Nitish Pathak</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl font-medium text-foreground/80 h-8"
          >
            <span>{text}</span>
            <Cursor cursorColor="hsl(var(--primary))" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-foreground/70 max-w-md"
          >
            A passionate full stack developer and AI enthusiast, currently pursuing CSE (AI) at Rungta College of
            Engineering & Technology, Bhilai.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <Button asChild className="group">
              <a href="#contact">
                Contact Me
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <a href="/Nitish_Pathak_Resume.pdf" download>
              <Button variant="outline" className="group">
                Download CV
                <Download className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
              </Button>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex space-x-4"
          >
             <Button asChild className="group">
              <a href="https://github.com/Nitish0943" target="_blank" rel="noopener noreferrer">
               <Github  className="h-5 w-5" />
              </a>
            </Button>
            <Button asChild className="group">
              <a href="https://www.linkedin.com/in/nitish-pathak-935524260/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1, type: "spring" }}
          className="relative w-full h-[400px] md:h-[500px] order-first md:order-last"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-background rounded-full blur-3xl opacity-30"></div>
          <div className="relative h-full w-full flex items-center justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20">
              <Image
                src="/nitish.jpg?height=320&width=320"
                alt="Nitish Pathak"
                fill
                className="object-cover"
                priority
              />
            </div>

            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
              className="absolute -bottom-4 -right-4 md:bottom-0 md:right-20 bg-primary text-primary-foreground p-3 rounded-full shadow-lg"
            >
              <span className="text-xl font-bold">2+</span>
              <p className="text-xs">Years Exp.</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
