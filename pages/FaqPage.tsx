
import React from 'react';

const FaqPage: React.FC = () => {
  const faqs = [
    {
      question: "What is Peerlynk?",
      answer: "Peerlynk is a social media platform designed specifically for the academic community, including students, faculty, and alumni. It helps users connect, collaborate, and grow their professional network."
    },
    {
      question: "How does auto-grouping work?",
      answer: "When you sign up and provide your college, course, and batch information, our system automatically places you into relevant 'Peerhub' (groups) with your classmates and college mates, so you can connect from day one."
    },
    {
      question: "Is Peerlynk free to use?",
      answer: "Yes, Peerlynk offers a robust free tier for all users. We may introduce premium features for institutions or power users in the future."
    },
    {
      question: "How do I report inappropriate content?",
      answer: "You can report any post, comment, or user profile using the 'report' button (usually found in a three-dot menu). Our moderation team will review the report and take appropriate action."
    }
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
            Support & FAQs
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed">
            We’re here to help you make the most out of Peerlynk.  
            Find quick answers below or reach out if you need more support.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center gap-3 bg-brand-primary text-black px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Contact Support
            </a>
            <a
              href="/#features"
              className="inline-flex items-center gap-3 border border-slate-700 px-6 py-3 rounded-full text-slate-300 hover:text-white hover:border-brand-secondary/70 transition-all duration-300"
            >
              Explore Features
            </a>
          </div>
        </header>

        {/* FAQ Section */}
        <section className="mt-20 max-w-4xl mx-auto space-y-6 animate-fade-in-up">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-gray-950 border border-slate-800 hover:border-brand-primary/40 hover:shadow-lg hover:shadow-brand-primary/10 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-white">
                {faq.question}
              </h3>
              <p className="mt-2 text-slate-400 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </section>

        {/* CTA */}
        <section className="mt-24 text-center animate-fade-in-up">
          <h3 className="text-3xl font-bold mb-3 text-white">
            Still Have Questions?
          </h3>
          <p className="text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Our team is here to help with anything related to your Peerlynk experience.
            Reach out anytime and we’ll get back to you soon.
          </p>

          <div className="mt-8">
            <a
              href="/contact"
              className="px-8 py-3 rounded-full bg-brand-secondary text-black font-semibold hover:opacity-95 shadow-lg transition-all duration-300"
            >
              Get in Touch
            </a>
          </div>
        </section>

        {/* Footer tagline */}
        <footer className="mt-24 text-center text-slate-400 animate-fade-in-up">
          <p className="max-w-2xl mx-auto">
            Peerlynk — empowering the academic world to connect, collaborate, and grow.
          </p>
        </footer>
      </div>
    </section>
  );
};

export default FaqPage;