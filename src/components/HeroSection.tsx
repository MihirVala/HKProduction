import React from 'react';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  isDarkMode: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({ isDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4"
    >
      {/* Main Title */}
      <div className={`font-display text-2xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6 text-center ${
        isDarkMode ? 'text-white' : 'text-gray-900'
      } flex justify-center items-center flex-wrap`}>
        {'HK Production'.split('').map((char, index) => (
          <motion.span
            key={index}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.3 + index * 0.1,
              type: 'spring',
              stiffness: 200
            }}
            className="inline-block"
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </div>

      {/* Tagline */}
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-3 mb-6 md:mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <span className={`text-sm md:text-lg ${
          isDarkMode ? 'text-gray-400' : 'text-gray-600'
        }`}>
          Capturing moments that tell timeless stories
        </span>
        <motion.span
          className={`px-3 py-1 rounded-full text-xs md:text-sm font-medium border ${
            isDarkMode
              ? 'bg-gray-800 text-white border-gray-700'
              : 'bg-gray-200 text-gray-800 border-gray-300'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          photographers
        </motion.span>
      </motion.div>

      {/* Subtitle */}
      <motion.p
        className={`text-center max-w-md md:max-w-2xl text-xs md:text-sm px-4 ${
          isDarkMode ? 'text-gray-500' : 'text-gray-600'
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
      >
        Experience stunning photography through an immersive 3D gallery showcase
      </motion.p>
    </motion.div>
  );
};

export default HeroSection;
