"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ThemeToggle } from "@/components/theme-toggle";
import { RESUME_DATA } from "@/constants/resume";

// Refined animation variants
const fadeInUp = {
  initial: {
    opacity: 0,
    y: 15,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const headerVariants = {
  initial: {
    opacity: 0,
    y: 10,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

export const Resume = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      className="min-h-screen bg-background text-foreground p-8 font-mono max-w-5xl mx-auto transition-all duration-200"
    >
      {/* Header Section */}
      <motion.header className="mb-12" variants={stagger}>
        <motion.h1
          variants={headerVariants}
          className="text-4xl font-bold mb-2 transition-colors duration-200"
        >
          {RESUME_DATA.name}
          <motion.a
            href="https://kvnw.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-normal text-muted-foreground hover:text-primary transition-all duration-200 ml-4"
            whileHover={{ x: 5 }}
          >
            → my work
          </motion.a>
        </motion.h1>
        <motion.h2
          variants={headerVariants}
          className="text-2xl text-muted-foreground mb-4 transition-colors duration-200"
        >
          {RESUME_DATA.title}
        </motion.h2>
        <motion.div className="flex flex-wrap gap-4 text-sm" variants={stagger}>
          {Object.entries(RESUME_DATA.contact).map(([key, value]) => (
            <motion.span
              key={key}
              variants={fadeInUp}
              className="flex items-center gap-2 hover:text-primary transition-colors duration-200"
            >
              <span className="text-muted-foreground">{key}:</span>
              {key === "email" ? (
                <a
                  href={`mailto:${value}`}
                  className="hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {value}
                </a>
              ) : key === "github" ? (
                <a
                  href={`https://github.com/${value}`}
                  className="hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {value}
                </a>
              ) : key === "linkedin" ? (
                <a
                  href={`https://${value}`}
                  className="hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {value}
                </a>
              ) : key === "phone" ? (
                <a
                  href={`tel:${value}`}
                  className="hover:text-primary transition-colors"
                >
                  {value}
                </a>
              ) : (
                <span>{value}</span>
              )}
            </motion.span>
          ))}
        </motion.div>
      </motion.header>

      <Separator className="my-8 bg-border transition-colors duration-200" />

      {/* Summary Section */}
      <motion.section variants={stagger} className="mb-12">
        <motion.h3
          variants={headerVariants}
          className="text-xl font-bold mb-4 transition-colors duration-200"
        >
          Professional Summary
        </motion.h3>
        <motion.p
          variants={fadeInUp}
          className="text-muted-foreground leading-relaxed transition-colors duration-200"
        >
          {RESUME_DATA.summary}
        </motion.p>
      </motion.section>

      {/* Skills Section */}
      <motion.section variants={stagger} className="mb-12">
        <motion.h3
          variants={headerVariants}
          className="text-xl font-bold mb-4 transition-colors duration-200"
        >
          Technical Skills
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(RESUME_DATA.skills).map(([category, items]) => (
            <motion.div key={category} variants={fadeInUp}>
              <Card className="p-4 h-full bg-card border-border hover:shadow-md hover:border-primary/20 transition-all duration-200 ease-in-out">
                <h4 className="text-lg font-semibold mb-2 capitalize transition-colors duration-200">
                  {category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-sm hover:bg-secondary/80 transition-colors duration-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section variants={stagger} className="mb-12">
        <motion.h3
          variants={headerVariants}
          className="text-xl font-bold mb-4 transition-colors duration-200"
        >
          Professional Experience
        </motion.h3>
        <div className="space-y-6">
          {RESUME_DATA.experience.map((exp, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="p-6 bg-card border-border hover:shadow-md hover:border-primary/20 transition-all duration-200 ease-in-out">
                <h4 className="text-lg font-semibold transition-colors duration-200">
                  {exp.title}
                </h4>
                <p className="text-muted-foreground mb-2 transition-colors duration-200">
                  {exp.company} | {exp.duration}
                </p>
                <ul className="list-disc list-inside space-y-2">
                  {exp.highlights.map((highlight, i) => (
                    <li
                      key={i}
                      className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Education Section */}
      <motion.section variants={stagger} className="mb-12">
        <motion.h3
          variants={headerVariants}
          className="text-xl font-bold mb-4 transition-colors duration-200"
        >
          Education
        </motion.h3>
        <motion.div variants={fadeInUp}>
          <Card className="p-6 bg-card border-border hover:shadow-md hover:border-primary/20 transition-all duration-200 ease-in-out">
            <h4 className="text-lg font-semibold transition-colors duration-200">
              {RESUME_DATA.education.degree}
            </h4>
            <p className="text-muted-foreground transition-colors duration-200">
              {RESUME_DATA.education.school} | {RESUME_DATA.education.year}
            </p>
          </Card>
        </motion.div>
      </motion.section>

      {/* Export Button */}
      <motion.div
        className="fixed bottom-8 right-8 print-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.2 }}
      >
        <Button
          className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200"
          onClick={() => window.print()}
        >
          Export PDF
        </Button>
      </motion.div>

      {/* Theme Toggle */}
      <ThemeToggle />
    </motion.div>
  );
};
