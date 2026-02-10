import React from 'react';
import { motion } from 'framer-motion';

interface DarkModeToggleProps {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}

const DarkModeToggle: React.FC<DarkModeToggleProps> = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 1.2 }}
      className="fixed bottom-6 left-6 z-50"
    >
      <div className={`flex items-center p-1 rounded-full ${
        isDarkMode 
          ? 'bg-gray-800 border border-gray-700' 
          : 'bg-gray-200 border border-gray-300'
      }`}>
        <motion.button
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
            isDarkMode
              ? 'bg-white text-gray-900'
              : 'text-gray-600'
          }`}
          onClick={() => setIsDarkMode(true)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Dark
        </motion.button>
        <motion.button
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
            !isDarkMode
              ? 'bg-gray-900 text-white'
              : 'text-gray-400'
          }`}
          onClick={() => setIsDarkMode(false)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Light
        </motion.button>
      </div>
    </motion.div>
  );
};

export default DarkModeToggle;
