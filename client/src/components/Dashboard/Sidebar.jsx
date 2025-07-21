import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  sidebarItems,
  bottomSidebarItems,
  mobileOnlyItems,
  socialMedia,
} from '../constants/data';

const Sidebar = () => {
  const location = useLocation();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const isActive = (current, path) => current === path;

  const navStyles = (active) =>
    `flex items-center gap-2 px-4 py-2 dark:text-white rounded-md font-medium hover:text-black
  transition-colors w-full ${active ? 'bg-gray-200 text-black ' : 'text-gray-700 hover:bg-gray-100'
    }`;

  const respStyles = (active) =>
    `flex flex-col text-xs items-center dark:hover:text-black
   dark:text-white  gap-1 px-3 py-2 rounded-md font-medium transition-colors w-full
    ${ active ? 'bg-gray-200 text-black' : 'text-gray-700 hover:bg-gray-100'}`;

    
  return (
    <main>
      {/* Desktop Sidebar */}
      <nav className="hidden md:flex flex-col w-64 bg-white dark:bg-neutral-900
         shadow-md dark:shadow-sky-500 rounded-lg fixed h-dvh p-6 justify-between dark:text-white">
        <div>
          <ul className="space-y-6">
            {sidebarItems.map(({ label, icon: Icon, path, className }) => (
              <li key={label}>
                <Link to={path} className={`${className ?? ''} ${navStyles(isActive(location.pathname, path))}`}>
                  <Icon size={20} />
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="border-t py-6 space-y-6">
            {bottomSidebarItems.map(({ label, icon: Icon, path }) => (
              <li key={label}>
                <Link to={path} className={navStyles(isActive(location.pathname, path))}>
                  <Icon size={20} />
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="border-t pt-6  ">
            {socialMedia.map(({ label, icon, link }) => (
              <li key={label} >
                <a href={link} target="_blank" className={`${navStyles(false)} mb-3`}
                 rel="noopener noreferrer" title={label}>
                  <img src={icon} alt={label} className="w-5 h-5" />
                  <span>{label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Toggle Button (bottom-right) */}
      <button
        className="fixed bottom-6 right-6 z-50 cursor-pointer bg-white p-3 rounded-full shadow-md md:hidden"
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        aria-label="Toggle mobile menu"
      >
        {isMobileOpen ? (
          // Close Icon
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          // Menu Icon
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
          </svg>
        )}
      </button>

      {/* Mobile Bottom Drawer (always rendered with slide animation) */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-40 bg-white dark:bg-neutral-900 dark:shadow-sky-200
          md:hidden rounded-t-3xl shadow-2xl shadow-gray-900 
           p-4 transition-transform duration-300 ease-in-out ${
          isMobileOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <nav className="bg-white dark:bg-neutral-900
         grid grid-cols-3 gap-3 items-center overflow-x-auto" aria-label="Mobile bottom menu">
          {[...mobileOnlyItems, ...socialMedia.map(({ label, icon, link }) => ({
            label,
            icon,
            path: link,
            isExternal: true,
          }))].map(({ label, icon, path, isExternal }) => {
            const Icon = typeof icon === 'string' ? null : icon;
            const active = isActive(location.pathname, path);
            return isExternal ? (
              <a
                key={label}
                href={path}
                target="_blank"
                rel="noopener noreferrer"
                className={respStyles(false)}
                title={label}
              >
                <img src={icon} alt={label} className="w-5 h-5" />
                <p>{label}</p>
              </a>
            ) : (
              <Link
                key={label}
                to={path}
                className={respStyles(active)}
                onClick={() => setIsMobileOpen(false)}
              >
                {Icon && <Icon size={20} />}
                <p>{label}</p>
              </Link>
            );
          })}
        </nav>
      </div>
    </main>
  );
};

export default Sidebar;
