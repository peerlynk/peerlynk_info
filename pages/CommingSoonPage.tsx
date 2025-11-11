import LaunchBanner from "../components/LaunchBanner";
import React, { useState } from "react";

const ComingSoonPage: React.FC = () => {
  const [showBanner, setShowBanner] = useState(true);

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
    <section className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black text-white relative overflow-hidden py-24 px-6 sm:px-10">
      {/* Top Launch Banner */}
      <LaunchBanner launchMonth="November 2025" />


      {/* Background Glows */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-32 left-1/4 w-96 h-96 bg-brand-primary/10 blur-3xl rounded-full" />
        <div className="absolute bottom-32 right-1/4 w-96 h-96 bg-brand-secondary/10 blur-3xl rounded-full" />
      </div>

      <div className="container mx-auto max-w-4xl text-center">
        {/* Header */}
        <header className="animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-brand-primary to-brand-secondary text-transparent bg-clip-text">
            Peerlynk is Coming Soon
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed">
            We’re building a revolutionary platform to connect students, teachers, and colleges. Here’s a sneak peek at the features you can expect:
          </p>
        </header>

        {/* Feature List */}
        <div className="mt-16 animate-fade-in-up p-8 sm:p-12 rounded-2xl bg-gray-950 border border-slate-800 hover:border-brand-primary/40 hover:shadow-lg hover:shadow-brand-primary/10 transition-all duration-300">
          <ul className="space-y-4 text-left text-slate-300">
            {upcomingFeatures.map((feature, index) => (
              <li key={index} className="flex items-center gap-3">
                <span className="inline-block w-3 h-3 bg-brand-primary rounded-full animate-pulse"></span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Footer Info */}
        <footer className="mt-16 animate-fade-in-up text-slate-400">
          <p className="mt-6 text-center text-slate-400 text-sm">
            Stay tuned! Peerlynk is going to change the way students and educators connect.
          </p>
        </footer>
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

          @keyframes fadeInDown {
            0% {
              opacity: 0;
              transform: translateY(-20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fade-in-down {
            animation: fadeInDown 0.6s ease forwards;
          }
        `}
      </style>
    </section>
  );
};

export default ComingSoonPage;
