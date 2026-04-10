import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { GraduationCap } from "lucide-react";

const education = [
  { degree: "MCA", school: "M.A.M Business School, Anna University", location: "Trichy, India", year: "2024 – 2026", score: "CGPA: 8.58" },
  { degree: "BCA", school: "Bishop Heber College, Bharathidasan University", location: "Trichy, India", year: "2021 – 2024", score: "CGPA: 8.18" },
  { degree: "Higher Secondary", school: "Montfort Matric Hr Sec School", location: "Ariyalur", year: "2019 – 2021", score: "79%" },
];

const EducationSection = () => (
  <SectionWrapper id="education" title="Education" alt>
    <div className="space-y-6">
      {education.map((e, i) => (
        <motion.div
          key={e.degree}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="bg-card rounded-xl p-6 shadow-card flex items-start gap-4 hover:shadow-card-hover transition-shadow"
        >
          <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-primary flex-shrink-0 mt-1">
            <GraduationCap size={20} />
          </div>
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
              <h3 className="font-heading font-bold text-foreground text-lg">{e.degree}</h3>
              <span className="text-xs font-medium text-primary bg-secondary px-3 py-1 rounded-full w-fit">{e.score}</span>
            </div>
            <p className="text-muted-foreground text-sm mt-1">{e.school}</p>
            <p className="text-muted-foreground text-xs mt-0.5">{e.location} · {e.year}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default EducationSection;
