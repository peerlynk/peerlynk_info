import React from "react";

const CommunityPage: React.FC = () => {
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
            Welcome to the Peerlynk community — a safe, respectful, and inspiring space 
            where learning and collaboration come first. These guidelines help us 
            maintain a positive and productive academic environment for everyone.
          </p>
        </header>

        {/* Guidelines Section */}
        <section className="mt-16 max-w-4xl mx-auto space-y-10 animate-fade-in-up">
          {[
            {
              title: "1. Be Respectful",
              content:
                "Treat every member with kindness and courtesy, even when opinions differ. Harassment, hate speech, bullying, or intimidation of any kind will not be tolerated.",
            },
            {
              title: "2. Maintain Academic Integrity",
              content:
                "Peerlynk is a space for learning and collaboration. Do not share copyrighted materials without permission, plagiarize, or engage in any form of academic dishonesty.",
            },
            {
              title: "3. Keep It Professional",
              content:
                "Peerlynk is an academic and career-driven platform. Share relevant, insightful content. Avoid spam, promotional posts, or inappropriate material unrelated to education or growth.",
            },
            {
              title: "4. Protect Privacy — Yours and Others’",
              content:
                "Never share private, personal, or confidential information about yourself or others. Respect privacy across all forms of communication on Peerlynk.",
            },
            {
              title: "5. Report Violations",
              content:
                "If you notice harmful or inappropriate behavior, report it immediately. Our moderation team is dedicated to maintaining a safe and respectful environment for all members.",
            },
          ].map((rule, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-gray-950 border border-slate-800 hover:border-brand-primary/40 hover:shadow-lg hover:shadow-brand-primary/10 transition-all duration-300"
            >
              <h2 className="text-2xl font-semibold text-brand-primary mb-2">
                {rule.title}
              </h2>
              <p className="text-slate-400 leading-relaxed">{rule.content}</p>
            </div>
          ))}

          <p className="text-slate-400 text-center mt-12 leading-relaxed">
            Violation of these community guidelines may result in content removal, 
            temporary suspension, or permanent account restriction.  
            Help us keep Peerlynk a positive space for everyone.
          </p>
        </section>

        {/* CTA Section */}
        <section className="mt-20 text-center animate-fade-in-up">
          <h3 className="text-3xl font-bold mb-3 text-white">
            Together, We Build a Better Academic Network
          </h3>
          <p className="text-slate-400 leading-relaxed max-w-2xl mx-auto">
            The strength of Peerlynk lies in its people — students, teachers, and 
            institutions who uplift and support one another. Let’s maintain the 
            integrity and trust that define our community.
          </p>

          <div className="mt-8">
            <a
              href="/contact"
              className="px-8 py-3 rounded-full bg-brand-primary text-black font-semibold hover:opacity-95 shadow-lg transition-all duration-300"
            >
              Contact Moderation Team
            </a>
          </div>
        </section>

        {/* Footer tagline */}
        <footer className="mt-24 text-center text-slate-400 animate-fade-in-up">
          <p className="max-w-2xl mx-auto">
            Peerlynk — connecting learners with respect, collaboration, and opportunity.
          </p>
        </footer>
      </div>
    </section>
  );
};

export default CommunityPage;
