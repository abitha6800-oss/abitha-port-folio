import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Award, Briefcase, GraduationCap, Sparkles } from "lucide-react";

const highlights = [
  { icon: GraduationCap, label: "CGPA: 8.74", sub: "3rd Semester", color: "bg-blue-500/10 text-blue-500" },
  { icon: Award, label: "1st Rank", sub: "MCA Program", color: "bg-gold/10 text-gold" },
  { icon: Briefcase, label: "BCA CGPA: 8.18", sub: "Graduate", color: "bg-emerald-500/10 text-emerald-500" },
];

const AboutSection = () => (
  <SectionWrapper id="about" title="About Me" subtitle="Passionate about building impactful solutions">
    <div className="grid md:grid-cols-3 gap-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="md:col-span-2"
      >
        <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-2xl" />
          <Sparkles size={20} className="text-gold mb-4" />
          <div className="space-y-4 text-muted-foreground leading-relaxed relative z-10">
            <p>
              I am a highly motivated MCA student with strong academic performance and hands-on experience in full stack development. I specialize in Python-based technologies and enjoy building scalable, secure, and efficient web applications.
            </p>
            <p>
              Currently, I am working as a <span className="text-foreground font-semibold">Full Stack Python Developer Intern at VDart</span>, where I actively contribute to real-time projects and enhance my technical expertise.
            </p>
            <p>
              I am passionate about applying modern technologies, AI concepts, and system design principles to solve real-world problems.
            </p>
          </div>
        </div>
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
            className="bg-card rounded-2xl p-5 shadow-card border border-border/50 flex items-center gap-4 hover:shadow-card-hover transition-all hover:-translate-y-0.5"
          >
            <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${h.color}`}>
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
