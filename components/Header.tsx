import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { MenuIcon, CloseIcon, PlayStoreIcon, ChevronDownIcon } from './IconComponents';

const mainNavLinks = [
  { name: 'Home', path: '/', isExternal: false },
  { name: 'Who We Are', path: '/about', isExternal: false },
  { name: 'Features', path: '/#features', isExternal: false },
];

const resourcesDropdownLinks = [
  { name: 'FAQ', path: '/faq' },
  { name: 'Community', path: '/community' },
];

const moreDropdownLinks = [
  { name: 'Contact Us', path: '/contact', isExternal: false },
  { name: 'Careers', path: 'https://career.peerlynk.com', isExternal: true },
  { name: 'Peerlynk Labs', path: 'https://labs.peerlynk.com', isExternal: true },
  { name: 'Founder', path: 'https://founder.peerlynk.com', isExternal: true },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);
  const [isResourcesMenuOpen, setIsResourcesMenuOpen] = useState(false);
  const location = useLocation();
  const moreMenuRef = useRef<HTMLDivElement>(null);
  const resourcesMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsMoreMenuOpen(false);
    setIsResourcesMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (moreMenuRef.current && !moreMenuRef.current.contains(event.target as Node)) {
        setIsMoreMenuOpen(false);
      }
      if (resourcesMenuRef.current && !resourcesMenuRef.current.contains(event.target as Node)) {
        setIsResourcesMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const NavLinkItem: React.FC<{ path: string; name: string; isMobile?: boolean; isExternal?: boolean }> = ({ path, name, isMobile = false, isExternal = false }) => {
    const baseClasses = "font-medium transition-colors hover:text-brand-primary dark:hover:text-brand-secondary text-slate-700 dark:text-slate-300";
    const mobileClasses = "block text-lg py-3";
    const desktopClasses = "text-xl";

    if (isExternal) {
      return (
        <a 
          href={path} 
          target="_blank" 
          rel="noopener noreferrer" 
          className={`${baseClasses} ${isMobile ? mobileClasses : desktopClasses}`}
        >
          {name}
        </a>
      );
    }

    return (
      <NavLink 
        to={path} 
        className={({ isActive }) => `${baseClasses} ${isMobile ? mobileClasses : desktopClasses} ${isActive && !path.startsWith('/#') ? 'text-brand-primary dark:text-brand-secondary' : ''}`}
      >
        {name}
      </NavLink>
    );
  };

  return (
    <>
      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-30 w-[95%] max-w-screen-xl bg-white/5 backdrop-blur-lg border border-slate-200/10 rounded-full shadow-xl">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between">
            <div className="flex-shrink-0">
              <NavLink to="/" className="flex items-center" aria-label="Peerlynk Homepage">
                <span className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-brand-primary to-brand-secondary text-transparent bg-clip-text">
                  Peerlynk
                </span>
              </NavLink>
            </div>

            <nav className="hidden lg:flex items-center space-x-10">
              {mainNavLinks.map(link => <NavLinkItem key={link.name} {...link} />)}

              {/* Resources Dropdown */}
              <div className="relative" ref={resourcesMenuRef}>
                <button
                  onClick={() => setIsResourcesMenuOpen(!isResourcesMenuOpen)}
                  className="flex items-center space-x-1 text-xl font-medium text-slate-200 hover:text-brand-secondary transition-all duration-300"
                >
                  <span>Resources</span>
                  <ChevronDownIcon className={`h-5 w-5 transition-transform duration-300 ${isResourcesMenuOpen ? "rotate-180" : ""}`} />
                </button>

                <div className={`absolute top-full mt-3 w-56 backdrop-blur-md bg-black/50 border border-purple-600/40 rounded-xl shadow-xl overflow-hidden transform transition-all duration-300 ${isResourcesMenuOpen ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"}`}>
                  {resourcesDropdownLinks.map((link) => (
                    <NavLink
                      key={link.name}
                      to={link.path}
                      className={({ isActive }) => `block px-5 py-3 text-sm font-medium transition-all ${isActive ? "text-purple-400 bg-purple-950/30" : "text-slate-200 hover:bg-purple-900/40"}`}
                    >
                      {link.name}
                    </NavLink>
                  ))}
                </div>
              </div>

              {/* More Dropdown */}
              <div className="relative" ref={moreMenuRef}>
                <button
                  onClick={() => setIsMoreMenuOpen(!isMoreMenuOpen)}
                  className="flex items-center space-x-1 text-xl font-medium text-slate-200 hover:text-brand-secondary transition-all duration-300"
                >
                  <span>More</span>
                  <ChevronDownIcon className={`h-5 w-5 transition-transform duration-300 ${isMoreMenuOpen ? "rotate-180" : ""}`} />
                </button>

                <div className={`absolute top-full mt-3 w-56 backdrop-blur-md bg-black/50 border border-purple-600/40 rounded-xl shadow-xl overflow-hidden transform transition-all duration-300 ${isMoreMenuOpen ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"}`}>
                  {moreDropdownLinks.map((link) => (
                    link.isExternal ? (
                      <a key={link.name} href={link.path} target="_blank" rel="noopener noreferrer" className="block px-5 py-3 text-sm font-medium text-slate-200 hover:bg-purple-900/40 transition-all">
                        {link.name}
                      </a>
                    ) : (
                      <NavLink key={link.name} to={link.path} className={({ isActive }) => `block px-5 py-3 text-sm font-medium transition-all ${isActive ? "text-purple-400 bg-purple-950/30" : "text-slate-200 hover:bg-purple-900/40"}`}>
                        {link.name}
                      </NavLink>
                    )
                  ))}
                </div>
              </div>
            </nav>

            <div className="flex items-center space-x-2">
              <div className="hidden sm:flex items-center space-x-2">
                <a
                  href="https://play.google.com/store/apps/details?id=com.peerlynk.network"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-white text-slate-900 px-5 py-2.5 rounded-full hover:opacity-90 transition-all duration-300 text-base font-semibold shadow-md transform hover:scale-105"
                >
                  <PlayStoreIcon className="h-6 w-6" />
                  <span>Download App</span>
                </a>
              </div>
              <div className="lg:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-slate-500 hover:bg-slate-800"
                >
                  <MenuIcon className="block h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <div className={`fixed inset-0 z-40 transform transition-transform duration-300 ease-in-out lg:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="absolute inset-0 bg-black/40" onClick={() => setIsMenuOpen(false)}></div>
        <div className="relative z-50 flex flex-col h-full w-80 max-w-[calc(100%-3rem)] ml-auto bg-gray-950 p-6 border-l border-slate-900">
          <div className="absolute top-4 right-4">
            <button onClick={() => setIsMenuOpen(false)} className="p-2 text-slate-400 hover:bg-slate-800 rounded-md">
              <CloseIcon className="block h-6 w-6" />
            </button>
          </div>
          <nav className="flex flex-col space-y-2 mt-10 flex-grow">
            {mainNavLinks.map(link => <NavLinkItem key={link.name} {...link} isMobile />)}
            {resourcesDropdownLinks.map(link => <NavLinkItem key={link.name} {...link} isMobile />)}
            {moreDropdownLinks.map(link => <NavLinkItem key={link.name} {...link} isMobile />)}
          </nav>
          <div className="mt-auto pt-6 border-t border-slate-800">
            <a href="https://play.google.com/store/apps/details?id=com.peerlynk.network" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-2 bg-white text-slate-900 px-4 py-3 rounded-lg font-semibold">
              <PlayStoreIcon className="h-6 w-6" />
              <span>Download App</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;