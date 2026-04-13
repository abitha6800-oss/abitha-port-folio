import { useState } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Mail, Phone, Linkedin, Github, Send, ExternalLink } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:abitha6800@gmail.com?subject=Message from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(form.message)}%0A%0AFrom: ${encodeURIComponent(form.email)}`;
    window.open(mailto);
  };

  return (
    <SectionWrapper id="contact" title="Get in Touch" subtitle="Let's connect and create something great" variant="warm">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Info cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
            Feel free to reach out for job opportunities, collaborations, or professional networking.
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
          className="bg-card rounded-2xl p-6 md:p-8 shadow-card border border-border/50 space-y-5"
        >
          <h3 className="font-heading font-bold text-foreground text-lg">Send a Message</h3>
          <input
            type="text"
            placeholder="Your Name"
            required
            maxLength={100}
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full rounded-xl border border-border bg-background px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold/50 transition-all"
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            maxLength={255}
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full rounded-xl border border-border bg-background px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold/50 transition-all"
          />
          <textarea
            placeholder="Your Message"
            required
            maxLength={1000}
            rows={4}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full rounded-xl border border-border bg-background px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold/50 resize-none transition-all"
          />
          <button
            type="submit"
            className="w-full gradient-btn text-navy-deep px-6 py-3.5 rounded-xl font-bold text-sm hover:shadow-glow transition-all flex items-center justify-center gap-2"
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
      className={`flex items-center gap-4 bg-card rounded-2xl p-4 shadow-card border hover:shadow-card-hover hover:-translate-y-0.5 transition-all group ${
        highlight ? "border-gold/20" : "border-border/50"
      }`}
    >
      <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${
        highlight ? "gradient-btn text-navy-deep" : "bg-navy-deep/5 text-navy-deep"
      }`}>
        <Icon size={18} />
      </div>
      <div className="flex-1">
        <p className="text-xs text-muted-foreground">{label}</p>
        <p className="text-sm font-medium text-foreground group-hover:text-gold-dark transition-colors">{value}</p>
      </div>
      {external && <ExternalLink size={14} className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />}
    </a>
  );
}

export default ContactSection;
