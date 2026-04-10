import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Briefcase } from "lucide-react";

const projects = [
  {
    title: "Smart Intern Management System",
    bullets: [
      "Developed full stack application for managing intern workflow",
      "Implemented shift-based attendance system (first & second shift logic)",
      "Built real-time intern status tracking",
      "Designed dashboard for performance monitoring",
      "Improved UI/UX for better usability",
      "Worked on frontend (React) and backend (Django)",
    ],
  },
  {
    title: "Learning Management System (Ongoing)",
    bullets: [
      "Developing course and student management modules",
      "Implementing student enrollment and progress tracking",
      "Integrating video learning and quiz system",
      "Designing certificate generation and automation system",
      "Connecting backend APIs with frontend components",
    ],
  },
];

const ExperienceSection = () => (
  <SectionWrapper id="experience" title="Experience" alt>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-card rounded-xl p-6 md:p-8 shadow-card"
    >
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-primary">
          <Briefcase size={20} />
        </div>
        <div>
          <h3 className="font-heading font-bold text-foreground text-lg">Full Stack Python Developer Intern</h3>
          <p className="text-sm text-muted-foreground">VDart · January 2026 – Present</p>
        </div>
      </div>

      <div className="mt-6 space-y-6">
        {projects.map((p) => (
          <div key={p.title}>
            <h4 className="font-heading font-semibold text-foreground mb-2">{p.title}</h4>
            <ul className="space-y-1.5 ml-4">
              {p.bullets.map((b) => (
                <li key={b} className="text-sm text-muted-foreground list-disc">{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.div>
  </SectionWrapper>
);

export default ExperienceSection;
