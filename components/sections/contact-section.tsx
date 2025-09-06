"use client";

import type React from "react";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Mail,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { useState, useRef } from "react";

export function ContactSection() {
  const [isLoading, setIsLoading] = useState(false);
  const [formStatus, setFormStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const formRef = useRef<HTMLFormElement>(null);

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setFormStatus({ type: null, message: "" });

    const formData = new FormData(e.currentTarget);
    const data = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        let message = result.message;

        // Add mode-specific information
        if (result.mode === "development") {
          message += " (Running in development mode - check browser console)";
        } else if (result.mode === "fallback") {
          message += " (Email service temporarily unavailable)";
        }

        setFormStatus({
          type: "success",
          message: message,
        });

        // Reset form using ref
        if (formRef.current) {
          formRef.current.reset();
        }
      } else {
        setFormStatus({
          type: "error",
          message: result.message,
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormStatus({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-background">
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
            Get In Touch
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Ready to bring your ideas to life? Let's discuss your next project
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6">
                Let's Connect
              </h3>
              <p className="text-muted-foreground text-sm sm:text-base mb-8">
                I'm always interested in hearing about new opportunities and
                exciting projects. Whether you have a question or just want to
                say hi, feel free to reach out!
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: "prajaptisagar81410@gmail.com",
                  href: "mailto:prajaptisagar81410@gmail.com",
                },
                {
                  icon: MapPin,
                  label: "Location",
                  value: "Ahmedabad, Gujarat, India",
                  href: "https://maps.google.com/?q=Ahmedabad,Gujarat,India",
                },
              ].map((contact, index) => (
                <motion.a
                  key={index}
                  href={contact.href}
                  target={contact.label === "Location" ? "_blank" : undefined}
                  rel={
                    contact.label === "Location"
                      ? "noopener noreferrer"
                      : undefined
                  }
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-4 p-4 rounded-lg bg-card border border-border hover:border-primary/30 transition-colors group"
                >
                  <contact.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-muted-foreground text-sm">
                      {contact.label}
                    </p>
                    <p className="text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">
                      {contact.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg border border-primary/20">
              <h4 className="text-foreground font-semibold mb-2 text-sm sm:text-base">
                Quick Response Guarantee
              </h4>
              <p className="text-muted-foreground text-xs sm:text-sm">
                I typically respond to all inquiries within 24-48 hours. For
                urgent matters, feel free to reach out on LinkedIn.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Send className="w-5 h-5 text-primary" />
                  <span>Send a Message</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Status Message */}
                {formStatus.type && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-lg flex items-start space-x-3 ${
                      formStatus.type === "success"
                        ? "bg-green-50 text-green-800 border border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800"
                        : "bg-red-50 text-red-800 border border-red-200 dark:bg-red-900/20 dark:text-red-400 dark:border-red-800"
                    }`}
                  >
                    {formStatus.type === "success" ? (
                      <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    ) : (
                      <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    )}
                    <div>
                      <p className="text-sm font-medium">
                        {formStatus.message}
                      </p>
                      {formStatus.type === "success" && (
                        <p className="text-xs mt-1 opacity-80">
                          {formStatus.message.includes("Development mode")
                            ? "Check the browser console for message details."
                            : formStatus.message.includes(
                                  "Email service temporarily unavailable"
                                )
                              ? "You'll also receive a confirmation email shortly."
                              : ""}
                        </p>
                      )}
                    </div>
                  </motion.div>
                )}

                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Input
                        name="firstName"
                        placeholder="First Name"
                        required
                        disabled={isLoading}
                        className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                    <div>
                      <Input
                        name="lastName"
                        placeholder="Last Name"
                        required
                        disabled={isLoading}
                        className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                  </div>

                  <Input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                    disabled={isLoading}
                    className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                  />

                  <Input
                    name="subject"
                    placeholder="Subject"
                    required
                    disabled={isLoading}
                    className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                  />

                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    rows={5}
                    required
                    disabled={isLoading}
                    className="transition-all duration-200 focus:ring-2 focus:ring-primary/20 resize-none"
                  />

                  <motion.div
                    whileHover={{ scale: isLoading ? 1 : 1.02 }}
                    whileTap={{ scale: isLoading ? 1 : 0.98 }}
                  >
                    <Button
                      type="submit"
                      className="w-full relative overflow-hidden"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </motion.div>
                </form>

                <div className="text-xs text-muted-foreground text-center pt-2">
                  <p>
                    By sending a message, you agree to receive a response via
                    email. Your information is kept private and secure.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
