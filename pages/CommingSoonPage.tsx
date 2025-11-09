import React from "react";

const ComingSoonPage: React.FC = () => {
  const upcomingFeatures = [
    "Auto-grouping for students & teachers",
    "One-to-one & group chats",
    "Voice & video calls",
    "Interactive posts, likes & comments",
    "College performance showcase",
    "AI assistant for study support",
    "Communities & interest-based groups",
  ];

  return (
    <section className="bg-gradient-to-br from-black via-[#0a0a0a] to-[#111] min-h-screen flex flex-col items-center justify-center text-white px-6">
      <div className="text-center max-w-3xl">
        <h1 className="text-5xl sm:text-6xl font-bold mb-4 bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent animate-fade-in-up">
          Peerlynk is Coming Soon
        </h1>
        <p className="text-slate-400 text-lg mb-8 animate-fade-in-up delay-100">
          We’re building a revolutionary platform to connect students, teachers, and colleges. Here’s a sneak peek at the features you can expect:
        </p>

        {/* Feature list */}
        <ul className="space-y-4 text-left text-slate-300 mb-10 animate-fade-in-up delay-200">
          {upcomingFeatures.map((feature, index) => (
            <li key={index} className="flex items-center gap-3">
              <span className="inline-block w-3 h-3 bg-brand-primary rounded-full animate-pulse"></span>
              {feature}
            </li>
          ))}
        </ul>

        <p className="text-slate-500 mt-8 text-sm animate-fade-in-up delay-400">
          Stay tuned! Peerlynk is going to change the way students and educators connect.
        </p>
      </div>

      {/* Tailwind animation keyframes */}
      <style>
        {`
          @keyframes fadeInUp {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fade-in-up {
            animation: fadeInUp 0.6s ease forwards;
          }
          .animate-fade-in-up.delay-100 { animation-delay: 100ms; }
          .animate-fade-in-up.delay-200 { animation-delay: 200ms; }
          .animate-fade-in-up.delay-300 { animation-delay: 300ms; }
          .animate-fade-in-up.delay-400 { animation-delay: 400ms; }
        `}
      </style>
    </section>
  );
};

export default ComingSoonPage;
