import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  id: string;
  title?: string;
  subtitle?: string;
  variant?: "light" | "dark" | "navy" | "warm";
  children: ReactNode;
  className?: string;
}

const SectionWrapper = ({ id, title, subtitle, variant = "light", children, className = "" }: Props) => {
  const bgClass = {
    light: "section-light",
    dark: "section-dark",
    navy: "section-navy",
    warm: "section-warm",
  }[variant];

  const isDark = variant === "dark" || variant === "navy";

  return (
    <section id={id} className={`py-24 px-4 ${bgClass} ${className}`}>
      <div className="container mx-auto max-w-5xl">
        {title && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-14 text-center"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-[2px] bg-gold rounded-full" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-gold">
                {id}
              </span>
              <span className="w-8 h-[2px] bg-gold rounded-full" />
            </div>
            <h2 className={`font-heading text-3xl md:text-4xl font-bold ${isDark ? "text-white" : "text-foreground"}`}>
              {title}
            </h2>
            {subtitle && (
              <p className={`mt-3 text-sm max-w-md mx-auto ${isDark ? "text-white/60" : "text-muted-foreground"}`}>
                {subtitle}
              </p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
