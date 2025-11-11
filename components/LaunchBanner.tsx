import React, { useState, useEffect } from "react";

interface LaunchBannerProps {
  message?: string;
  launchMonth?: string;
  persistent?: boolean; // if true, hides permanently after close (using localStorage)
}

const LaunchBanner: React.FC<LaunchBannerProps> = ({
  message = "📱 Mobile application launching soon — get ready to experience learning like never before!",
  launchMonth = "November 2025",
  persistent = true,
}) => {
  const storageKey = "peerlynk_banner_closed";
  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    if (persistent) {
      const isClosed = localStorage.getItem(storageKey);
      if (isClosed === "true") setShowBanner(false);
    }
  }, [persistent]);

  const handleClose = () => {
    setShowBanner(false);
    if (persistent) localStorage.setItem(storageKey, "true");
  };

  if (!showBanner) return null;

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-brand-primary to-brand-secondary text-white py-3 px-6 flex items-center justify-between shadow-lg animate-fade-in-down">
      <p className="text-sm sm:text-base font-medium">
        📱 Mobile application launching in{" "}
        <span className="font-semibold">{launchMonth}</span> — get ready to
        experience learning like never before!
      </p>
      <button
        onClick={handleClose}
        className="ml-4 text-white hover:text-gray-200 transition"
        aria-label="Close banner"
      >
        ✕
      </button>

      <style>
        {`
          @keyframes fadeInDown {
            0% { opacity: 0; transform: translateY(-20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in-down {
            animation: fadeInDown 0.6s ease forwards;
          }
        `}
      </style>
    </div>
  );
};

export default LaunchBanner;
