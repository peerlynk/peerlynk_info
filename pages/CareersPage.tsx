import React from "react";

const CareersPage: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-black via-gray-950 to-black text-white py-20 px-6 sm:px-10 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-32 left-1/4 w-96 h-96 bg-brand-primary/10 blur-3xl rounded-full" />
        <div className="absolute bottom-32 right-1/4 w-96 h-96 bg-brand-secondary/10 blur-3xl rounded-full" />
      </div>

      <div className="container mx-auto max-w-4xl">
        {/* Header Section */}
        <header className="text-center animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-brand-primary to-brand-secondary text-transparent bg-clip-text">
            Join Our Team
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed">
            We’re building the future of academic networking — connecting students, 
            educators, and institutions worldwide. If you’re driven by innovation, 
            collaboration, and learning, we’d love to have you on board.
          </p>
        </header>

        {/* Current Openings */}
        <section className="mt-16 space-y-10 animate-fade-in-up">
          <div className="p-6 rounded-2xl bg-gray-950 border border-slate-800 hover:border-brand-primary/40 hover:shadow-lg hover:shadow-brand-primary/10 transition-all duration-300">
            <h2 className="text-2xl font-semibold text-brand-primary mb-2">
              Current Openings
            </h2>
            <p className="text-slate-400 leading-relaxed">
              There are currently no open positions, but we’re always on the lookout 
              for talented individuals who share our vision.  
              If you’re excited about Peerlynk’s mission, we’d still love to hear from you!
            </p>
            <p className="mt-4 text-slate-400">
              Send your resume and tell us why you’d be a great fit:
            </p>
            <a
              href="mailto:peerlynk@gmail.com"
              className="mt-3 inline-block text-cyan-400 font-medium hover:underline transition-all"
            >
              peerlynk@gmail.com
            </a>
          </div>

          {/* Internship Program */}
          <div className="p-6 rounded-2xl bg-gray-950 border border-slate-800 hover:border-brand-secondary/40 hover:shadow-lg hover:shadow-brand-secondary/10 transition-all duration-300">
            <h2 className="text-2xl font-semibold text-brand-secondary mb-2">
              Internship Program
            </h2>
            <p className="text-slate-400 leading-relaxed mb-6">
              Kickstart your career with real-world experience.  
              The Peerlynk Internship Program provides mentorship from experienced developers, 
              hands-on learning, and the opportunity to build features that impact students globally.
            </p>
            <div className="flex justify-center">
              <a
                href="/internship"
                className="px-8 py-3 rounded-full bg-brand-primary text-black font-semibold hover:opacity-95 shadow-lg transition-all duration-300"
              >
                Learn More & Apply
              </a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="mt-20 text-center animate-fade-in-up">
          <h3 className="text-3xl font-bold mb-3 text-white">
            Reach Out to Us
          </h3>
          <p className="text-slate-400 leading-relaxed max-w-2xl mx-auto mb-6">
            We’re always excited to hear from passionate individuals.  
            Send your queries or resumes, and join our mission to empower learners.
          </p>
          <a
            href="mailto:peerlynk@gmail.com"
            className="px-8 py-3 rounded-full bg-brand-secondary text-black font-semibold hover:opacity-95 shadow-lg transition-all duration-300"
          >
            Contact — peerlynk@gmail.com
          </a>
        </section>

        {/* Footer Tagline */}
        <footer className="mt-24 text-center text-slate-400 animate-fade-in-up">
          <p className="max-w-2xl mx-auto">
            Peerlynk — connecting learners with respect, collaboration, and opportunity.
          </p>
        </footer>
      </div>
    </section>
  );
};

export default CareersPage;
