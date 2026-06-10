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
            <p className="text-sm text-slate-500 mb-4 font-semibold">
              Last updated: {new Date().toLocaleString('default', { month: 'long' })} {new Date().getFullYear()}
            </p>

            <p className="text-slate-300 leading-relaxed">
              <strong>Peerlynk</strong> (“We”, “Our”, “Us”) is committed to safeguarding your privacy 
              and ensuring that your personal information is handled responsibly and securely. 
              This Privacy Policy outlines how we collect, use, store, and protect your data when you 
              use the Peerlynk mobile application (“App”) or website.
            </p>
          </div>

          {/* Sections Matrix */}
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
                    of your data and strive to maintain transparency and absolute trust.
                  </p>
                </>
              ),
            },
            {
              title: "2. Information We Collect",
              content: (
                <>
                  <p className="mb-2">We collect the following categories of data to provide our services:</p>
                  <ul className="list-disc list-inside text-slate-400 space-y-1">
                    <li>Personal details such as name, email address, academic role, institution, and contact configurations.</li>
                    <li>Account credentials including secure authentication keys, username, and system preferences.</li>
                    <li>Usage data like device IP addresses, operating system types, unique device identifiers, and platform access logs.</li>
                    <li>User-generated content (UGC) like feeds, project portfolio descriptions, chat communications, and comment tracks.</li>
                    <li>Technical metadata harvested securely via temporary cookies and essential performance analytics layers.</li>
                  </ul>
                </>
              ),
            },
            {
              title: "3. How We Use Your Information",
              content: (
                <>
                  <p>We process your metrics to:</p>
                  <ul className="list-disc list-inside text-slate-400 space-y-1 mt-2">
                    <li>Provide, maintain, and dynamically personalize your academic Peerlynk experience.</li>
                    <li>Enable core operational social utilities including continuous group-syncing, interactive feed delivery, and direct peer messaging.</li>
                    <li>Analyze platform performance to squash bugs and scale architectural capabilities.</li>
                    <li>Dispatch mandatory trust notifications, platform security updates, and critical system support logs.</li>
                    <li>Enforce community safety guidelines, preserve infrastructure sanity, and fulfill legal compliance bounds.</li>
                  </ul>
                </>
              ),
            },
            {
              title: "4. Disclosure of Information",
              content: (
                <>
                  <p>
                    We strictly maintain a zero-monetization policy on data; we never sell, lease, or distribute your personal metrics to third-party ad brokers. Your data is only processed via encrypted micro-service infrastructure pipelines under stringent confidentiality regulations.
                  </p>
                  <p className="mt-2">
                    We reserve the right to securely disclose data subsets if mandated explicitly by statutory judicial decree, local law enforcement frameworks, or national child security prevention agencies (such as NCMEC integration mandates).
                  </p>
                </>
              ),
            },
            {
              title: "5. Data Security",
              content: (
                <p>
                  We utilize industry-standard TLS/SSL transit encryption layer, securely compartmentalized database architectures, and rigid role-based access protocols. While we implement structural firewalls to safeguard data assets, no internet-facing architecture is absolutely ironclad. In the improbable event of an infrastructure threat, we guarantee clear user alerts within statutory timelines.
                </p>
              ),
            },
            {
              title: "6. Cookies",
              content: (
                <p>
                  Peerlynk deploys standard functional cookies to preserve user preferences, maintain state tokens, and map core analytics. You retain complete authority to block or flush state cookies through local browser profiles, though doing so might cause state validation glitches on certain web modules.
                </p>
              ),
            },
            {
              title: "7. Your Rights & Account Deletion Policy",
              content: (
                <>
                  <p>You possess complete rights to access, amend, modify, or restrict processing vectors of your personal metrics. Specifically:</p>
                  <ul className="list-disc list-inside text-slate-400 space-y-1 mt-2">
                    <li><strong>Right to Deletion:</strong> You have the absolute right to terminate your account and erase all associated digital footprints.</li>
                    <li>Users can trigger permanent account and data erasure instantly from within the Peerlynk Mobile App via <strong>Settings &gt; Account Control &gt; Delete Account</strong>.</li>
                    <li>Alternatively, users can submit an absolute deletion request externally through our dedicated web form system without reinstalling the app platform.</li>
                  </ul>
                  <p className="mt-4">
                    To invoke any privacy rights or coordinate manual data flushes, write directly to our automated processing gateway at{" "}
                    <a
                      href="mailto:admin@peerlynk.com"
                      className="text-brand-primary font-semibold hover:underline"
                    >
                      admin@peerlynk.com
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
                  Our web spaces might render structural references or links directing to outside domains. Peerlynk carries no governance or accountability over the data processing habits or terms of external publishers. We advise evaluating the privacy manifestoes of any external channels you access.
                </p>
              ),
            },
            {
              title: "9. Changes to This Policy",
              content: (
                <p>
                  We retain the sovereign authority to update our privacy frameworks to keep pace with changing compliance codes. Structural amendments will automatically go live upon being posted on this exact tracking route. Your active session status on Peerlynk past policy modifications implies agreement with the rewritten updates.
                </p>
              ),
            },
            {
              title: "10. Contact & Grievance Redressal",
              content: (
                <>
                  <p>
                    For queries, legal investigations, data security complaints, or compliance audits, direct your communication to our central processing desk:
                  </p>
                  <div className="mt-3 text-slate-400 space-y-1 bg-slate-900/40 p-4 rounded-xl border border-slate-900">
                    <p>
                      <strong>Operations Hub:</strong> Peerlynk Privacy & Trust Division
                    </p>
                    <p>
                      <strong>Email:</strong>{" "}
                      <a
                        href="mailto:admin@peerlynk.com"
                        className="text-brand-primary hover:underline font-semibold"
                      >
                        admin@peerlynk.com
                      </a>
                    </p>
                    <p>
                      <strong>Jurisdiction Core:</strong> Noida, Uttar Pradesh, India
                    </p>
                  </div>
                </>
              ),
            },
          ].map((section, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-gray-950 border border-slate-900 hover:border-brand-primary/40 hover:shadow-2xl hover:shadow-brand-primary/5 transition-all duration-300"
            >
              <h2 className="text-2xl font-semibold text-brand-primary mb-3">
                {section.title}
              </h2>
              <div className="text-slate-400 text-sm sm:text-base leading-relaxed">{section.content}</div>
            </div>
          ))}
        </section>

        {/* Footer tagline */}
        <footer className="mt-24 text-center text-slate-500 animate-fade-in-up text-sm border-t border-slate-900/60 pt-8">
          <p className="max-w-2xl mx-auto">
            Peerlynk Privacy Mesh &copy; {new Date().getFullYear()} — Empowering students, educators, and institutions through secure and connected learning.
          </p>
        </footer>
      </div>
    </section>
  );
};

export default PrivacyPage;