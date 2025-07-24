import React from 'react';

const Bottom = () => {
  return (
    <footer className="hidden md:block w-full pt-4 px-4 text-sm text-gray-500 
      dark:text-gray-300 bg-neutral-100 dark:bg-neutral-900 border-t border-gray-200 dark:border-gray-700">
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 sm:gap-0 text-center sm:text-left">
        <div>
          © Adject, {new Date().getFullYear()}. All rights reserved.
        </div>
        <a href="#" className="hover:underline">
          Privacy Policy
        </a>
        <a href="#" className="hover:underline">
          Terms & Conditions
        </a>
        <a href="#" className="hover:underline">
          Cookie Policy
        </a>
        <a href="#" className="hover:underline">
          Cookie Settings
        </a>
      </div>
    </footer>
  );
};

export default Bottom;
