import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => (
  <footer className="bg-navy-deep text-white py-12 px-4">
    <div className="container mx-auto max-w-5xl">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="font-heading font-bold text-lg">M. Abitha</p>
          <p className="text-white/50 text-sm mt-1">Full Stack Python Developer</p>
        </div>

        <div className="flex items-center gap-3">
          <a href="mailto:abitha6800@gmail.com" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/60 hover:text-gold hover:bg-white/10 transition-all">
            <Mail size={16} />
          </a>
          <a href="https://www.linkedin.com/in/abitha-m-8b4849336" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/60 hover:text-gold hover:bg-white/10 transition-all">
            <Linkedin size={16} />
          </a>
          <a href="https://github.com/abitha6800-oss" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/60 hover:text-gold hover:bg-white/10 transition-all">
            <Github size={16} />
          </a>
        </div>
      </div>

      <div className="border-t border-white/10 mt-8 pt-6 text-center">
        <p className="text-sm text-white/40 flex items-center justify-center gap-1">
          © {new Date().getFullYear()} M. Abitha. Made with <Heart size={12} className="text-gold" /> All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
