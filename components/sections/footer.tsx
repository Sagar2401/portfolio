"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

interface FooterProps {
  scrollToSection: (href: string) => void;
}

export function Footer({ scrollToSection }: FooterProps) {
  return (
    <footer className="py-16 px-4 bg-card border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-4">
                <span className="text-primary">Sagar</span>
                <span className="text-card-foreground">Dhandhukiya</span>
              </h3>
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-6">
                Full Stack Developer specializing in innovative SaaS products
                and blockchain technologies. Building scalable solutions for B2B
                user experiences.
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: Github, href: "https://github.com/sagar2401" },
                  {
                    icon: Linkedin,
                    href: "https://www.linkedin.com/in/sagar-dhandhukiya-a51546166/",
                  },
                  { icon: Mail, href: "mailto:prajaptisagar81410@gmail.com" },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-muted-foreground hover:text-white transition-colors p-2 rounded-lg hover:bg-secondary"
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h4 className="text-card-foreground font-semibold mb-4 text-sm sm:text-base">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {[
                  "About",
                  "Skills",
                  "Experience",
                  "Projects",
                  "Services",
                  "Contact",
                ].map((item, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(`#${item.toLowerCase()}`)}
                      className="text-muted-foreground hover:text-foreground transition-colors text-xs sm:text-sm"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Specializations */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="text-card-foreground font-semibold mb-4 text-sm sm:text-base">
                Specializations
              </h4>
              <ul className="space-y-2">
                {[
                  "SaaS Development",
                  "Blockchain Apps",
                  "Full Stack Solutions",
                  "Web3 Integration",
                ].map((service, index) => (
                  <li key={index}>
                    <span className="text-muted-foreground text-xs sm:text-sm">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Stay Connected */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h4 className="text-card-foreground font-semibold mb-4 text-sm sm:text-base">
                Stay Connected
              </h4>
              <p className="text-muted-foreground text-xs sm:text-sm mb-4 leading-relaxed">
                If you have a project in mind or just want to chat about
                technology, feel free to reach out.
              </p>
              <Button
                onClick={() => scrollToSection("#contact")}
                className="transition-colors text-xs sm:text-sm"
              >
                Get in Touch
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-muted-foreground text-xs sm:text-sm">
            © {new Date().getFullYear()} Sagar Dhandhukiya. All rights
            reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="mt-4 md:mt-0 text-muted-foreground hover:text-foreground transition-colors p-2 rounded-lg hover:bg-secondary text-xs sm:text-sm"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </button>
        </motion.div>
      </div>
    </footer>
  );
}
