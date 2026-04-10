import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const categories = [
  { title: "Programming", skills: ["Python", "PHP", "ASP.NET"] },
  { title: "Frontend", skills: ["HTML", "CSS", "JavaScript", "React"] },
  { title: "Backend", skills: ["Django"] },
  { title: "Database", skills: ["MySQL", "SQL"] },
  { title: "Tools", skills: ["Git", "GitHub", "MS Office"] },
  { title: "Soft Skills", skills: ["Teamwork", "Time Management", "Communication", "Adaptability", "Responsibility"] },
];

const SkillsSection = () => (
  <SectionWrapper id="skills" title="Technical Skills">
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {categories.map((cat, i) => (
        <motion.div
          key={cat.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08 }}
          className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow"
        >
          <h3 className="font-heading font-bold text-foreground mb-3">{cat.title}</h3>
          <div className="flex flex-wrap gap-2">
            {cat.skills.map((s) => (
              <span
                key={s}
                className="text-xs font-medium bg-secondary text-secondary-foreground px-3 py-1.5 rounded-full"
              >
                {s}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default SkillsSection;
