"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Lightbulb, BookOpen, Coffee } from "lucide-react"
import Image from "next/image"

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
      },
    }),
  }

  const interests = [
    {
      icon: <Code className="h-10 w-10 text-primary" />,
      title: "Web Development",
      description: "Passionate about creating responsive and interactive web applications.",
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-primary" />,
      title: "AI & Machine Learning",
      description: "Exploring the fascinating world of artificial intelligence and its applications.",
    },
    {
      icon: <BookOpen className="h-10 w-10 text-primary" />,
      title: "Continuous Learning",
      description: "Always eager to learn new technologies and improve my skills.",
    },
    {
      icon: <Coffee className="h-10 w-10 text-primary" />,
      title: "Coffee & Coding",
      description: "Nothing beats solving complex problems with a cup of coffee.",
    },
  ]

  return (
    <section id="about" className="py-20 px-4 bg-muted/30">
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
            <p className="text-primary font-medium">About Me</p>
            <div className="h-1 w-12 bg-primary rounded-full"></div>
          </motion.div>

          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mt-4 mb-8 text-center">
            Get to Know Me Better
          </motion.h2>

          <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="w-full h-[400px] rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-background rounded-lg -z-10 blur-2xl opacity-30"></div>
                <Image
                  src="/about.png?height=400&width=400"
                  alt="About Nitish Pathak"
                  fill
                  className="object-cover rounded-lg"
                  style={{ objectFit: "cover" }}
                 
                />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-background p-4 rounded-lg shadow-lg">
                <p className="text-lg font-bold">3rd Year Undergraduate</p>
                <p className="text-sm text-foreground/70">CSE (AI) Student</p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col space-y-6">
              <motion.h3 variants={itemVariants} className="text-2xl font-semibold">
                I&apos;m Nitish, a Full Stack Developer and AI Enthusiast
              </motion.h3>

              <motion.p variants={itemVariants} className="text-foreground/70">
                I am a passionate full stack developer and AI enthusiast currently pursuing my Bachelor&apos;s degree in
                Computer Science Engineering with a specialization in Artificial Intelligence at Rungta College of
                Engineering & Technology, Bhilai.
              </motion.p>

              <motion.p variants={itemVariants} className="text-foreground/70">
                My journey in the world of programming began with a curiosity to understand how things work on the web.
                This curiosity has evolved into a passion for creating seamless, user-friendly applications that solve
                real-world problems.
              </motion.p>

              <motion.p variants={itemVariants} className="text-foreground/70">
                When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source
                projects, or enjoying a good book.
              </motion.p>
            </motion.div>
          </motion.div>

          <motion.h3 variants={itemVariants} className="text-2xl font-semibold mt-16 mb-8 text-center">
            My Interests
          </motion.h3>

          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {interests.map((interest, i) => (
              <motion.div
                key={interest.title}
                custom={i}
                variants={cardVariants}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="h-full"
              >
                <Card className="h-full border border-primary/10 bg-background/50 backdrop-blur-sm hover:shadow-md hover:shadow-primary/5 transition-all duration-300">
                  <CardContent className="flex flex-col items-center text-center p-6 h-full">
                    <div className="mb-4 p-3 bg-primary/10 rounded-full">{interest.icon}</div>
                    <h4 className="text-xl font-semibold mb-2">{interest.title}</h4>
                    <p className="text-foreground/70 text-sm">{interest.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
