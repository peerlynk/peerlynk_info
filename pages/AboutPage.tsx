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
import { Link } from "react-router-dom";

const AboutPage: React.FC = () => {
  const missionVisionCards = [
    {
      Icon: MissionIcon,
      title: "Our Mission",
      desc: "To empower every learner with a smart, trusted platform that connects academic achievement to mentorship and real-world opportunities. We make collaboration, portfolio-building, and career discovery native to campus life.",
      color: "primary",
    },
    {
      Icon: VisionIcon,
      title: "Our Vision",
      desc: "To become the digital campus for every institution — where students discover opportunity, teachers extend impact, and alumni give back through mentorship and networks that last a lifetime.",
      color: "secondary",
    },
  ];

  const quickStats = [
    { label: "Active Students", value: "100k+", color: "text-brand-primary" },
    { label: "Verified Educators", value: "15k+", color: "text-brand-secondary" },
    { label: "Projects & Portfolios", value: "40k+", color: "text-brand-primary" },
    { label: "Partner Institutions", value: "2k+", color: "text-brand-secondary" },
  ];

  const coreValues = [
    {
      title: "Connection with Purpose",
      desc: "We connect people and opportunities so every interaction moves a student forward.",
      Icon: ValueConnectionIcon,
    },
    {
      title: "Innovation for Impact",
      desc: "Small, thoughtful tools that solve real academic problems — from auto-grouping to portfolio discovery.",
      Icon: ValueInnovationIcon,
    },
    {
      title: "Community First",
      desc: "We design for communities — students, faculty, alumni, and institutions — not just individual feeds.",
      Icon: ValueCommunityIcon,
    },
    {
      title: "Student-Centric Growth",
      desc: "Every feature is measured by how well it helps students learn, showcase skills, and access opportunity.",
      Icon: ValueGrowthIcon,
    },
    {
      title: "Transparency & Trust",
      desc: "Clear controls, honest moderation, and institution-backed spaces build trust across campuses.",
      Icon: ValueTransparencyIcon,
    },
    {
      title: "Empowerment Through Education",
      desc: "We believe learning is most powerful when it's visible, shareable, and connected to mentors and recruiters.",
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
            Peerlynk is the academic network built for students, teachers, alumni, 
            and institutions — a place where learning, mentorship, and opportunity meet. 
            We design tools that help academic communities connect meaningfully, 
            share knowledge, and launch real careers.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <a
              href="/comming-soon"
              className="inline-flex items-center gap-3 bg-brand-primary text-black px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
             Join Peerlynk
            </a>
            <a
              href="/#features"
              className="inline-flex items-center gap-3 border border-slate-700 px-6 py-3 rounded-full text-slate-300 hover:text-white hover:border-brand-secondary/70 transition-all duration-300"
            >
              See Features
            </a>
          </div>
        </header>

        {/* Mission & Vision */}
<div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
  {[
    {
      icon: <MissionIcon className="h-8 w-8" />,
      title: "Our Mission",
      desc: "To empower every student with a smart, connected, and opportunity-driven platform where learning meets networking.",
      color: "primary",
    },
    {
      icon: <VisionIcon className="h-8 w-8" />,
      title: "Our Vision",
      desc: "To become the world’s most trusted academic networking platform, where every student can learn, showcase, and grow.",
      color: "secondary",
    },
  ].map((card, index) => {
    const borderColor = card.color === "primary" ? "border-brand-primary/20" : "border-brand-secondary/20";
    const hoverBorder = card.color === "primary" ? "hover:border-brand-primary/50" : "hover:border-brand-secondary/50";
    const hoverShadow = card.color === "primary" ? "hover:shadow-2xl hover:shadow-brand-primary/20" : "hover:shadow-2xl hover:shadow-brand-secondary/20";
    const iconBg = card.color === "primary" ? "bg-brand-primary/10 text-brand-primary" : "bg-brand-secondary/10 text-brand-secondary";

    return (
      <div
        key={index}
        className={`p-8 rounded-2xl bg-gray-950 ${borderColor} shadow-lg flex flex-col items-center text-center animate-fade-in-up transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 ${hoverBorder} ${hoverShadow}`}
        style={{ animationDelay: `${0.1 * (index + 1)}s` }}
      >
        <div className={`flex-shrink-0 w-14 h-14 flex items-center justify-center ${iconBg} rounded-full mb-4`}>
          {card.icon}
        </div>
        <h3 className="text-2xl font-semibold text-white">{card.title}</h3>
        <p className="mt-2 text-slate-400">{card.desc}</p>
      </div>
    );
  })}
</div>

        {/* Quick Stats */}
        {/* <section className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-5xl mx-auto text-center animate-fade-in-up">
          {quickStats.map((stat, i) => (
            <div
              key={i}
              className="p-5 rounded-xl bg-gray-950 border border-slate-800 hover:border-brand-primary/40 hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
              <div className="text-slate-400 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </section> */}

        {/* Core Values */}
        <section className="mt-20 max-w-6xl mx-auto animate-fade-in-up">
          <h2 className="text-3xl font-bold text-center mb-10 bg-gradient-to-r from-brand-primary to-brand-secondary text-transparent bg-clip-text">
            Our Core Values
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((val, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-gray-950 border border-slate-800 hover:border-brand-primary/40 hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-start space-x-4"
              >
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-brand-primary/10">
                  <val.Icon className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">{val.title}</h4>
                  <p className="text-slate-400 mt-1 text-sm">{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Team CTA */}
        <section className="mt-24 max-w-4xl mx-auto text-center animate-fade-in-up">
          <h3 className="text-3xl font-bold mb-3 text-white">
            Meet Our Team
          </h3>
          <p className="text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Behind Peerlynk is a passionate group of developers, educators, and innovators 
            working together to connect campuses worldwide. Our team is dedicated to 
            building meaningful tools that empower students, teachers, and alumni 
            to learn, collaborate, and grow together.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <a
              href="/team"
              className="px-6 py-3 rounded-full border border-slate-700 text-slate-200 hover:text-white hover:border-brand-primary/60 transition-all duration-300"
            >
              Meet the Team
            </a>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-full bg-brand-primary text-black font-semibold hover:opacity-95 shadow-lg transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </section>

        {/* Footer tagline */}
        <footer className="mt-24 text-center text-slate-400 animate-fade-in-up">
          <p className="max-w-2xl mx-auto">
            Peerlynk — where academic life, mentorship, and career opportunity meet. 
            Built to help you learn, showcase, and connect.
          </p>
        </footer>
      </div>
    </section>
  );
};

export default AboutPage;
