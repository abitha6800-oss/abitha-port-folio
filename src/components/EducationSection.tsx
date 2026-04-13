import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { GraduationCap } from "lucide-react";

const education = [
  { degree: "MCA", school: "M.A.M Business School, Anna University", location: "Trichy, India", year: "2024 – 2026", score: "CGPA: 8.58" },
  { degree: "BCA", school: "Bishop Heber College, Bharathidasan University", location: "Trichy, India", year: "2021 – 2024", score: "CGPA: 8.18" },
  { degree: "Higher Secondary", school: "Montfort Matric Hr Sec School", location: "Ariyalur", year: "2019 – 2021", score: "79%" },
];

const EducationSection = () => (
  <SectionWrapper id="education" title="Education" subtitle="Academic journey and milestones" variant="dark">
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-white/10 hidden sm:block" />

      <div className="space-y-8">
        {education.map((e, i) => (
          <motion.div
            key={e.degree}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className={`relative flex items-start gap-6 ${
              i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Timeline dot */}
            <div className="hidden sm:flex absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gold ring-4 ring-navy-deep z-10 mt-6" />

            <div className={`flex-1 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"} sm:pl-16 md:pl-0`}>
              <div className="glass-card rounded-2xl p-6 hover:bg-white/[0.08] transition-all">
                <div className="flex items-center gap-3 mb-2 md:justify-start">
                  <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center text-gold flex-shrink-0">
                    <GraduationCap size={20} />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-white text-lg">{e.degree}</h3>
                    <span className="text-xs font-semibold text-gold">{e.score}</span>
                  </div>
                </div>
                <p className="text-white/70 text-sm mt-2">{e.school}</p>
                <p className="text-white/40 text-xs mt-1">{e.location} · {e.year}</p>
              </div>
            </div>

            <div className="hidden md:block flex-1" />
          </motion.div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default EducationSection;
