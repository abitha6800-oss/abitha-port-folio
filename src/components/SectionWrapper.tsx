import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  id: string;
  title?: string;
  alt?: boolean;
  children: ReactNode;
  className?: string;
}

const SectionWrapper = ({ id, title, alt, children, className = "" }: Props) => (
  <section id={id} className={`py-20 px-4 ${alt ? "section-alt" : ""} ${className}`}>
    <div className="container mx-auto max-w-5xl">
      {title && (
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-12 text-center"
        >
          {title}
        </motion.h2>
      )}
      {children}
    </div>
  </section>
);

export default SectionWrapper;
