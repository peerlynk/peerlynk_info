import React from "react";

const ContactPage: React.FC = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black text-white relative overflow-hidden py-24 px-6 sm:px-10">
      {/* Background Glows */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-32 left-1/4 w-96 h-96 bg-brand-primary/10 blur-3xl rounded-full" />
        <div className="absolute bottom-32 right-1/4 w-96 h-96 bg-brand-secondary/10 blur-3xl rounded-full" />
      </div>

      <div className="container mx-auto max-w-4xl text-center">
        {/* Header */}
        <header className="animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-brand-primary to-brand-secondary text-transparent bg-clip-text">
            Contact Us
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed">
            Have questions, feedback, or partnership inquiries? Reach out and we’ll respond as soon as possible.
          </p>
        </header>

        {/* Google Form Embed */}
        <div className="mt-16 animate-fade-in-up p-8 sm:p-12 rounded-2xl bg-gray-950 border border-slate-800 hover:border-brand-primary/40 hover:shadow-lg hover:shadow-brand-primary/10 transition-all duration-300">
          <iframe
            src="https://forms.gle/Rx842ge5WSKNBBSKA"
            width="100%"
            height="800"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            className="rounded-xl"
          >
            Loading…
          </iframe>
        </div>

        {/* Footer Info */}
        <footer className="mt-16 animate-fade-in-up text-slate-400">
          <p className="text-center text-slate-400 text-sm sm:text-base">
            Have questions? Contact us at{" "}
            <a
              href="mailto:admin@peerlynk.com"
              className="text-brand-secondary font-semibold hover:underline transition-all duration-200"
            >
              admin@peerlynk.com
            </a>
          </p>
          <p className="mt-4 max-w-xl mx-auto text-xs sm:text-sm text-slate-500">
            Peerlynk &copy; {new Date().getFullYear()} — connecting learners with respect, collaboration, and opportunity.
          </p>
        </footer>
      </div>
    </section>
  );
};

export default ContactPage;
