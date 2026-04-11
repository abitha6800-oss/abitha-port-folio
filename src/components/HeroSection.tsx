import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import profileImg from "@/assets/profile-photo.jpeg";

const HeroSection = () => (
  <section className="min-h-screen gradient-hero flex items-center pt-16 px-4">
    <div className="container mx-auto max-w-5xl">
      <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex-shrink-0"
        >
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary/20 shadow-profile bg-secondary">
            <img
              src={profileImg}
              alt="M. Abitha – Full Stack Python Developer"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center md:text-left"
        >
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-2">
            Welcome
          </p>
          <h1 className="font-heading text-4xl md:text-6xl font-extrabold text-foreground leading-tight">
            M. Abitha
          </h1>
          <p className="text-xl md:text-2xl font-medium text-primary mt-3">
            Full Stack Python Developer
          </p>
          <p className="text-muted-foreground mt-4 max-w-lg text-base leading-relaxed">
            "Building scalable, secure, and intelligent applications with real-world impact."
          </p>
          <div className="flex flex-wrap gap-4 mt-8 justify-center md:justify-start">
            <a
              href="#projects"
              className="gradient-btn text-primary-foreground px-6 py-3 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="flex justify-center mt-16"
      >
        <a href="#about" className="text-muted-foreground animate-bounce">
          <ArrowDown size={24} />
        </a>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
