import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Briefcase, ChevronRight } from "lucide-react";

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
    title: "Learning Management System",
    ongoing: true,
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
  <SectionWrapper id="experience" title="Experience" subtitle="Professional work and contributions" variant="navy">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-card rounded-2xl p-8 md:p-10"
    >
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-12 rounded-xl gradient-btn flex items-center justify-center text-navy-deep">
          <Briefcase size={22} />
        </div>
        <div>
          <h3 className="font-heading font-bold text-white text-xl">Full Stack Python Developer Intern</h3>
          <p className="text-sm text-gold font-medium">VDart · January 2026 – Present</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p) => (
          <div key={p.title} className="bg-white/5 rounded-xl p-6 border border-white/5">
            <h4 className="font-heading font-semibold text-white mb-4 flex items-center gap-2">
              {p.title}
              {p.ongoing && (
                <span className="text-[10px] font-bold bg-gold/20 text-gold px-2.5 py-0.5 rounded-full">
                  Ongoing
                </span>
              )}
            </h4>
            <ul className="space-y-2.5">
              {p.bullets.map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm text-white/60">
                  <ChevronRight size={14} className="text-gold flex-shrink-0 mt-0.5" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.div>
  </SectionWrapper>
);

export default ExperienceSection;
