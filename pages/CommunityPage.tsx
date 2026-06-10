import React from "react";

const CommunityPage: React.FC = () => {
  const guidelines = [
    {
      title: "1. Be Respectful",
      content:
        "Treat every member with kindness and courtesy, even when opinions differ. Harassment, hate speech, bullying, discrimination, or intimidation of any kind will face a zero-tolerance policy.",
      color: "primary",
    },
    {
      title: "2. Maintain Academic Integrity",
      content:
        "Peerlynk is a space for structural learning and talent representation. Do not share copyrighted materials without explicit permission, plagiarize code/research, or engage in any form of institutional dishonesty.",
      color: "secondary",
    },
    {
      title: "3. Keep It Professional",
      content:
        "Peerlynk is an academic and career-driven platform. Share relevant, insightful projects and insights. Avoid comment spamming, unwanted commercial promotions, or inappropriate material unrelated to educational growth.",
      color: "primary",
    },
    {
      title: "4. Protect Privacy — Yours and Others’",
      content:
        "Never share private, personal, or confidential information (like personal phone numbers, grades, or sensitive credentials) about yourself or others. Respect peer data boundaries across all features.",
      color: "secondary",
    },
    {
      title: "5. Report Violations Promptly",
      content:
        "If you notice harmful content, behavioral violations, or security lapses, report it instantly via our in-app systems. Our operations team handles security reports with absolute data discretion within 24 hours.",
      color: "primary",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black text-white relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-32 left-1/4 w-96 h-96 bg-brand-primary/10 blur-3xl rounded-full" />
        <div className="absolute bottom-32 right-1/4 w-96 h-96 bg-brand-secondary/10 blur-3xl rounded-full" />
      </div>

      <div className="container mx-auto px-6 lg:px-20 py-20">
        {/* Header */}
        <header className="text-center max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-brand-primary to-brand-secondary text-transparent bg-clip-text">
            Community Guidelines
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed">
            Welcome to the Peerlynk community — a secure, trusted, and architectural space 
            where peer learning and career scaling come first. These guidelines guarantee a 
            positive, clean, and highly productive network for every user.
          </p>
        </header>

        {/* Guidelines Section */}
        <section className="mt-16 max-w-4xl mx-auto space-y-8 animate-fade-in-up">
          {guidelines.map((rule, i) => {
            const headingColor = rule.color === "primary" ? "text-brand-primary" : "text-brand-secondary";
            const hoverBorder = rule.color === "primary" ? "hover:border-brand-primary/40 hover:shadow-brand-primary/5" : "hover:border-brand-secondary/40 hover:shadow-brand-secondary/5";

            return (
              <div
                key={i}
                className={`p-6 rounded-2xl bg-gray-950 border border-slate-900 ${hoverBorder} hover:shadow-lg transition-all duration-300`}
              >
                <h2 className={`text-2xl font-semibold mb-2 ${headingColor}`}>
                  {rule.title}
                </h2>
                <p className="text-slate-400 text-sm sm:text-base leading-relaxed">{rule.content}</p>
              </div>
            );
          })}

          <div className="bg-slate-950/40 p-6 rounded-2xl border border-red-900/30 text-center mt-12">
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              <strong>Enforcement Policy:</strong> Violation of these structural rules may result in permanent content moderation, 
              temporary account restrictions, or immediate hardware-level bans. Help us keep Peerlynk clean and professional.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-20 text-center animate-fade-in-up">
          <h3 className="text-3xl font-bold mb-3 text-white">
            Together, We Build a Trusted Network
          </h3>
          <p className="text-slate-400 leading-relaxed max-w-2xl mx-auto text-sm sm:text-base">
            The standard of Peerlynk lies within its ecosystem — elite students, educators, and vetted 
            alumni pushing boundaries. For immediate manual audits or escalation, write to our trust desk.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/contact"
              className="px-8 py-3 rounded-full border border-slate-700 text-slate-300 font-semibold hover:text-white hover:border-slate-500 transition-all duration-300 text-sm"
            >
              Contact Local Support
            </a>
            <a
              href="mailto:admin@peerlynk.com"
              className="px-8 py-3 rounded-full bg-brand-primary text-black font-semibold hover:opacity-95 shadow-lg transition-all duration-300 text-sm"
            >
              Trust Desk: admin@peerlynk.com
            </a>
          </div>
        </section>

        {/* Footer tagline */}
        <footer className="mt-24 text-center text-slate-500 animate-fade-in-up text-xs sm:text-sm">
          <p className="max-w-2xl mx-auto">
            Peerlynk Ecosystem &copy; {new Date().getFullYear()} — Connecting student milestones with corporate opportunity.
          </p>
        </footer>
      </div>
    </section>
  );
};

export default CommunityPage;