import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa6";

const Footer: React.FC = () => {
  const socialIcons = [
    { Icon: FaInstagram, link: "https://www.instagram.com/peerlynk",  },
    { Icon: FaXTwitter, link: "https://x.com/peerlynk",  },
    { Icon: FaLinkedin, link: "https://www.linkedin.com/company/peerlynk",  },
    { Icon: FaEnvelope, link: "mailto:peerlynk@gmail.com",  },
    { Icon: FaWhatsapp, link: "https://wa.me/7599865700", },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-black via-gray-950 to-black text-slate-400 overflow-hidden border-t border-slate-900">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(56,189,248,0.08),transparent_70%)] pointer-events-none" />

      <div className="relative container mx-auto px-6 sm:px-10 lg:px-20 py-20">
        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-16">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <Link to="/" className="flex items-center" aria-label="Peerlynk Homepage">
              <span className="text-4xl font-extrabold bg-gradient-to-r from-brand-primary via-cyan-400 to-brand-secondary text-transparent bg-clip-text tracking-tight">
                Peerlynk
              </span>
            </Link>
            <p className="mt-5 text-sm text-slate-400 leading-relaxed max-w-md">
              Connecting students, teachers, alumni, and institutions for mentorship, networking, and growth.
            </p>
            {/* Social Icons */}
            <div className="flex flex-wrap gap-4 mt-6">
              {socialIcons.map(({ Icon, link }, i) => (
                <a
                  key={i}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-gray-950 border border-slate-800 hover:scale-110 transition-all duration-300 shadow-md hover:shadow-[0_0_15px_rgba(0,0,0,0.5)]"
                  // style={{ color }}
                >
                  <Icon className ="h-6 w-6" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:text-brand-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-brand-primary">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-brand-primary">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/internship" className="hover:text-brand-primary">
                  Internships
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Support
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/help" className="hover:text-brand-primary">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-brand-primary">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="https://forms.gle/ibDBThhRaNaYEyQy7" target="_blank" className="hover:text-brand-primary">
                  Feedback & Support
                </Link>
              </li>
              <li>
                <Link to="/community" className="hover:text-brand-primary">
                  Community Guidelines
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Legal
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/terms" className="hover:text-brand-primary">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-brand-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/safety" className="hover:text-brand-primary">
                  Safety & Security
                </Link>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm"
        >
          <p className="text-slate-500">
            &copy; {new Date().getFullYear()} Peerlynk. All rights reserved.
          </p>

          <a
            href="/comingSoon"
            className="flex items-center space-x-2 bg-gradient-to-r from-brand-primary to-brand-secondary text-black px-4 py-2 rounded-lg font-semibold hover:from-brand-secondary hover:to-brand-primary transition-all duration-300 shadow-md shadow-brand-primary/20"
          >
            <span>Download Peerlynk App</span>
          </a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
