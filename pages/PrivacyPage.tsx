import React from "react";

const PrivacyPage: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-black via-gray-950 to-black text-white py-20 px-6 sm:px-10 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-32 left-1/4 w-96 h-96 bg-brand-primary/10 blur-3xl rounded-full" />
        <div className="absolute bottom-32 right-1/4 w-96 h-96 bg-brand-secondary/10 blur-3xl rounded-full" />
      </div>

      <div className="container mx-auto lg:px-20">
        {/* Header */}
        <header className="text-center max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-brand-primary to-brand-secondary text-transparent bg-clip-text">
            Privacy Policy
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed">
            This Privacy Policy explains how <strong>Peerlynk</strong> (“we”, “us”, or “our”) 
            collects, uses, discloses, and safeguards your information when you use our platform, website, 
            and mobile application. By accessing or using Peerlynk, you agree to the terms described herein.
          </p>
        </header>

        {/* Content Section */}
        <section className="mt-16 max-w-4xl mx-auto space-y-8 animate-fade-in-up">
          <div className="p-8 rounded-2xl bg-gray-950 border border-slate-800 hover:border-brand-primary/40 hover:shadow-lg hover:shadow-brand-primary/10 transition-all duration-300 backdrop-blur-lg">
            <p className="text-sm text-slate-500 mb-4">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <p>
              <strong>Peerlynk</strong> (“We”, “Our”, “Us”) is committed to safeguarding your privacy 
              and ensuring that your personal information is handled responsibly and securely. 
              This Privacy Policy outlines how we collect, use, store, and protect your data when you 
              use the Peerlynk mobile application (“App”) or website.
            </p>
          </div>

          {/* Sections */}
          {[
            {
              title: "1. Introduction",
              content: (
                <>
                  <p>
                    By using Peerlynk, you consent to the collection and use of your personal 
                    information in accordance with this Privacy Policy. If you do not agree, 
                    please refrain from using our services.
                  </p>
                  <p className="mt-2">
                    Peerlynk is designed to connect students, teachers, alumni, and institutions 
                    for professional collaboration and learning. We understand the sensitivity 
                    of your data and strive to maintain transparency and trust.
                  </p>
                </>
              ),
            },
            {
              title: "2. Information We Collect",
              content: (
                <>
                  <ul className="list-disc list-inside text-slate-400 space-y-1">
                    <li>Personal details such as name, email, role, institution, and contact number</li>
                    <li>Account data such as username, password, and preferences</li>
                    <li>Usage data like IP address, device type, OS, browser, and access times</li>
                    <li>Content data like posts, comments, messages, and profile details</li>
                    <li>Technical information collected via cookies and analytics tools</li>
                  </ul>
                </>
              ),
            },
            {
              title: "3. How We Use Your Information",
              content: (
                <>
                  <p>We use your data to:</p>
                  <ul className="list-disc list-inside text-slate-400 space-y-1">
                    <li>Provide and personalize your Peerlynk experience</li>
                    <li>Enable core platform features such as messaging, posting, and grouping</li>
                    <li>Improve our services through analytics and user feedback</li>
                    <li>Communicate with you regarding support, security, or promotional updates</li>
                    <li>Comply with legal requirements and maintain platform safety</li>
                  </ul>
                </>
              ),
            },
            {
              title: "4. Disclosure of Information",
              content: (
                <>
                  <p>
                    We do not sell or rent your personal data. However, your information may be 
                    shared with trusted third-party service providers who assist in operating 
                    the platform under strict confidentiality agreements.
                  </p>
                  <p className="mt-2">
                    We may also disclose your information when required by law, legal process, 
                    or government request, or to protect Peerlynk’s rights and users’ safety.
                  </p>
                </>
              ),
            },
            {
              title: "5. Data Security",
              content: (
                <p>
                  We adopt industry-standard encryption, secure servers, and restricted 
                  access protocols to protect your information. Despite our best efforts, 
                  no data transmission over the internet can be guaranteed as fully secure. 
                  In case of a data breach, we will promptly inform affected users as required by law.
                </p>
              ),
            },
            {
              title: "6. Cookies",
              content: (
                <p>
                  Peerlynk uses cookies to analyze traffic, remember preferences, and enhance 
                  user experience. You can choose to disable cookies via browser settings, 
                  but this may affect certain functionalities of the platform.
                </p>
              ),
            },
            {
              title: "7. Your Rights",
              content: (
                <>
                  <p>You have the right to:</p>
                  <ul className="list-disc list-inside text-slate-400 space-y-1 mt-2">
                    <li>Access and update your personal data</li>
                    <li>Request deletion of your account and information</li>
                    <li>Withdraw consent for data processing at any time</li>
                    <li>Request clarification or a copy of stored information</li>
                  </ul>
                  <p className="mt-2">
                    To exercise these rights, contact us at{" "}
                    <a
                      href="mailto:peerlynk@gmail.com"
                      className="text-brand-primary hover:underline"
                    >
                      peerlynk@gmail.com
                    </a>
                    .
                  </p>
                </>
              ),
            },
            {
              title: "8. Third-Party Links",
              content: (
                <p>
                  Peerlynk may contain links to third-party websites or services. We are not 
                  responsible for their privacy practices, and we encourage you to review 
                  the policies of any external sites you visit.
                </p>
              ),
            },
            {
              title: "9. Changes to This Policy",
              content: (
                <p>
                  Peerlynk reserves the right to update this Privacy Policy at any time. 
                  Changes will be posted on this page, and your continued use of the platform 
                  constitutes acceptance of the updated terms.
                </p>
              ),
            },
            {
              title: "10. Contact & Grievance Redressal",
              content: (
                <>
                  <p>
                    If you have any questions, concerns, or complaints about our Privacy Policy 
                    or data handling, you may reach out to our Grievance Officer:
                  </p>
                  <div className="mt-3 text-slate-400">
                    {/* <p>
                      <strong>Name:</strong> Peerlynk Data Protection Officer
                    </p> */}
                    <p>
                      <strong>Email:</strong>{" "}
                      <a
                        href="mailto:peerlynk@gmail.com"
                        className="text-brand-primary hover:underline"
                      >
                        peerlynk@gmail.com
                      </a>
                    </p>
                    <p>
                      <strong>Address:</strong> Noida, Uttar Pradesh, India
                    </p>
                  </div>
                </>
              ),
            },
          ].map((section, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-gray-950 border border-slate-800 hover:border-brand-primary/40 hover:shadow-lg hover:shadow-brand-primary/10 transition-all duration-300"
            >
              <h2 className="text-2xl font-semibold text-brand-primary mb-3">
                {section.title}
              </h2>
              <div className="text-slate-400 leading-relaxed">{section.content}</div>
            </div>
          ))}
        </section>

        {/* Footer tagline */}
        <footer className="mt-24 text-center text-slate-400 animate-fade-in-up">
          <p className="max-w-2xl mx-auto">
            Peerlynk — empowering students, educators, and institutions through secure and connected learning.
          </p>
        </footer>
      </div>
    </section>
  );
};

export default PrivacyPage;
