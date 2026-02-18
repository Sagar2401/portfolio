"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function ExperienceSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  const experiences = [
    {
      title: "Software Developer",
      company: "Solulab",
      period: "May 2024 - Present",
      description:
        "Contributing to blockchain-based projects with expertise in React, Next.js, and React UI libraries. Building interactive and scalable web applications with hands-on experience integrating blockchain functionalities using various blockchain libraries.",
      skills: [
        "React",
        "Next.js",
        "Blockchain",
        "Web3",
        "Solidity",
        "Shadcn UI",
      ],
    },
    {
      title: "Software Developer",
      company: "Freelance",
      period: "Sep 2023 - May 2024",
      description:
        "Worked with Diffrent clients to overseeing numerous projects and ensuring successful delivery. Effectively communicated with clients, met project deadlines, and expanded knowledge by learning new technologies.",
      skills: [
        "React",
        "Node.js",
        "Client Communication",
        "Project Management",
        "Time Management",
        "Blockchain",
      ],
    },
    {
      title: "Full Stack Developer",
      company: "Gainserv Tech LLP",
      period: "March 2022 - Aug 2023",
      description:
        "Played crucial role in crafting high-performance SaaS product designed for seamless user engagement and onboarding. Contributed to optimal productivity and successful project outcomes in collaborative environment.",
      skills: [
        "Full Stack",
        "SaaS Development",
        "Team Collaboration",
        "Performance Optimization",
      ],
    },
    {
      title: "Full Stack Developer Intern",
      company: "Casepoint",
      period: "Jan 2022 - March 2023",
      description:
        "Completed a MERN Stack internship where I worked on building a full-stack eCommerce platform from scratch. Implemented features like user authentication, product listing, cart, and order management using MongoDB, Express.js, React.js, and Node.js. Gained practical experience in API development, database design, and integrating frontend with backend while following best practices for performance and security.",
      skills: [
        "Full Stack",
        "ECommerce Development",
        "API Development",
        "Database Design",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-card">
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
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-card-foreground mb-6"
          >
            Experience
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            My professional journey from full-stack development to blockchain
            innovation
          </motion.p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group"
            >
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-lg sm:text-xl mb-2">
                        {exp.title}
                      </CardTitle>
                      <CardDescription className="text-primary font-semibold text-base sm:text-lg">
                        {exp.company}
                      </CardDescription>
                    </div>
                    <Badge variant="secondary" className="mt-2 md:mt-0">
                      {exp.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="outline">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
