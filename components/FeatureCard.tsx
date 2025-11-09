import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="group bg-slate-100 dark:bg-gray-950 p-6 rounded-lg shadow-lg dark:shadow-brand-primary/10 hover:shadow-xl hover:dark:shadow-brand-primary/20 hover:-translate-y-2 transition-all duration-300 border border-transparent dark:border-brand-primary/30 hover:dark:border-brand-primary/50">
      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-brand-primary/10 dark:bg-brand-secondary/10 text-brand-primary dark:text-brand-secondary mb-4 transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-12">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">{title}</h3>
      <p className="text-base text-slate-600 dark:text-slate-400">{description}</p>
    </div>
  );
};

export default FeatureCard;