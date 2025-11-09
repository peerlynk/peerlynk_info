
import React from 'react';

const PricingPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-6xl">
          Our Pricing
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
          Peerlynk is free for all students, faculty, and alumni. We believe in accessible education and networking. Explore our features without any cost.
        </p>
         <div className="mt-16 p-8 bg-slate-100 dark:bg-gray-950 rounded-lg shadow-md max-w-md mx-auto">
          <h3 className="text-2xl font-semibold text-brand-primary dark:text-brand-secondary">Community Plan</h3>
          <p className="mt-2 text-5xl font-bold text-slate-900 dark:text-white">$0</p>
          <p className="mt-2 text-slate-600 dark:text-slate-400">Forever</p>
          <ul className="mt-6 space-y-2 text-left">
            <li className="flex items-center"><span className="text-green-500 mr-2">✔</span> Unlimited Connections</li>
            <li className="flex items-center"><span className="text-green-500 mr-2">✔</span> Access to Peerhub</li>
            <li className="flex items-center"><span className="text-green-500 mr-2">✔</span> LynkUp Messaging</li>
            <li className="flex items-center"><span className="text-green-500 mr-2">✔</span> Insight Feed</li>
          </ul>
        </div>
        <p className="mt-8 text-md text-slate-500 dark:text-slate-400">
          Institutional and enterprise plans with advanced analytics and administrative tools are coming soon. Contact us for more information.
        </p>
      </div>
    </div>
  );
};

export default PricingPage;