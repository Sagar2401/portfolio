"use client";

import { motion } from "framer-motion";
import { Code, Users, Globe, Database } from "lucide-react";
import Image from "next/image";
import myImage from "../assets/me.jpg";
export function AboutSection() {
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

  return (
    <section id="about" className="py-20 px-4 bg-card">
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
            About Me
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Skilled Full Stack Developer with a focus on building innovative
            SaaS products to enhance B2B user experiences. Proficient in various
            technologies with a proven track record of optimizing code for
            performance and delivering quality outcomes.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src={myImage}
              alt="About Sagar"
              width={400}
              height={400}
              className="rounded-2xl shadow-2xl m-auto"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              Based in Surat, Gujarat, I specialize in creating modern, scalable
              web applications using cutting-edge technologies. My expertise
              spans from frontend frameworks like React and Next.js to backend
              technologies and blockchain integration.
            </p>

            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              I'm an effective collaborator with clients to understand and meet
              their requirements. As an ambitious and self-motivated individual,
              I'm committed to excellence and always eager to explore innovative
              solutions, particularly in the Web3 space.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              {[
                {
                  icon: Code,
                  title: "Full Stack",
                  desc: "End-to-end development expertise",
                },
                {
                  icon: Globe,
                  title: "SaaS Products",
                  desc: "Building scalable B2B solutions",
                },
                {
                  icon: Database,
                  title: "Blockchain",
                  desc: "Web3 and DeFi applications",
                },
                {
                  icon: Users,
                  title: "Team Player",
                  desc: "Effective client collaboration",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 rounded-lg bg-background/50 backdrop-blur-sm border border-border"
                >
                  <item.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                  <h4 className="text-card-foreground font-semibold mb-1">
                    {item.title}
                  </h4>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
