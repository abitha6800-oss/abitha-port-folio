import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Trophy, BookOpen, Users, Heart, Award, Star } from "lucide-react";

const achievements = [
  { text: "Secured 1st Rank in MCA Program", icon: Star },
  { text: "Secured 3rd Rank in BCA Program", icon: Trophy },
  { text: "2nd Prize in Funspark Competition (2025)", icon: Award },
  { text: "2nd Prize in Pitch Perfect & Fanton Quiz (2025)", icon: Award },
];

const AchievementsSection = () => (
  <SectionWrapper id="achievements" title="Achievements & Activities" subtitle="Honors, leadership, and community involvement" variant="dark">
    {/* Honors */}
    <div className="grid sm:grid-cols-2 gap-4 mb-12">
      {achievements.map((a, i) => (
        <motion.div
          key={a.text}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08 }}
          className="glass-card rounded-2xl p-5 flex items-center gap-4 hover:bg-white/[0.08] transition-all group"
        >
          <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center text-gold flex-shrink-0 group-hover:bg-gold/20 transition-colors">
            <a.icon size={18} />
          </div>
          <span className="text-sm font-medium text-white/90">{a.text}</span>
        </motion.div>
      ))}
    </div>

    {/* Leadership, Research, Certifications, Volunteering */}
    <div className="grid sm:grid-cols-2 gap-5">
      <InfoCard icon={Users} title="Leadership" items={[
        "Class Representative (2021 – 2024)",
        "Event Coordinator – FUTEX 2025 (800+ registrations, AI Quest, Treasure Trove)",
      ]} />
      <InfoCard icon={BookOpen} title="Research & Workshop" items={[
        "Published: AI and its Impact on Business and Management (2025)",
        "IBM AI Workshop (College)",
      ]} />
      <InfoCard icon={Award} title="Certifications" items={[
        "Web Design",
        "Mastering Data Analysis with Python Libraries",
        "Foundations of Programming with Python",
        "DevOps Decode",
      ]} />
      <InfoCard icon={Heart} title="Volunteering" items={[
        "Environmental initiative (tree plantation)",
        "Social service activities at temple",
      ]} />
    </div>
  </SectionWrapper>
);

function InfoCard({ icon: Icon, title, items }: { icon: typeof Users; title: string; items: string[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-card rounded-2xl p-6 hover:bg-white/[0.08] transition-all"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-9 h-9 rounded-lg bg-gold/10 flex items-center justify-center text-gold">
          <Icon size={16} />
        </div>
        <h3 className="font-heading font-bold text-white">{title}</h3>
      </div>
      <ul className="space-y-2 ml-1 text-sm text-white/60 list-none">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <span className="w-1 h-1 rounded-full bg-gold mt-2 flex-shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default AchievementsSection;
