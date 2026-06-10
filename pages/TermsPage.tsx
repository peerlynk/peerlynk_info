import React from "react";

interface TermSection {
  title: string;
  content: string;
  list?: (string | React.ReactNode)[];
}

const TermsPage: React.FC = () => {
  const terms: TermSection[] = [
    {
      title: "1. Introduction",
      content: `This document is an electronic record in terms of the Information Technology Act, 2000 and the rules thereunder. It does not require any physical or digital signatures. It is published in accordance with Rule 3(1) of the Information Technology (Intermediaries Guidelines) Rules, 2011, requiring publication of the rules, regulations, privacy policy, and Terms of Use for access or usage of https://peerlynk.com (hereinafter referred to as the "Platform").`
    },
    {
      title: "2. Platform Ownership",
      content: `The Platform is owned and operated by Peerlynk Technologies Private Limited, a company incorporated under the Companies Act, 2013, with its registered office at Noida, Uttar Pradesh, India (hereinafter referred to as "Peerlynk", "we", "us", or "our"). Your use of the Platform and related services constitutes a binding agreement with Peerlynk under these Terms.`
    },
    {
      title: "3. Acceptance of Terms",
      content: `By accessing, browsing, or otherwise using the Platform, you agree to comply with and be bound by these Terms of Use. If you do not agree, you must discontinue use immediately. Peerlynk reserves the right to modify or amend these Terms at any time without prior notice. Continued use after modifications implies your acceptance of the revised Terms.`
    },
    {
      title: "4. Eligibility",
      content: `Use of this Platform is permitted only for individuals who can form legally binding contracts under the Indian Contract Act, 1872. Users under 18 years may access the Platform under the supervision of a parent or guardian who agrees to these Terms.`
    },
    {
      title: "5. Account Registration and Responsibilities",
      content: `To access certain features, you may be required to register an account. You agree to:`,
      list: [
        "Provide accurate, current, and complete information during registration.",
        "Maintain confidentiality of your login credentials.",
        "Be responsible for all activities conducted under your account.",
        "Inform Peerlynk immediately of any unauthorized use or breach."
      ]
    },
    {
      title: "6. Use of Platform and Conduct",
      content: `Peerlynk is a professional academic network for students, teachers, colleges, and alumni. You agree not to:`,
      list: [
        "Use the Platform for illegal, harmful, or unethical activities.",
        "Post content that is abusive, misleading, or infringes upon rights.",
        "Upload malware, spam, or use automated scripts or bots.",
        "Violate intellectual property or community guidelines."
      ]
    },
    {
      title: "7. Content Ownership",
      content: `All Platform materials including text, graphics, logos, and designs are owned by Peerlynk or its licensors. You may not reproduce, modify, distribute, or use any material without written consent. By uploading content, you grant Peerlynk a non-exclusive, royalty-free, worldwide license to use and display such content for operational purposes.`
    },
    {
      title: "8. Premium Services",
      content: `Peerlynk may offer premium or paid services. All payments are final and non-refundable. Peerlynk does not guarantee specific outcomes or opportunities through paid features. Use paid services at your sole discretion. For billing issues, contact admin@peerlynk.com.`
    },
    {
      title: "9. Privacy and Data Protection",
      content: `Your privacy is important to us. By using Peerlynk, you consent to our collection and use of your personal data as outlined in our Privacy Policy. Please review it to understand your rights and our practices.`
    },
    {
      title: "10. Third-Party Links",
      content: `Peerlynk may contain links to external websites or services. We are not responsible for the content, privacy, or policies of third-party platforms. Accessing such links is at your own risk.`
    },
    {
      title: "11. Disclaimer of Warranties",
      content: `The Platform and all services are provided “as is” and “as available.” Peerlynk makes no warranties regarding accuracy, reliability, or uninterrupted availability. Your use of Peerlynk is solely at your own risk.`
    },
    {
      title: "12. Limitation of Liability",
      content: `In no event shall Peerlynk or its affiliates be liable for indirect, incidental, or consequential damages arising from use of the Platform. We are not responsible for data loss, unauthorized access, or interruption of service.`
    },
    {
      title: "13. Indemnification",
      content: `You agree to indemnify and hold harmless Peerlynk, its officers, employees, and affiliates against any claims, losses, or damages resulting from your misuse of the Platform or violation of these Terms.`
    },
    {
      title: "14. Force Majeure",
      content: `Peerlynk shall not be liable for failure to perform its obligations due to circumstances beyond its reasonable control, including natural disasters, technical failures, or government restrictions.`
    },
    {
      title: "15. Governing Law and Jurisdiction",
      content: `These Terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts located in Noida, Uttar Pradesh, India.`
    },
    {
      title: "16. Contact Information",
      content: `For any queries or concerns regarding these Terms, please contact us at:`,
      list: [
        <span key="email">
          Email:{" "}
          <a
            href="mailto:admin@peerlynk.com"
            className="text-brand-primary font-semibold hover:underline"
          >
            admin@peerlynk.com
          </a>
        </span>,
        <span key="address">
          Address: Peerlynk Technologies Private Limited, Noida, Uttar Pradesh, India.
        </span>
      ]
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black text-white relative overflow-hidden py-20 px-6 lg:px-20">
      {/* Background Glows */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-32 left-1/4 w-96 h-96 bg-brand-primary/10 blur-3xl rounded-full" />
        <div className="absolute bottom-32 right-1/4 w-96 h-96 bg-brand-secondary/10 blur-3xl rounded-full" />
      </div>

      {/* Header */}
      <header className="text-center max-w-4xl mx-auto animate-fade-in-up">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-brand-primary to-brand-secondary text-transparent bg-clip-text">
          Terms and Conditions
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed">
          Please read these Terms and Conditions carefully before using Peerlynk. By accessing or using the platform, you agree to be bound by these terms.
        </p>
      </header>

      {/* Terms Section */}
      <section className="mt-16 max-w-4xl mx-auto space-y-10 animate-fade-in-up">
        {terms.map((term, i) => (
          <div
            key={i}
            className="p-6 rounded-2xl bg-gray-950 border border-slate-900 hover:border-brand-primary/40 hover:shadow-2xl hover:shadow-brand-primary/5 transition-all duration-300"
          >
            <h2 className="text-2xl font-semibold text-brand-primary mb-3.5">{term.title}</h2>
            <p className="text-slate-400 leading-relaxed mb-3 text-sm sm:text-base">{term.content}</p>
            {term.list && (
              <ul className="list-disc list-inside text-slate-400 space-y-1.5 text-sm sm:text-base pl-1">
                {term.list.map((item, idx) => (
                  <li key={idx} className="marker:text-brand-primary/60">{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}

        <p className="text-slate-500 text-center mt-12 text-sm max-w-2xl mx-auto leading-relaxed border-t border-slate-900/60 pt-8">
          Violation of these Terms may result in account restrictions, content removal, or termination. Help us keep Peerlynk a respectful, secure, and professional platform for all users.
        </p>
      </section>
    </section>
  );
};

export default TermsPage;