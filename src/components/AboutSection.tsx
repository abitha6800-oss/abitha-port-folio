import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Award, Briefcase, GraduationCap } from "lucide-react";

const highlights = [
  { icon: GraduationCap, label: "CGPA: 8.74", sub: "3rd Semester" },
  { icon: Award, label: "1st Rank", sub: "MCA Program" },
  { icon: Briefcase, label: "BCA CGPA: 8.18", sub: "Graduate" },
];

const AboutSection = () => (
  <SectionWrapper id="about" title="About Me">
    <div className="grid md:grid-cols-3 gap-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="md:col-span-2 space-y-4 text-muted-foreground leading-relaxed"
      >
        <p>
          I am a highly motivated MCA student with strong academic performance and hands-on experience in full stack development. I specialize in Python-based technologies and enjoy building scalable, secure, and efficient web applications.
        </p>
        <p>
          Currently, I am working as a Full Stack Python Developer Intern at VDart, where I actively contribute to real-time projects and enhance my technical expertise.
        </p>
        <p>
          I am passionate about applying modern technologies, AI concepts, and system design principles to solve real-world problems.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="space-y-4"
      >
        {highlights.map((h) => (
          <div
            key={h.label}
            className="bg-card rounded-lg p-4 shadow-card flex items-center gap-4"
          >
            <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-primary">
              <h.icon size={20} />
            </div>
            <div>
              <p className="font-heading font-bold text-foreground">{h.label}</p>
              <p className="text-xs text-muted-foreground">{h.sub}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  </SectionWrapper>
);

export default AboutSection;
