"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Github, ExternalLink, ArrowRight, Download, Linkedin } from "lucide-react"
import Image from "next/image"
import { Cursor } from "react-simple-typewriter"

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

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

  const projects = [
    {
      id: 1,
      title: "Artistly – Artist Booking Platform",
      description:
        "A modern web platform to discover, list, and connect with talented artists. Built with a clean, responsive UI.",
      image: "/art.png",
      tags: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
      github: "#",
      demo: "#",
      details: {
        longDescription:
          "Artistly is a web platform that helps clients find and connect with talented artists. It features artist directories, searchable profiles, quote requests, onboarding flows, and dashboard features for artists—all with dark mode support and responsive design.",
        features: [
          "Artist directory & search",
          "Detailed artist profiles with portfolios",
          "Quote request system",
          "Artist dashboard and onboarding",
          "Fully responsive with dark mode",
        ],
        technologies:
          "Next.js (App Router), React, Tailwind CSS, Framer Motion, TypeScript, Lucide React, React Context API",
      },
    },
    {
      id: 2,
      title: "PathfinderAI – Real-Time RAG Playground",
      description:
        "An AI tool built with Pathway for real-time retrieval-augmented generation (RAG) using Next.js and Supabase.",
      image: "/pathafinderai.png",
      tags: ["Next.js", "Supabase", "TypeScript", "Pathway"],
      github: "https://github.com/Nitish0943/PathFinderAI",
      demo: "https://path-finder-ai.vercel.app/",
      details: {
        longDescription:
          "PathfinderAI is a real-time RAG playground built using Pathway and Supabase. It offers seamless UI interaction for AI queries with real-time data retrieval.",
        features: [
          "Live data ingestion",
          "Real-time query UI",
          "Supabase as vector DB",
          "Next.js frontend integration",
        ],
        technologies: "Next.js, TypeScript, Supabase, Pathway, Tailwind CSS",
      },
    },
    {
      id: 3,
      title: "Ice Cream UI Website",
      description:
        "A responsive, pixel-perfect React website built from a Figma design using Tailwind CSS.",
      image: "/ice cream ui.png",
      tags: ["React", "Tailwind CSS", "Figma"],
      github: "https://github.com/Nitish0943/code-x-nova",
      demo: "https://code-x-nova-1d4w.vercel.app/",
      details: {
        longDescription:
          "This is a UI-focused project where a Figma design was brought to life with pixel perfection using React and Tailwind CSS.",
        features: [
          "Fully responsive layout",
          "Reusable UI components",
          "Design fidelity to Figma",
        ],
        technologies: "React.js, Tailwind CSS, Vite, Figma",
      },
    },
    {
      id: 4,
      title: "AI Image Enhancer",
      description:
        "A modern web app that allows users to upload and enhance images using AI with a sleek side-by-side preview.",
      image: "/ai image.png",
      tags: ["React", "Vite", "Tailwind CSS"],
      github: "https://github.com/Nitish0943/AI-Image-Enhancer",
      demo: "https://ai-image-enhancer-lovat.vercel.app/",
      details: {
        longDescription:
          "A modern web application that lets users upload images and enhance them using AI models. It features a clean, gradient UI with a side-by-side comparison view and responsive layout.",
        features: [
          "Image upload & enhancement",
          "Side-by-side preview of before/after",
          "Gradient UI with card layouts",
          "Loading indicator during processing",
          "Fully responsive design",
        ],
        technologies: "React, Vite, Tailwind CSS, AI APIs",
      },
    },
    {
      id: 5,
      title: "Zentry Clone – Metaverse-Inspired UI",
      description:
        "A frontend simulation of Zentry.com built with React and GSAP featuring immersive UI and animations.",
      image: "/zen.png",
      tags: ["React", "GSAP", "Framer Motion", "Tailwind"],
      github: "https://github.com/Nitish0943/zentry-clone",
      demo: "https://zentry-clone-six-chi.vercel.app/",
      details: {
        longDescription:
          "This clone replicates Zentry's futuristic UI with smooth animations, an animated hero section, and audio toggles. It's a frontend-only project showcasing advanced UI work.",
        features: [
          "Immersive animated UI",
          "Hero section with motion",
          "Audio toggle & interaction",
          "Component-based structure",
        ],
        technologies: "React.js, Tailwind CSS, GSAP, Framer Motion",
      },
    },
    {
      id: 6,
      title: "InterVue AI – AI-Powered Productivity Assistant",
      description:
        "An AI-based task manager offering intelligent prioritization, scheduling, and productivity analytics.",
      image: "/intervue_Ai.png",
      tags: ["React", "Node.js", "TensorFlow.js", "MongoDB"],
      github: "https://github.com/Nitish0943/InterVue-AI",
      demo: "https://final-alpha-one.vercel.app/sign-in",
      details: {
        longDescription:
          "InterVue AI is a task management application powered by artificial intelligence. It uses machine learning to analyze user behavior, prioritize tasks, suggest smart schedules, and provide productivity insights.",
        features: [
          "AI-based task prioritization",
          "Smart scheduling",
          "Productivity analytics",
          "Team collaboration",
          "Cross-platform sync",
        ],
        technologies: "React.js, Node.js, MongoDB, TensorFlow.js, Express.js",
      },
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 bg-muted/30">
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
            <p className="text-primary font-medium">My Projects</p>
            <div className="h-1 w-12 bg-primary rounded-full"></div>
          </motion.div>

          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mt-4 mb-8 text-center">
            Recent Work
          </motion.h2>

          <motion.p variants={itemVariants} className="text-foreground/70 text-center max-w-3xl mb-12">
            Here are some of the projects I&apos;ve worked on. Each project has helped me develop my skills and explore
            new technologies.
          </motion.p>

          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <Card className="h-full overflow-hidden border border-primary/10 bg-background/50 backdrop-blur-sm hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-foreground/70 text-sm mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="px-6 pb-6 pt-0 flex justify-between">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" onClick={() => setSelectedProject(project.id)}>
                          View Details
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="text-2xl">{project.title}</DialogTitle>
                          <DialogDescription className="text-foreground/70">{project.description}</DialogDescription>
                        </DialogHeader>
                        <div className="mt-4">
                          <div className="relative h-64 w-full rounded-lg overflow-hidden mb-6">
                            <Image
                              src={project.image || "/placeholder.svg"}
                              alt={project.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <h4 className="text-lg font-semibold mb-2">Overview</h4>
                          <p className="text-foreground/70 mb-4">{project.details.longDescription}</p>
                          <h4 className="text-lg font-semibold mb-2">Key Features</h4>
                          <ul className="list-disc list-inside text-foreground/70 mb-4">
                            {project.details.features.map((feature, i) => (
                              <li key={i} className="mb-1">
                                {feature}
                              </li>
                            ))}
                          </ul>
                          <h4 className="text-lg font-semibold mb-2">Technologies Used</h4>
                          <p className="text-foreground/70 mb-6">{project.details.technologies}</p>
                          <div className="flex space-x-4">
                            <Button className="flex items-center space-x-2">
                              <ExternalLink className="h-4 w-4" />
                              <span>Live Demo</span>
                            </Button>
                            <Button variant="outline" className="flex items-center space-x-2">
                              <Github className="h-4 w-4" />
                              <span>Source Code</span>
                            </Button>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="icon" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-5 w-5" />
                        </a>
                      </Button>
                      <Button variant="ghost" size="icon" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-5 w-5" />
                        </a>
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* <motion.div variants={itemVariants} className="mt-12">
            <Button variant="outline" className="group">
              View All Projects
              <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  )
}
