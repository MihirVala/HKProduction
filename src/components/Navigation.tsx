import React from 'react';
import { motion } from 'framer-motion';

interface NavigationProps {
  isDarkMode: boolean;
}

const Navigation: React.FC<NavigationProps> = ({ isDarkMode }) => {
  const navItems = ['Home', 'Gallery', 'Services', 'Pricing', 'About'];

  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId.toLowerCase().replace(' ', '-'));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="fixed top-6 right-12 z-50"
    >
      <div className={`px-8 py-3 rounded-full backdrop-blur-md ${
        isDarkMode 
          ? 'bg-gray-900/70 border border-gray-800' 
          : 'bg-white/70 border border-gray-200'
      } shadow-2xl`}>
        <div className="flex items-center space-x-4 md:space-x-8">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className={`w-5 h-5 md:w-6 md:h-6 border-2 ${
              isDarkMode ? 'border-white' : 'border-gray-800'
            } transform rotate-45`}></div>
            <span className={`font-bold text-xs md:text-sm ${
              isDarkMode ? 'text-white' : 'text-gray-800'
            }`}>LensCraft</span>
          </div>

          {/* Menu Items */}
          <div className="hidden md:flex items-center space-x-4 md:space-x-6">
            {navItems.map((item, index) => (
              <motion.button
                key={item}
                onClick={() => handleNavClick(item)}
                className={`text-xs md:text-sm font-medium transition-colors duration-200 ${
                  isDarkMode 
                    ? 'text-gray-300 hover:text-white' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.button>
            ))}
          </div>

          {/* Register Button */}
          <motion.button
            className={`px-3 py-1 md:px-4 md:py-1.5 rounded-full text-xs md:text-sm font-medium transition-colors duration-200 ${
              isDarkMode
                ? 'bg-white text-gray-900 hover:bg-gray-100'
                : 'bg-gray-900 text-white hover:bg-gray-800'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleNavClick('Contact')}
          >
            Contact
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
