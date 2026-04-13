import { motion } from "framer-motion";
import { ArrowDown, MapPin, Briefcase } from "lucide-react";
import profileImg from "@/assets/profile-photo.jpeg";

const HeroSection = () => (
  <section className="min-h-screen gradient-hero relative overflow-hidden flex items-center pt-16 px-4">
    {/* Background decorations */}
    <div className="absolute inset-0 gradient-mesh" />
    <div className="absolute inset-0 dot-pattern opacity-30" />
    <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-gold/5 blur-3xl animate-pulse-glow" />
    <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-gold/3 blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />

    <div className="container mx-auto max-w-5xl relative z-10">
      <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex-shrink-0"
        >
          <div className="relative">
            <div className="w-52 h-52 md:w-72 md:h-72 rounded-full overflow-hidden shadow-profile ring-2 ring-gold/30 ring-offset-4 ring-offset-navy-deep">
              <img
                src={profileImg}
                alt="M. Abitha – Full Stack Python Developer"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-3 left-1/2 -translate-x-1/2 glass-card rounded-full px-4 py-1.5 flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-medium text-white/90">Available for work</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center md:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-1.5 mb-6"
          >
            <Briefcase size={14} className="text-gold" />
            <span className="text-xs font-medium text-white/80">Full Stack Developer Intern at VDart</span>
          </motion.div>

          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
            M. <span className="gradient-text">Abitha</span>
          </h1>
          <p className="text-lg md:text-xl font-medium text-gold mt-3 font-heading">
            Full Stack Python Developer
          </p>
          <div className="flex items-center gap-2 justify-center md:justify-start mt-2">
            <MapPin size={14} className="text-white/50" />
            <span className="text-sm text-white/50">Trichy, India</span>
          </div>
          <p className="text-white/60 mt-5 max-w-lg text-base leading-relaxed">
            Building scalable, secure, and intelligent applications with real-world impact.
          </p>
          <div className="flex flex-wrap gap-4 mt-8 justify-center md:justify-start">
            <a
              href="#projects"
              className="gradient-btn text-navy-deep px-7 py-3.5 rounded-xl font-bold text-sm hover:shadow-glow transition-all"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="glass-card text-white px-7 py-3.5 rounded-xl font-semibold text-sm hover:bg-white/15 transition-all"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="flex justify-center mt-20"
      >
        <a href="#about" className="text-white/40 hover:text-gold transition-colors animate-bounce">
          <ArrowDown size={24} />
        </a>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
