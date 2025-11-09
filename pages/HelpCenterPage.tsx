import React, { useState } from 'react';

interface Article {
  category: string;
  title: string;
  description: string;
  content: string;
}

const helpArticles: Article[] = [
  {
    category: "Getting Started",
    title: "Creating Your Peerlynk Account",
    description: "Step-by-step guide to create your account as a student, teacher, or college.",
    content: "Go to the signup page, select your role, fill in your details, verify your email, and you're ready to start using Peerlynk!"
  },
  {
    category: "Groups & Communities",
    title: "Understanding Auto-Groups (Peerhub)",
    description: "Learn how auto-grouping works and how to join groups based on your college, course, and interests.",
    content: "Once you provide your college, course, and batch info, Peerlynk automatically assigns you to relevant Peerhub. You can also join manual groups or create your own."
  },
  {
    category: "Profile & Settings",
    title: "Editing Your Profile",
    description: "Customize your profile, add details about your academic achievements, and manage your privacy settings.",
    content: "Go to your profile page, click 'Edit Profile', update your information, profile picture, and privacy preferences. Save changes to update your profile."
  },
  {
    category: "Safety & Reporting",
    title: "Reporting Inappropriate Content",
    description: "Instructions for reporting posts, comments, or users to keep Peerlynk safe and respectful.",
    content: "Click the three-dot menu on the post, comment, or profile you want to report. Select 'Report', describe the issue, and submit. Our moderation team will review it."
  },
  {
    category: "Troubleshooting",
    title: "Resetting Your Password",
    description: "Forgot your password? Here’s how to reset it.",
    content: "Go to the login page, click 'Forgot Password', enter your registered email, and follow the link sent to reset your password."
    
  }
];

const HelpCenterPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const filteredArticles = helpArticles.filter(
    (article) =>article.category.toLowerCase().includes(searchQuery.toLowerCase()) || 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
   <section className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black text-white relative overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-32 left-1/4 w-96 h-96 bg-brand-primary/10 blur-3xl rounded-full" />
        <div className="absolute bottom-32 right-1/4 w-96 h-96 bg-brand-secondary/10 blur-3xl rounded-full" />
      </div>

      <div className="container mx-auto px-6 lg:px-20 py-20">
        {/* Header */}
        <header className="text-center max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-brand-primary to-brand-secondary text-transparent bg-clip-text">
            Help Center
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed">
            Find answers, guides, and tutorials to help you make the most of Peerlynk.
            Can't find what you need? Contact our support team anytime.
          </p>

          {/* Search Bar */}
          <div className="mt-8 flex justify-center">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full max-w-lg px-4 py-3 rounded-full bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all duration-300"
            />
          </div>
        </header>

        {/* Articles */}
        <section className="mt-20 max-w-5xl mx-auto space-y-6 animate-fade-in-up">
          {filteredArticles.length === 0 && (
            <p className="text-slate-400 text-center">No articles found for your search.</p>
          )}

          {filteredArticles.map((article, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-gray-950 border border-slate-800 flex flex-col cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-brand-primary/20"
              onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
            >
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-8 h-8 flex items-center justify-center bg-gray-800 rounded-full">
                  {/* {article.icon} */}
                </div>
                <p className="text-sm font-semibold text-brand-secondary">{article.category}</p>
              </div>
              <h3 className="text-lg font-semibold text-white">{article.title}</h3>
              <p className="mt-1 text-slate-400">{article.description}</p>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedIndex === index ? 'max-h-96 mt-4' : 'max-h-0'}`}
              >
                <p className="text-slate-300">{article.content}</p>
              </div>
            </div>
          ))}
        </section>

        {/* Contact Support CTA */}
        <section className="mt-24 text-center animate-fade-in-up">
          <h3 className="text-3xl font-bold mb-3 text-white">
            Still Need Help?
          </h3>
          <p className="text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Contact our support team for any issues or questions related to your Peerlynk experience.
          </p>
          <div className="mt-8">
            <a
              href="/contact"
              className="px-8 py-3 rounded-full bg-brand-secondary text-black font-semibold hover:opacity-95 shadow-lg transition-all duration-300"
            >
              Contact Support
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-24 text-center text-slate-400 animate-fade-in-up">
          <p className="max-w-2xl mx-auto">
            Peerlynk — empowering students, teachers, and colleges to connect, collaborate, and grow.
          </p>
        </footer>
      </div>
    </section>
  );
};

export default HelpCenterPage;


