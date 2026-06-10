import React, { useState } from 'react';
import { Search, ChevronDown, ChevronUp, HelpCircle, Users, User, ShieldAlert, Key } from 'lucide-react';

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
    content: "Go to the signup page, select your role (Student, Educator, or Alumni), fill in your credentials, verify your official campus email, and you're ready to start using Peerlynk!"
  },
  {
    category: "Groups & Communities",
    title: "Understanding Auto-Groups (Peerhub)",
    description: "Learn how auto-grouping works and how to join groups based on your college, course, and interests.",
    content: "Once you provide your college, course, and batch info, Peerlynk automatically assigns you to relevant automated campus channels (Peerhub). You can also join custom interest groups or create your own."
  },
  {
    category: "Profile & Settings",
    title: "Editing Your Profile",
    description: "Customize your profile, add details about your academic achievements, and manage your privacy settings.",
    content: "Go to your profile workspace, click 'Edit Profile', update your structural information, profile assets, and granular privacy preferences. Save changes to update your institutional portfolio instantly."
  },
  {
    category: "Safety & Reporting",
    title: "Reporting Inappropriate Content",
    description: "Instructions for reporting posts, comments, or users to keep Peerlynk safe and respectful.",
    content: "Click the three-dot menu on the upper right corner of any post, comment, or profile. Select 'Report Content', describe the safety violation, and submit. Our moderation desk reviews these audits strictly within 24 hours."
  },
  {
    category: "Troubleshooting",
    title: "Resetting Your Password",
    description: "Forgot your password? Here’s how to reset it.",
    content: "Go to the centralized identity gateway login page, click 'Forgot Password', enter your registered email identifier, and follow the transactional recovery link sent to reset your credentials secure-key."
  }
];

const HelpCenterPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedTitle, setExpandedTitle] = useState<string | null>(null);

  const filteredArticles = helpArticles.filter(
    (article) =>
      article.category.toLowerCase().includes(searchQuery.toLowerCase()) || 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Helper function to render domain-specific category icons dynamically
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Getting Started": return <HelpCircle className="h-4 w-4 text-brand-primary" />;
      case "Groups & Communities": return <Users className="h-4 w-4 text-brand-secondary" />;
      case "Profile & Settings": return <User className="h-4 w-4 text-brand-primary" />;
      case "Safety & Reporting": return <ShieldAlert className="h-4 w-4 text-red-400" />;
      case "Troubleshooting": return <Key className="h-4 w-4 text-brand-secondary" />;
      default: return <HelpCircle className="h-4 w-4 text-brand-primary" />;
    }
  };

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
            Find technical answers, platform guides, and tutorials to help you leverage Peerlynk efficiently.
          </p>

          {/* Search Bar Wrapper */}
          <div className="mt-8 flex justify-center relative max-w-lg mx-auto">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-500" />
            </div>
            <input
              type="text"
              placeholder="Search help metrics, guides, channels..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-6 py-3.5 rounded-full bg-slate-900/80 text-white placeholder-slate-500 border border-slate-800/80 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all duration-300"
            />
          </div>
        </header>

        {/* Accordion Articles Section */}
        <section className="mt-16 max-w-3xl mx-auto space-y-4 animate-fade-in-up">
          {filteredArticles.length === 0 && (
            <div className="text-center py-12 bg-slate-950/40 rounded-2xl border border-slate-900">
              <p className="text-slate-400">No technical documentation or articles matches your search query.</p>
            </div>
          )}

          {filteredArticles.map((article, index) => {
            const isExpanded = expandedTitle === article.title;
            
            return (
              <div
                key={index}
                className={`p-5 rounded-2xl bg-gray-950 border transition-all duration-300 cursor-pointer ${
                  isExpanded 
                    ? 'border-brand-primary/40 shadow-2xl shadow-brand-primary/5' 
                    : 'border-slate-900 hover:border-slate-800 hover:bg-slate-900/20'
                }`}
                onClick={() => setExpandedTitle(isExpanded ? null : article.title)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 flex items-center justify-center bg-slate-900 rounded-xl border border-slate-800">
                      {getCategoryIcon(article.category)}
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">{article.category}</span>
                  </div>
                  {isExpanded ? (
                    <ChevronUp className="h-5 w-5 text-slate-400 transition-transform duration-200" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-slate-400 transition-transform duration-200" />
                  )}
                </div>

                <div className="mt-3">
                  <h3 className="text-lg font-semibold text-white">{article.title}</h3>
                  <p className="mt-1 text-slate-400 text-sm leading-relaxed">{article.description}</p>
                </div>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isExpanded ? 'max-h-[400px] mt-4 opacity-100 border-t border-slate-900 pt-4' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed bg-slate-900/40 p-4 rounded-xl border border-slate-900/60">
                    {article.content}
                  </p>
                </div>
              </div>
            );
          })}
        </section>

        {/* Support Redirection Card */}
        <section className="mt-24 text-center animate-fade-in-up">
          <h3 className="text-2xl sm:text-3xl font-bold mb-3 text-white">
            Still Need Help?
          </h3>
          <p className="text-slate-400 leading-relaxed max-w-xl mx-auto text-sm sm:text-base">
            Can't find the answers you're looking for? Reach out to our operational team instantly.
          </p>
          <div className="mt-8">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-brand-secondary text-black font-semibold hover:opacity-95 shadow-xl hover:scale-105 transition-all duration-300 text-sm"
            >
              Contact Support Desk
            </a>
          </div>
        </section>

        {/* Global Footer Statement */}
        <footer className="mt-24 text-center text-slate-500 animate-fade-in-up text-xs sm:text-sm border-t border-slate-900/60 pt-8">
          <p className="max-w-2xl mx-auto">
            Peerlynk System Documentation &copy; {new Date().getFullYear()} — Engineering global academic communication.
          </p>
        </footer>
      </div>
    </section>
  );
};

export default HelpCenterPage;