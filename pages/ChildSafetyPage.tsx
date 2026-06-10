import React from "react";

const ChildSafetyPage: React.FC = () => {
  const sections = [
    {
      title: "1. Zero-Tolerance Against CSAE & CSAM",
      desc: "Peerlynk maintains a strict, zero-tolerance policy against Child Sexual Abuse Material (CSAM) and Child Sexual Abuse and Exploitation (CSAE). Any user who attempts to create, upload, share, or transmit content that exploits, harms, or threatens minors will face immediate, permanent account suspension.",
    },
    {
      title: "2. Compliance with Global Child Safety Laws",
      desc: "In accordance with global child safety laws and Google Play regulations, Peerlynk actively cooperates with law enforcement. Any instances of CSAE/CSAM detected on our network will be immediately preserved and reported to national and regional authorities, including the National Center for Missing & Exploited Children (NCMEC).",
    },
    {
      title: "3. In-App Reporting & Feedback Mechanisms",
      desc: "To ensure a secure digital campus, Peerlynk provides prominent, easy-to-use in-app reporting tools on every user profile and post. Users can flag suspicious behavior or safety concerns instantly. Our moderation team reviews child safety reports with the highest priority within 24 hours.",
    },
    {
      title: "4. Proactive Content Moderation",
      desc: "We employ automated screening filters alongside human moderation teams to review and prevent inappropriate material from spreading on the platform. We are dedicated to keeping our academic environment clean, safe, and respectful for all students.",
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-950 to-black text-slate-100 py-20 px-6 sm:px-10 lg:px-20">
      {/* Header - Matching Peerlynk's Core Design System */}
      <header className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-red-500 via-orange-400 to-red-600 text-transparent bg-clip-text">
          Child Safety Standards
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed">
          At <strong>Peerlynk</strong>, keeping our store listing and academic network safe from exploitation is a core commitment. Review our strict policies, compliance mechanisms, and designated safety points of contact below.
        </p>
      </header>

      {/* Compliance Cards */}
      <div className="mt-16 max-w-4xl mx-auto space-y-8">
        {sections.map((sec, i) => (
          <div
            key={i}
            className="bg-slate-950/60 border border-slate-800 rounded-2xl p-8 shadow-md hover:border-red-500/30 transition-all duration-300"
          >
            <h2 className="text-2xl font-semibold text-white mb-3">
              {sec.title}
            </h2>
            <p className="text-slate-400 leading-relaxed">{sec.desc}</p>
          </div>
        ))}

        {/* Google Mandated Point of Contact Block */}
        <div className="bg-red-950/20 border border-red-900 rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-semibold text-white mb-3">
            5. Designated Child Safety Point of Contact
          </h2>
          <p className="text-slate-400 leading-relaxed mb-6">
            We have a dedicated trust and safety infrastructure to answer inquiries regarding our CSAM prevention practices, legal compliance, and community safety reporting.
          </p>
          <div className="space-y-3 text-slate-300 bg-slate-950 p-6 rounded-xl border border-slate-800">
            <p><strong>Safety Team:</strong> Peerlynk Trust & Safety Department</p>
            <p><strong>Designated Officer:</strong> Dhruv Pal (Founder)</p>
            <p><strong>Contact Email:</strong> <a href="mailto:admin@peerlynk.com" className="text-red-400 hover:underline">admin@peerlynk.com</a></p>
          </div>
        </div>
      </div>

      {/* Footer Divider */}
      <div className="max-w-5xl mx-auto border-t border-slate-800 mt-20 mb-12 opacity-60" />

      {/* Institutional Note */}
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-slate-400 text-sm leading-relaxed">
          Peerlynk (com.peerlynk.network) closely follows global norms on child safety standards and the Tech Coalition’s best practices for combating online CSEA.
        </p>
        <p className="mt-6 text-slate-500 italic text-xs">
          Last Updated: {new Date().toLocaleString('default', { month: 'long' })} {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
};

export default ChildSafetyPage;