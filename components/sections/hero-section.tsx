"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

interface HeroSectionProps {
  scrollToSection: (href: string) => void;
}

export function HeroSection({ scrollToSection }: HeroSectionProps) {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10" />
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920&text=Hero+Background')] bg-cover bg-center opacity-5" />

        {/* Animated gradient blobs */}
        <motion.div
          className="absolute top-1/4 left-1/3 -z-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, -30, 0],
            y: [0, -30, 40, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-0 -z-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
          animate={{
            x: [0, -40, 60, 0],
            y: [0, 30, -20, 0],
            scale: [1, 0.8, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div
          className="absolute top-40 right-0 -z-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
          animate={{
            x: [0, -60, 20, 0],
            y: [0, 50, -40, 0],
            scale: [1, 1.3, 0.7, 1],
          }}
          transition={{
            duration: 18,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 4,
          }}
        />

        {/* Additional smaller gradient orbs for more depth */}
        <motion.div
          className="absolute top-3/4 right-1/4 -z-10 w-48 h-48 bg-accent/5 rounded-full blur-2xl"
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -40, 30, 0],
            opacity: [0.3, 0.6, 0.2, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 -z-10 w-32 h-32 bg-primary/8 rounded-full blur-xl"
          animate={{
            x: [0, -25, 35, 0],
            y: [0, 25, -15, 0],
            opacity: [0.4, 0.7, 0.3, 0.4],
          }}
          transition={{
            duration: 22,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 3,
          }}
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-3xl"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-primary font-semibold text-lg sm:text-xl mb-4"
          >
            Software Developer at Solulab
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight"
          >
            Sagar <span className="text-primary">Dhandhukiya</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg sm:text-xl md:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed"
          >
            Passionate Full Stack Developer crafting innovative SaaS solutions
            and cutting-edge blockchain applications. Transforming complex ideas
            into scalable, user-centric digital experiences that drive business
            growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("#projects")}
              className="px-8 py-3 rounded-full"
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-3 rounded-full bg-transparent"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1J0EYCEZ5uXHrEFaxSSmRPQuMwdzWTatT/view?usp=sharing",
                  "_blank",
                )
              }
            >
              Download CV
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex space-x-6"
          >
            {[
              { Icon: Github, href: "https://github.com/Sagar2401" },
              {
                Icon: Linkedin,
                href: "https://linkedin.com/in/sagardhandhukiya",
              },

              { Icon: Mail, href: "mailto:prajaptisagar81410@gmail.com" },
            ].map(({ Icon, href }, index) => (
              <motion.a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground"
      >
        <div className="w-6 h-10 border-2 border-border rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
}
