import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface CookieNoticeProps {
  isDarkMode: boolean;
}

const CookieNotice: React.FC<CookieNoticeProps> = ({ isDarkMode }) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 1.4 }}
      exit={{ y: 100, opacity: 0 }}
      className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50"
    >
      <div className={`px-6 py-3 rounded-full backdrop-blur-md ${
        isDarkMode
          ? 'bg-gray-900/70 border border-gray-800'
          : 'bg-white/70 border border-gray-200'
      } shadow-2xl`}>
        <div className="flex items-center space-x-4">
          <span className={`text-sm ${
            isDarkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            This website uses cookies
          </span>
          <motion.button
            className={`px-4 py-1 rounded-full text-sm font-medium flex items-center space-x-1 ${
              isDarkMode
                ? 'bg-white text-gray-900 hover:bg-gray-100'
                : 'bg-gray-900 text-white hover:bg-gray-800'
            }`}
            onClick={() => setIsVisible(false)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Accept</span>
            <span>→</span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default CookieNotice;
