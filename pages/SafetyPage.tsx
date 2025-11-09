import React from "react";

const SafetyPage: React.FC = () => {
  const sections = [
    {
      title: "Account Safety",
      desc: "Protect your account by using strong passwords, enabling two-factor authentication, and never sharing your login credentials. Peerlynk actively monitors accounts for suspicious activity to keep you safe.",
    },
    {
      title: "Community Guidelines",
      desc: "Our community guidelines promote respectful and safe interactions. Harassment, hate speech, or sharing inappropriate content is strictly prohibited. Users can report violations for review by our moderation team.",
    },
    {
      title: "Privacy & Data Protection",
      desc: "Peerlynk respects your privacy. We collect only what’s necessary, store it securely, and never share your personal data without consent. You can review or delete your data anytime through your settings.",
    },
    {
      title: "Reporting & Support",
      desc: "If you encounter unsafe behavior or suspicious activity, use the 'Report' feature on posts or profiles, or contact Support directly. We take every report seriously and investigate promptly.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-950 to-black text-slate-100 py-20 px-6 sm:px-10 lg:px-20">
      {/* Header */}
      <header className="text-center max-w-4xl mx-auto animate-fade-in-up">
  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-brand-primary to-brand-secondary text-transparent bg-clip-text">
    Safety &amp; Security
  </h1>
  <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed">
    Your safety is at the heart of everything we build.  
    At <strong>Peerlynk</strong>, we’re committed to creating a trusted, respectful,  
    and secure academic environment for every learner and educator.
  </p>
</header>



      {/* Main Sections */}
      <div className="mt-16 max-w-4xl mx-auto space-y-8 animate-fade-in-up">
        {sections.map((sec, i) => (
          <div
            key={i}
            className="bg-slate-950/60 border border-slate-800 rounded-2xl p-8 shadow-md hover:shadow-lg hover:border-brand-primary/30 transition-all duration-300 animate-fade-in-up"
            style={{ animationDelay: `${0.1 * i}s` }}
          >
            <h2 className="text-2xl font-semibold text-white mb-3">
              {sec.title}
            </h2>
            <p className="text-slate-400 leading-relaxed">{sec.desc}</p>
          </div>
        ))}
      </div>

      {/* Divider Line */}
      <div className="max-w-5xl mx-auto border-t border-slate-800 mt-20 mb-12 opacity-60" />

      {/* Closing Note */}
      <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
        <p className="text-slate-400 text-lg leading-relaxed">
          Peerlynk is committed to creating a safe, educational, and inspiring
          digital campus for everyone.  
          We continuously improve our systems to protect users from harm and ensure a
          respectful, collaborative space.
        </p>
        <p className="mt-8 text-slate-500 italic">
          Last Updated: November 2025
        </p>
      </div>
    </div>
  );
};

export default SafetyPage;
