import React from 'react';
import { motion } from 'framer-motion';

interface ScrollIndicatorProps {
  isDarkMode: boolean;
}

const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({ isDarkMode }) => {
  const handleScrollMore = () => {
    const nextSection = document.getElementById('services');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 1.6 }}
      className="fixed bottom-6 right-24 z-50"
    >
      <motion.button
        onClick={handleScrollMore}
        className={`flex flex-col items-center space-y-2 ${
          isDarkMode ? 'text-gray-400' : 'text-gray-600'
        }`}
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <span className="text-sm font-medium">Scroll for more</span>
        <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center ${
          isDarkMode ? 'border-gray-600' : 'border-gray-400'
        }`}>
          <motion.svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            animate={{ y: [0, 2, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <path
              d="M2 4L6 8L10 4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.svg>
        </div>
      </motion.button>
    </motion.div>
  );
};

export default ScrollIndicator;
