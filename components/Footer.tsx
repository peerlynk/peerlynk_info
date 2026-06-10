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
import { PlayStoreIcon } from "./IconComponents";

const Footer: React.FC = () => {
  const socialIcons = [
    { Icon: FaInstagram, link: "https://www.instagram.com/peerlynk" },
    { Icon: FaXTwitter, link: "https://x.com/peerlynk" },
    { Icon: FaLinkedin, link: "https://www.linkedin.com/company/peerlynk" },
    { Icon: FaEnvelope, link: "mailto:admin@peerlynk.com" },
    { Icon: FaWhatsapp, link: "https://wa.me/7599865700" },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-black via-gray-950 to-black text-slate-400 overflow-hidden border-t border-slate-900">
      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(56,189,248,0.08),transparent_70%)] pointer-events-none" />

      <div className="relative container mx-auto px-6 sm:px-10 lg:px-20 py-10">
        {/* Top Grid Matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-16">
          
          {/* Brand Presentation Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <a href="https://peerlynk.com" className="flex items-center" aria-label="Peerlynk Homepage">
              <span className="text-4xl font-extrabold bg-gradient-to-r from-brand-primary via-cyan-400 to-brand-secondary text-transparent bg-clip-text tracking-tight">
                Peerlynk
              </span>
            </a>
            <p className="mt-5 text-sm text-slate-400 leading-relaxed max-w-md">
              Connecting students, teachers, alumni, and institutions for mentorship, networking, and growth.
            </p>
            {/* Social Channels Map */}
            <div className="flex flex-wrap gap-4 mt-6">
              {socialIcons.map(({ Icon, link }, i) => (
                <a
                  key={i}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-gray-950 border border-slate-800 hover:scale-110 transition-all duration-300 shadow-md hover:shadow-[0_0_15px_rgba(0,0,0,0.5)] text-slate-400 hover:text-brand-primary hover:border-brand-primary/40"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Platform Product Core (Opens in New Tab) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Platform
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="https://peerlynk.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-brand-primary font-semibold hover:underline transition-all flex items-center gap-1"
                >
                  Go to Peerlynk Web <span>&rarr;</span>
                </a>
              </li>
              <li>
                <Link to="/team" className="hover:text-brand-primary transition-colors">
                  Meet Our Team
                </Link>
              </li>
              <li>
                <a href="https://founder.peerlynk.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition-colors">
                  Meet the Founder
                </a>
              </li>
              <li>
                <a href="https://career.peerlynk.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition-colors">
                  Careers Desk
                </a>
              </li>
              <li>
                <a href="https://labs.peerlynk.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition-colors">
                  Peerlynk Labs
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Support Channels with Contact Us */}
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
                <Link to="/contact" className="text-slate-300 font-medium hover:text-brand-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/help" className="hover:text-brand-primary transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-brand-primary transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <a href="https://forms.gle/ibDBThhRaNaYEyQy7" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition-colors">
                  Feedback Portal
                </a>
              </li>
              <li>
                <Link to="/community" className="hover:text-brand-primary transition-colors">
                  Community Guidelines
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Legal Compliance Bounds */}
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
                <Link to="/terms" className="hover:text-brand-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-brand-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/safety" className="hover:text-brand-primary transition-colors">
                  Safety & Security
                </Link>
              </li>
              <li>
                <Link to="/child-safety" className="hover:text-brand-primary transition-colors">
                  Child Safety Standard
                </Link>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar Matrix */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-2 pt-6 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm"
        >
          <p className="text-slate-500">
            &copy; {new Date().getFullYear()} Peerlynk Technologies. All rights reserved.
          </p>

          <a
            href="https://play.google.com/store/apps/details?id=com.peerlynk.network"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download Peerlynk from Google Play"
            className="flex items-center justify-center space-x-2 bg-slate-900 border border-slate-800 text-white px-4 py-2.5 rounded-xl hover:bg-brand-primary hover:text-black hover:border-transparent transition-all duration-300 transform hover:scale-105 shadow-lg shadow-black/40"
          >
            <PlayStoreIcon className="h-5 w-5" />
            <span className="font-medium text-sm">Download App</span>
          </a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;