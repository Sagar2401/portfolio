"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code2, Database, Palette, FileText, Settings, TestTube, RefreshCw, Zap, Sparkles } from "lucide-react"

export function SkillsSection() {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  }

  const skillGroups = [
    {
      title: "Frontend Frameworks",
      icon: Code2,
      skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS"],
    },
    {
      title: "State Management & Data",
      icon: Database,
      skills: ["Redux", "Zustand", "React Query", "SWR", "GraphQL", "REST API"],
    },
    {
      title: "Styling & UI",
      icon: Palette,
      skills: ["Tailwind CSS", "Styled Components", "Responsive Design", "Mobile First Design"],
    },
    {
      title: "Forms & Validation",
      icon: FileText,
      skills: ["React Hook Form", "Formik", "JWT"],
    },
    {
      title: "Build Tools & Dev",
      icon: Settings,
      skills: ["Vite", "Webpack", "Babel", "ESLint", "Prettier", "Git", "GitHub"],
    },
    {
      title: "Testing & Quality",
      icon: TestTube,
      skills: ["Jest", "React Testing Library", "Cypress", "Storybook"],
    },
    {
      title: "Rendering Patterns",
      icon: RefreshCw,
      skills: ["SSR", "SSG", "CSR"],
    },
    {
      title: "Performance & Tools",
      icon: Zap,
      skills: ["Lighthouse", "Performance Optimization", "Axios"],
    },
    {
      title: "Design & Collaboration",
      icon: Sparkles,
      skills: ["Figma"],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6"
          >
            My <span className="text-primary">Skills</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks I use to build exceptional web applications
            and blockchain solutions.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((skillGroup, index) => {
            const IconComponent = skillGroup.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group"
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/30">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors duration-300">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <CardTitle className="text-base sm:text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors duration-300">
                        {skillGroup.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skillIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: skillIndex * 0.1 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          <Badge
                            variant="secondary"
                            className="text-xs px-3 py-1 bg-muted/50 text-muted-foreground hover:bg-primary/20 hover:text-primary transition-all duration-200 border border-border/30 hover:border-primary/50"
                          >
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
