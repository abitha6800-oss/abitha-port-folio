import { useState } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:abitha6800@gmail.com?subject=Message from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(form.message)}%0A%0AFrom: ${encodeURIComponent(form.email)}`;
    window.open(mailto);
  };

  return (
    <SectionWrapper id="contact" title="Contact">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Info cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <p className="text-muted-foreground mb-6 leading-relaxed">
            "Feel free to reach out for job opportunities, collaborations, or professional networking."
          </p>

          <ContactCard
            icon={Mail}
            label="Email"
            value="abitha6800@gmail.com"
            href="mailto:abitha6800@gmail.com"
          />
          <ContactCard
            icon={Phone}
            label="Phone"
            value="+91 6384048100"
            href="tel:+916384048100"
          />
          <ContactCard
            icon={Linkedin}
            label="LinkedIn"
            value="Abitha M"
            href="https://www.linkedin.com/in/abitha-m-8b4849336"
            external
            highlight
          />
          <ContactCard
            icon={Github}
            label="GitHub"
            value="abitha6800-oss"
            href="https://github.com/abitha6800-oss"
            external
            highlight
          />
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          onSubmit={handleSubmit}
          className="bg-card rounded-xl p-6 md:p-8 shadow-card space-y-5"
        >
          <h3 className="font-heading font-bold text-foreground text-lg">Send a Message</h3>
          <input
            type="text"
            placeholder="Your Name"
            required
            maxLength={100}
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            maxLength={255}
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
          <textarea
            placeholder="Your Message"
            required
            maxLength={1000}
            rows={4}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
          />
          <button
            type="submit"
            className="gradient-btn text-primary-foreground px-6 py-3 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity flex items-center gap-2"
          >
            <Send size={16} />
            Send Message
          </button>
        </motion.form>
      </div>
    </SectionWrapper>
  );
};

function ContactCard({
  icon: Icon,
  label,
  value,
  href,
  external,
  highlight,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href: string;
  external?: boolean;
  highlight?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`flex items-center gap-4 bg-card rounded-xl p-4 shadow-card hover:shadow-card-hover transition-shadow group ${
        highlight ? "border border-primary/20" : ""
      }`}
    >
      <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
        highlight ? "gradient-btn text-primary-foreground" : "bg-secondary text-primary"
      }`}>
        <Icon size={18} />
      </div>
      <div>
        <p className="text-xs text-muted-foreground">{label}</p>
        <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{value}</p>
      </div>
    </a>
  );
}

export default ContactSection;
