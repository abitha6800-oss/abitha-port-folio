import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Trophy, BookOpen, Users, Heart, Award } from "lucide-react";

const achievements = [
  "Secured 1st Rank in MCA Program",
  "Secured 3rd Rank in BCA Program",
  "2nd Prize in Funspark Competition (2025)",
  "2nd Prize in Pitch Perfect & Fanton Quiz (2025)",
];

const AchievementsSection = () => (
  <SectionWrapper id="achievements" title="Achievements & Activities" alt>
    {/* Honors */}
    <div className="grid sm:grid-cols-2 gap-4 mb-12">
      {achievements.map((a, i) => (
        <motion.div
          key={a}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08 }}
          className="bg-card rounded-xl p-5 shadow-card flex items-center gap-4 hover:shadow-card-hover transition-shadow"
        >
          <Trophy size={18} className="text-primary flex-shrink-0" />
          <span className="text-sm font-medium text-foreground">{a}</span>
        </motion.div>
      ))}
    </div>

    {/* Leadership, Research, Certifications, Volunteering */}
    <div className="grid sm:grid-cols-2 gap-6">
      <InfoCard icon={Users} title="Leadership">
        <li>Class Representative (2021 – 2024)</li>
        <li>Event Coordinator – FUTEX 2025 (800+ registrations, AI Quest, Treasure Trove)</li>
      </InfoCard>
      <InfoCard icon={BookOpen} title="Research & Workshop">
        <li>Published: AI and its Impact on Business and Management (2025)</li>
        <li>IBM AI Workshop (College)</li>
      </InfoCard>
      <InfoCard icon={Award} title="Certifications">
        <li>Web Design</li>
        <li>Mastering Data Analysis with Python Libraries</li>
        <li>Foundations of Programming with Python</li>
        <li>DevOps Decode</li>
      </InfoCard>
      <InfoCard icon={Heart} title="Volunteering">
        <li>Environmental initiative (tree plantation)</li>
        <li>Social service activities at temple</li>
      </InfoCard>
    </div>
  </SectionWrapper>
);

function InfoCard({ icon: Icon, title, children }: { icon: typeof Users; title: string; children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-card rounded-xl p-6 shadow-card"
    >
      <div className="flex items-center gap-2 mb-3">
        <Icon size={18} className="text-primary" />
        <h3 className="font-heading font-bold text-foreground">{title}</h3>
      </div>
      <ul className="space-y-1.5 ml-4 text-sm text-muted-foreground list-disc">{children}</ul>
    </motion.div>
  );
}

export default AchievementsSection;
