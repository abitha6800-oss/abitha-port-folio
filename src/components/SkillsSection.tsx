import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Code2, Layout, Server, Database, Wrench, Users } from "lucide-react";

const categories = [
  { title: "Programming", skills: ["Python", "PHP", "ASP.NET"], icon: Code2, accent: "from-blue-500/20 to-blue-600/5" },
  { title: "Frontend", skills: ["HTML", "CSS", "JavaScript", "React"], icon: Layout, accent: "from-purple-500/20 to-purple-600/5" },
  { title: "Backend", skills: ["Django"], icon: Server, accent: "from-emerald-500/20 to-emerald-600/5" },
  { title: "Database", skills: ["MySQL", "SQL"], icon: Database, accent: "from-amber-500/20 to-amber-600/5" },
  { title: "Tools", skills: ["Git", "GitHub", "MS Office"], icon: Wrench, accent: "from-rose-500/20 to-rose-600/5" },
  { title: "Soft Skills", skills: ["Teamwork", "Time Management", "Communication", "Adaptability", "Responsibility"], icon: Users, accent: "from-cyan-500/20 to-cyan-600/5" },
];

const SkillsSection = () => (
  <SectionWrapper id="skills" title="Technical Skills" subtitle="Technologies and tools I work with" variant="warm">
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {categories.map((cat, i) => (
        <motion.div
          key={cat.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08 }}
          className="group bg-card rounded-2xl p-6 shadow-card border border-border/50 hover:shadow-card-hover hover:-translate-y-1 transition-all relative overflow-hidden"
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${cat.accent} opacity-0 group-hover:opacity-100 transition-opacity`} />
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-navy-deep/5 flex items-center justify-center text-navy-deep group-hover:bg-navy-deep group-hover:text-white transition-all">
                <cat.icon size={18} />
              </div>
              <h3 className="font-heading font-bold text-foreground">{cat.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((s) => (
                <span
                  key={s}
                  className="text-xs font-medium bg-navy-deep/5 text-foreground/80 px-3 py-1.5 rounded-full border border-border/50"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default SkillsSection;
