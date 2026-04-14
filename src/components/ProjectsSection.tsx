import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { ArrowUpRight, Layers } from "lucide-react";

const projects = [
  { title: "Smart Intern Management System", desc: "Full stack application for intern management with attendance tracking, dashboard, and real-time monitoring.", tech: ["React", "Django"], color: "from-blue-500 to-blue-600" },
  { title: "Learning Management System", desc: "Platform for managing courses and students with video learning, quizzes, and certificate generation.", tech: ["React", "Django"], ongoing: true, color: "from-purple-500 to-purple-600" },
  { title: "Secure Multimedia Content Sharing", desc: "Secure system using hybrid ECC-AES encryption with real-time access control.", tech: ["Python", "Cryptography"], color: "from-emerald-500 to-emerald-600" },
  { title: "Transformer & Transmission Line Fault Detection", desc: "IoT-based fault detection with real-time monitoring and alert system.", tech: ["Arduino", "Sensors"], color: "from-amber-500 to-amber-600" },
  { title: "Event Management System", desc: "Web-based event platform with registration, scheduling, and ticketing.", tech: ["HTML", "CSS", "JavaScript", "Bootstrap 4", "Node.js", "PHP", "SQL"], color: "from-rose-500 to-rose-600" },
  { title: "AI Fake News Detection", desc: "AI-based classification system for detecting fake news using artificial intelligence.", tech: ["AI", "Python"], color: "from-cyan-500 to-cyan-600" },
];

const ProjectsSection = () => (
  <SectionWrapper id="projects" title="Projects" subtitle="Real-world applications I've built">
    <div className="grid sm:grid-cols-2 gap-5">
      {projects.map((p, i) => (
        <motion.div
          key={p.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08 }}
          className="group bg-card rounded-2xl shadow-card border border-border/50 hover:shadow-card-hover hover:-translate-y-1 transition-all overflow-hidden"
        >
          {/* Color top bar */}
          <div className={`h-1 bg-gradient-to-r ${p.color}`} />

          <div className="p-6">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-start gap-3">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${p.color} flex items-center justify-center text-white flex-shrink-0`}>
                  <Layers size={18} />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-foreground leading-snug">
                    {p.title}
                  </h3>
                  {p.ongoing && (
                    <span className="text-[10px] font-bold bg-gold/10 text-gold-dark px-2.5 py-0.5 rounded-full mt-1 inline-block">
                      Ongoing
                    </span>
                  )}
                </div>
              </div>
              <ArrowUpRight size={16} className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity mt-1" />
            </div>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{p.desc}</p>
            <div className="flex flex-wrap gap-1.5">
              {p.tech.map((t) => (
                <span key={t} className="text-[11px] font-medium bg-navy-deep/5 text-foreground/70 px-2.5 py-1 rounded-full border border-border/50">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default ProjectsSection;
