import React from "react";
import {
  MissionIcon,
  VisionIcon,
  ValueConnectionIcon,
  ValueInnovationIcon,
  ValueCommunityIcon,
  ValueGrowthIcon,
  ValueTransparencyIcon,
  ValueEmpowermentIcon
} from "../components/IconComponents";

const AboutPage: React.FC = () => {
  const missionVisionCards = [
    {
      Icon: MissionIcon,
      title: "Our Mission",
      desc: "To empower every student with a smart, connected, and opportunity-driven platform where academic learning naturally transforms into portfolio building, professional mentorship, and career discovery.",
      color: "primary",
    },
    {
      Icon: VisionIcon,
      title: "Our Vision",
      desc: "To become the global digital campus ecosystem for every institution — where students discover global opportunities, educators expand pedagogical impact, and alumni seamlessly foster lifelong networks.",
      color: "secondary",
    },
  ];

  const coreValues = [
    {
      title: "Connection with Purpose",
      desc: "We connect people and opportunities so every single interaction intentionally moves a student's career forward.",
      Icon: ValueConnectionIcon,
    },
    {
      title: "Innovation for Impact",
      desc: "Small, highly thoughtful, and modular tools designed to solve real campus problems — from skill-swapping to structural portfolios.",
      Icon: ValueInnovationIcon,
    },
    {
      title: "Community First",
      desc: "We build features explicitly for academic networks — matching students, faculty, and verified alumni instead of individual viral feeds.",
      Icon: ValueCommunityIcon,
    },
    {
      title: "Student-Centric Growth",
      desc: "Every metric we track is measured purely by how efficiently it helps students showcase talent and claim market opportunities.",
      Icon: ValueGrowthIcon,
    },
    {
      title: "Transparency & Trust",
      desc: "Clean controls, professional moderation, and verified institute profiles maintain absolute data integrity across campuses.",
      Icon: ValueTransparencyIcon,
    },
    {
      title: "Empowerment Through Education",
      desc: "We believe peer learning becomes unbeatably powerful when milestones are visible, verifiable, and open to top-tier recruiters.",
      Icon: ValueEmpowermentIcon,
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
        {/* Header / Intro */}
        <header className="text-center max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-brand-primary to-brand-secondary text-transparent bg-clip-text">
            Who We Are
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed">
            Peerlynk is the academic social network purpose-built for students, educators, alumni, 
            and modern institutions. We deliver structured systems that enable campus communities 
            to exchange technical insights, share collaborative projects, and seamlessly map skills to global industries.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <a
              href="https://play.google.com/store/apps/details?id=com.peerlynk.network"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-brand-primary text-black px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Download Peerlynk
            </a>
            <a
              href="/#features"
              className="inline-flex items-center gap-3 border border-slate-700 px-6 py-3 rounded-full text-slate-300 hover:text-white hover:border-brand-secondary/70 transition-all duration-300"
            >
              See Features
            </a>
          </div>
        </header>

        {/* Mission & Vision Matrix */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {missionVisionCards.map((card, index) => {
            const borderColor = card.color === "primary" ? "border-brand-primary/20" : "border-brand-secondary/20";
            const hoverBorder = card.color === "primary" ? "hover:border-brand-primary/50" : "hover:border-brand-secondary/50";
            const hoverShadow = card.color === "primary" ? "hover:shadow-2xl hover:shadow-brand-primary/20" : "hover:shadow-2xl hover:shadow-brand-secondary/20";
            const iconBg = card.color === "primary" ? "bg-brand-primary/10 text-brand-primary" : "bg-brand-secondary/10 text-brand-secondary";
            const CurrentIcon = card.Icon;

            return (
              <div
                key={index}
                className={`p-8 rounded-2xl bg-gray-950 border ${borderColor} shadow-lg flex flex-col items-center text-center animate-fade-in-up transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 ${hoverBorder} ${hoverShadow}`}
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <div className={`flex-shrink-0 w-14 h-14 flex items-center justify-center ${iconBg} rounded-full mb-4`}>
                  <CurrentIcon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-semibold text-white">{card.title}</h3>
                <p className="mt-2 text-slate-400 text-sm sm:text-base leading-relaxed">{card.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Core Values Section */}
        <section className="mt-20 max-w-6xl mx-auto animate-fade-in-up">
          <h2 className="text-3xl font-bold text-center mb-10 bg-gradient-to-r from-brand-primary to-brand-secondary text-transparent bg-clip-text">
            Our Core Values
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((val, i) => {
              const ValueIcon = val.Icon;
              return (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-gray-950 border border-slate-800 hover:border-brand-primary/40 hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary">
                    <ValueIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{val.title}</h4>
                    <p className="text-slate-400 mt-1 text-sm leading-relaxed">{val.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Team Collaboration CTA */}
        <section className="mt-24 max-w-4xl mx-auto text-center animate-fade-in-up">
          <h3 className="text-3xl font-bold mb-3 text-white">
            Meet Our Team
          </h3>
          <p className="text-slate-400 leading-relaxed max-w-2xl mx-auto text-sm sm:text-base">
            Behind Peerlynk is a distributed loop of engineers, product builders, and academic advisors 
            shipping dedicated systems to institutional communities worldwide. We build spaces where structural learning, peer mentorship, and global opportunities converge.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <a
              href="/team"
              className="px-6 py-3 rounded-full border border-slate-700 text-slate-200 hover:text-white hover:border-brand-primary/60 transition-all duration-300"
            >
              Meet the Team
            </a>
            <a
              href="/contact"
              className="px-6 py-3 rounded-full bg-brand-primary text-black font-semibold hover:opacity-95 shadow-lg transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
        </section>

        {/* Informational Footer Tagline */}
        <footer className="mt-24 text-center text-slate-400 animate-fade-in-up">
          <p className="max-w-2xl mx-auto text-sm">
            Peerlynk — where campus life, deep mentorship, and technical validation meet. 
            Engineered to showcase architectural talent and scale educational values.
          </p>
        </footer>
      </div>
    </section>
  );
};

export default AboutPage;