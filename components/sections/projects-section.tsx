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

export function ProjectsSection() {
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

  const projects = [
    {
      title: "WorldTradeX",
      description:
        "Global agri-commerce platform. Developed a multi-panel frontend system (Buyer, Seller, Packers/Providers/Distributors, Logistics) with shared data flows, serving diverse user roles from a single unified codebase. Implemented real-time chat and notifications using WebSocket, enabling instant communication and reducing average page load time by approximately 20%. Integrated GraphQL APIs and managed complex application state using Redux Toolkit for predictable, performant data handling across all panels. Built accessibility features including voice-based navigation, improving usability across diverse user types and device capabilities.",
      image:
        "/placeholder.svg?height=300&width=500&text=WorldTradeX+Platform",
      tech: [
        "React.js",
        "Next.js",
        "GraphQL",
        "Redux Toolkit",
        "WebSocket",
      ],
      live: "#",
    },
    {
  title: "WorldTradeX",
  description:
    "Built multi-panel frontend (Buyer, Seller, Packers, Providers, Distributors, Logistics) from a unified codebase.Implemented real-time chat and notifications using WebSocket.Reduced average page load time by ~20%"
  image: "/placeholder.svg?height=300&width=500&text=WorldTradeX+Platform",
  tech: [
    "React.js",
    "Next.js",
    "GraphQL",
    "Redux Toolkit",
    "WebSocket"
  ],
  highlights: [
    "Built multi-panel frontend (Buyer, Seller, Packers, Providers, Distributors, Logistics) from a unified codebase",
    "Implemented real-time chat and notifications using WebSocket",
    "Reduced average page load time by ~20%",
    "Integrated GraphQL APIs with Redux Toolkit for scalable state management",
    "Added voice-based navigation for accessibility"
  ],
  live: "https://www.worldtradex.com/"
}
    {
      title: "UserLove (Uzera)",
      description:
        "Comprehensive user experience platform designed to unlock maximum product potential, emphasizing heightened user engagement, retention, and conversion rates.",
      image: "/placeholder.svg?height=300&width=500&text=UserLove+Platform",
      tech: [
        "ReactJS",
        "GraphQL",
        "ApexCharts",
        "MaterialUI",
        "Node.js",
        "PostgreSQL",
      ],
      live: "https://uzera.com/",
    },
    {
      title: "LIVLYT.COM",
      description:
        "SaaS product specializing in device and software leasing and rental services with dynamic platform features and seamless user experience.",
      image: "/placeholder.svg?height=300&width=500&text=Livlyt+Platform",
      tech: ["Next.js", "React.js", "Material UI", "Node.js", "PostgreSQL"],
      live: "https://livlyt.com",
    },
    {
      title: "PayFunds-DEX Platform",
      description:
        "Decentralized exchange platform for cryptocurrency trading with non-custodial trading, liquidity pools, and cross-chain swaps functionality.",
      image: "/placeholder.svg?height=300&width=500&text=DEX+Platform",
      tech: ["React", "Web3", "Wagmi", "Material UI", "Polygon", "Solidity"],
      live: "https://www.payfunds.com/",
    },
    {
      title: "SimplyTokenized",
      description:
        "Blockchain tokenization platform converting high-value assets into digital tokens, enabling fractional ownership and increased liquidity.",
      image: "/placeholder.svg?height=300&width=500&text=Tokenization+Platform",
      tech: ["React", "Blockchain", "Web3", "Smart Contracts"],
      live: "#",
    },
    {
      title: "Radient-Tex",
      description:
        "Document storage and management platform with categorical organization, built with modern web technologies and secure authentication.",
      image: "/placeholder.svg?height=300&width=500&text=Document+Management",
      tech: ["Next.js", "Supabase", "Tailwind CSS", "Redux"],
      live: "#",
    },
    {
      title: "CartCraft E-commerce",
      description:
        "Full-featured e-commerce platform with admin and user panels, plus Diamond Management System for small diamond offices.",
      image: "/placeholder.svg?height=300&width=500&text=E-commerce+Platform",
      tech: ["React JS", "Node JS", "Express JS", "MongoDB", "Bootstrap"],
      live: "#",
    },
    {
      title: "ComplyExchange",
      description:
        "ComplyExchange is a comprehensive blockchain-based digital ecosystem that includes a web-based application and a PWA (Progressive Web App) to provide a native look & feel. It is being used by different stakeholders including taxpayers, tax professionals, compliance officers, auditors, and administrators to enable seamless tax form tokenization and provide better visibility into tax compliance activities, enabling data-driven decision making throughout the process. The platform helps in improving efficiency during tax compliance activities by leveraging blockchain initiatives and digital transformation throughout the value chain.",
      image: "/placeholder.svg?height=300&width=500&text=E-commerce+Platform",
      tech: ["React JS", "Node JS", "Express JS", "MongoDB", "Pinata"],
      live: "https://www.complyexchange.com/",
    },
    {
      title: "Coin-Concern",
      description:
        "Developed the frontend for a global fintech news platform, engineering responsive UIs with React to integrate real-time crypto price charts and third-party data APIs, ensuring a seamless experience for a high-traffic audience.",
      image: "/placeholder.svg?height=300&width=500&text=E-commerce+Platform",
      tech: [
        "React JS",
        "Shadcn UI",
        "CoinGecko API",
        "Tailwind CSS",
        "Polygon",
      ],
      live: "https://dev.thecoinconcern.com/",
    },
    {
      title: "Joblo AI",
      description:
        "AI-powered recruitment platform leveraging advanced technologies like resume parsing and chatbot integration to streamline hiring processes and enhance candidate engagement.",
      image: "/placeholder.svg?height=300&width=500&text=E-commerce+Platform",
      tech: ["React JS", "Material UI", "Resume Parser", "ChatBot", "Node.js"],
      live: "https://joblo.ai/",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-background">
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
            Featured Projects
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            A showcase of my work spanning SaaS platforms, blockchain
            applications, and enterprise solutions
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer "
                className="h-full w-full flex"
              >
                <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription className="line-clamp-3">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
