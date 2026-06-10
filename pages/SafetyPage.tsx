import React from "react";
import { ShieldAlert, ShieldCheck, Lock, LifeBuoy } from "lucide-react";

interface SafetySection {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

const SafetyPage: React.FC = () => {
  const sections: SafetySection[] = [
    {
      title: "Account Safety",
      desc: "Protect your account by using strong passwords, enabling two-factor authentication, and never sharing your login credentials. Peerlynk actively monitors accounts for suspicious activity to keep your credentials safe.",
      icon: <Lock className="w-6 h-6 text-brand-primary" />,
    },
    {
      title: "Community Guidelines",
      desc: "Our community guidelines promote respectful and safe interactions. Harassment, hate speech, or sharing inappropriate content is strictly prohibited. Users can report violations for review by our moderation team.",
      icon: <ShieldAlert className="w-6 h-6 text-brand-primary" />,
    },
    {
      title: "Privacy & Data Protection",
      desc: "Peerlynk respects your data privacy. We collect only what’s necessary, store it securely, and never share your personal data without consent. You can review or delete your data anytime through your profile settings.",
      icon: <ShieldCheck className="w-6 h-6 text-brand-primary" />,
    },
    {
      title: "Reporting & Support Desk",
      desc: "If you encounter unsafe behavior or suspicious activity, use the 'Report' feature on posts or profiles, or reach out to our dedicated operations desk directly at admin@peerlynk.com. We investigate every incident promptly.",
      icon: <LifeBuoy className="w-6 h-6 text-brand-primary" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-950 to-black text-slate-100 py-20 px-6 sm:px-10 lg:px-20 relative overflow-hidden">
      {/* Background Decorative Mesh */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-brand-primary/5 blur-3xl rounded-full" />
      </div>

      {/* Header Context */}
      <header className="text-center max-w-4xl mx-auto animate-fade-in-up">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-brand-primary to-brand-secondary text-transparent bg-clip-text">
          Safety &amp; Security
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
          Your safety is at the heart of everything we build. At <strong className="text-brand-primary font-semibold">Peerlynk</strong>, we’re committed to creating a trusted, respectful, and secure academic environment for every learner and educator.
        </p>
      </header>

      {/* Safety Matrix Cards */}
      <div className="mt-16 max-w-4xl mx-auto space-y-6">
        {sections.map((sec, i) => (
          <div
            key={i}
            className="flex flex-col sm:flex-row gap-5 bg-slate-950/60 border border-slate-900 rounded-2xl p-6 sm:p-8 hover:border-brand-primary/30 hover:shadow-2xl hover:shadow-brand-primary/5 transition-all duration-300 transform hover:-translate-y-1"
          >
            {/* Icon Wrapper Circle */}
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center">
              {sec.icon}
            </div>
            
            {/* Text Information block */}
            <div className="space-y-2">
              <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">
                {sec.title}
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                {sec.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Structural Segment Divider */}
      <div className="max-w-4xl mx-auto border-t border-slate-900 mt-20 mb-12" />

      {/* Closing Operational Parameters */}
      <div className="max-w-3xl mx-auto text-center space-y-4">
        <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
          Peerlynk is committed to creating a safe, educational, and inspiring digital campus for everyone. We continuously update and strengthen our architecture protocols to protect users from harm and ensure a respectful, collaborative network.
        </p>
        {/* <p className="text-slate-600 text-xs tracking-wide uppercase pt-4 font-mono">
          Last Verified Updates: June 2026
        </p> */}
      </div>
    </div>
  );
};

export default SafetyPage;