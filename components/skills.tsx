"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Server, Layers, Cpu, Palette, GitBranch, Terminal } from "lucide-react"

export function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

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

  const skillCategories = [
    {
      title: "Frontend",
      icon: <Code className="h-6 w-6 text-primary" />,
      skills: [
        { name: "HTML/CSS", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "React.js", level: 85 },
        { name: "Next.js", level: 80 },
        { name: "Tailwind CSS", level: 90 },
      ],
    },

    {
      title: "Database",
      icon: <Database className="h-6 w-6 text-primary" />,
      skills: [

        { name: "PostgreSQL", level: 75 },
        { name: "MySQL", level: 80 },
        { name: "Firebase", level: 75 },
      ],
    },
    {
      title: "AI & ML",
      icon: <Cpu className="h-6 w-6 text-primary" />,
      skills: [
        { name: "TensorFlow", level: 40 },
        { name: "PyTorch", level: 50 },
        { name: "Scikit-Learn", level: 75 },
        { name: "NLP", level: 60 },
        { name: "Computer Vision", level: 65 },
      ],
    },
    {
      title: "Version Control",
      icon: <GitBranch className="h-6 w-6 text-primary" />,
      skills: [
        { name: "Git", level: 90 },
        { name: "GitHub", level: 85 },
        { name: "GitLab", level: 75 },
      ],
    },
    {
      title: "Tools",
      icon: <Terminal className="h-6 w-6 text-primary" />,
      skills: [
        { name: "VS Code", level: 90 },
        { name: "Postman", level: 85 },
        { name: "Jira", level: 70 },
        { name: "Slack", level: 80 },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4">
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
            <p className="text-primary font-medium">My Skills</p>
            <div className="h-1 w-12 bg-primary rounded-full"></div>
          </motion.div>

          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mt-4 mb-8 text-center">
            Technical Expertise
          </motion.h2>

          <motion.p variants={itemVariants} className="text-foreground/70 text-center max-w-3xl mb-12">
            I&apos;ve worked with a variety of technologies in the web development and AI world. Here&apos;s a glimpse
            of my technical skills and proficiency levels.
          </motion.p>

          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 w-full">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="h-full"
              >
                <Card className="h-full border border-primary/10 bg-background/50 backdrop-blur-sm hover:shadow-md hover:shadow-primary/5 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="p-2 bg-primary/10 rounded-full mr-3">{category.icon}</div>
                      <h3 className="text-xl font-semibold">{category.title}</h3>
                    </div>

                    <div className="space-y-4">
                      {category.skills.map((skill) => (
                        <div key={skill.name}>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">{skill.name}</span>
                            <span className="text-xs text-foreground/70">{skill.level}%</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                              transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                              className="bg-primary h-2 rounded-full"
                            ></motion.div>
                          </div>
                        </div>
                      ))}
                    </div>
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
