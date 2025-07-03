"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, GraduationCap, Award } from "lucide-react"

export function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

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

  const timelineItemVariants = {
    hidden: (i: number) => ({
      opacity: 0,
      x: i % 2 === 0 ? -50 : 50,
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
      },
    },
  }

  const experiences = [
   
    {
      id: 1,
      title: "B.Tech in CSE (AI)",
      company: "Rungta College of Engineering & Technology",
      period: "2023 - Present",
      description:
        "Currently pursuing a Bachelor's degree in Computer Science Engineering with a specialization in Artificial Intelligence. Maintaining a strong academic record with a focus on AI, machine learning, and software development.",
      icon: <GraduationCap className="h-6 w-6" />,
      type: "education",
    },
    {
      id: 2,
      title: "Freelance Developer",
      company: "Self-employed",
      period: "Jan 2023 - Present",
      description:
        "Working on various web development projects for clients. Designing and developing custom websites and web applications. Managing client relationships and delivering projects on time.",
      icon: <Briefcase className="h-6 w-6" />,
      type: "work",
    },
    
    {
      id: 3,
      title: "Open Source Contributor",
      company: "Various Projects",
      period: "2022 - Present",
      description:
        "Active contributor to several open-source projects. Contributed code, fixed bugs, and improved documentation for projects related to web development and AI.",
      icon: <Briefcase className="h-6 w-6" />,
      type: "work",
    },
  ]

  return (
    <section id="experience" className="py-20 px-4">
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
            <p className="text-primary font-medium">My Journey</p>
            <div className="h-1 w-12 bg-primary rounded-full"></div>
          </motion.div>

          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mt-4 mb-8 text-center">
            Experience & Education
          </motion.h2>

          <motion.p variants={itemVariants} className="text-foreground/70 text-center max-w-3xl mb-16">
            My professional journey and educational background that have shaped my skills and expertise in the field of
            technology.
          </motion.p>

          <div className="relative w-full max-w-4xl">
            {/* Timeline Line */}
            <motion.div
              initial={{ height: 0 }}
              animate={isInView ? { height: "100%" } : { height: 0 }}
              transition={{ duration: 1.5 }}
              className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-primary/20 h-full rounded-full md:block hidden"
            ></motion.div>
            {/* Mobile Timeline Line */}
            <motion.div
              initial={{ height: 0 }}
              animate={isInView ? { height: "100%" } : { height: 0 }}
              transition={{ duration: 1.5 }}
              className="absolute left-4 w-1 bg-primary/20 h-full rounded-full md:hidden"
            ></motion.div>

            {/* Timeline Items */}
            <div className="relative">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  custom={index}
                  variants={timelineItemVariants}
                  className={`mb-12 flex items-center relative 
                    md:${index % 2 === 0 ? "justify-start" : "justify-end"} 
                    ${index % 2 === 0 ? "" : ""} 
                    ${index % 2 === 0 ? "" : ""} 
                    ${index % 2 === 0 ? "" : ""} 
                    md:flex-row flex-col
                  `}
                >
                  {/* Timeline Dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.5 }}
                    className={`absolute md:left-1/2 md:transform md:-translate-x-1/2 left-4 w-5 h-5 rounded-full bg-primary z-10`}
                  ></motion.div>

                  {/* Content Card */}
                  <motion.div
                    whileHover={{ y: -5, transition: { duration: 0.3 } }}
                    className={`
                      md:w-5/12 w-[90%] 
                      md:${index % 2 === 0 ? "pr-8" : "pl-8"} 
                      md:static relative 
                      mx-auto 
                      ${index % 2 === 0 ? "md:ml-0 md:mr-auto" : "md:mr-0 md:ml-auto"}
                      mt-8 md:mt-0
                    `}
                  >
                    <Card className="border border-primary/10 bg-background/50 backdrop-blur-sm hover:shadow-md hover:shadow-primary/5 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className={`flex items-center md:${index % 2 === 0 ? "justify-end" : "justify-start"} justify-center mb-2`}>
                          <span
                            className={`text-xs font-medium px-2 py-1 rounded-full ${
                              exp.type === "work"
                                ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
                                : exp.type === "education"
                                  ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                                  : "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300"
                            }`}
                          >
                            {exp.type.charAt(0).toUpperCase() + exp.type.slice(1)}
                          </span>
                        </div>
                        <div
                          className={`flex items-start md:${index % 2 === 0 ? "flex-row-reverse text-right" : "text-left"} flex-col text-center md:text-inherit`}
                        >
                          <div className={`p-2 rounded-full bg-primary/10 md:${index % 2 === 0 ? "ml-4" : "mr-4"} mx-auto md:mx-0 mb-2 md:mb-0`}>
                            {exp.icon}
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold">{exp.title}</h3>
                            <p className="text-primary font-medium">{exp.company}</p>
                            <p className="text-sm text-foreground/70 mb-2">{exp.period}</p>
                            <p className="text-sm text-foreground/70">{exp.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
