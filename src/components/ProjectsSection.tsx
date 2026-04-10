import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Layers } from "lucide-react";

const projects = [
  { title: "Smart Intern Management System", desc: "Full stack application for intern management with attendance tracking, dashboard, and real-time monitoring.", tech: ["React", "Django"] },
  { title: "Learning Management System", desc: "Platform for managing courses and students with video learning, quizzes, and certificate generation.", tech: ["React", "Django"], ongoing: true },
  { title: "Secure Multimedia Content Sharing", desc: "Secure system using hybrid ECC-AES encryption with real-time access control.", tech: ["Python", "Cryptography"] },
  { title: "Transformer & Transmission Line Fault Detection", desc: "IoT-based fault detection with real-time monitoring and alert system.", tech: ["Arduino", "Sensors"] },
  { title: "Event Management System", desc: "Web-based event platform with registration, scheduling, and ticketing.", tech: ["HTML", "CSS", "JS", "Node.js", "PHP", "SQL"] },
  { title: "AI Fake News Detection", desc: "Machine learning-based classification system for fake news.", tech: ["Python"] },
];

const ProjectsSection = () => (
  <SectionWrapper id="projects" title="Projects">
    <div className="grid sm:grid-cols-2 gap-6">
      {projects.map((p, i) => (
        <motion.div
          key={p.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08 }}
          className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow group"
        >
          <div className="flex items-start gap-3 mb-3">
            <div className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-primary flex-shrink-0">
              <Layers size={18} />
            </div>
            <div>
              <h3 className="font-heading font-bold text-foreground leading-snug">
                {p.title}
                {p.ongoing && (
                  <span className="ml-2 text-[10px] font-medium bg-primary/10 text-primary px-2 py-0.5 rounded-full align-middle">
                    Ongoing
                  </span>
                )}
              </h3>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{p.desc}</p>
          <div className="flex flex-wrap gap-1.5">
            {p.tech.map((t) => (
              <span key={t} className="text-[11px] font-medium bg-secondary text-secondary-foreground px-2.5 py-1 rounded-full">
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default ProjectsSection;
