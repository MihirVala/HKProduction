import React from 'react';
import { motion } from 'framer-motion';

interface AboutSectionProps {
  isDarkMode: boolean;
}

const AboutSection: React.FC<AboutSectionProps> = ({ isDarkMode }) => {
  const stats = [
    { number: "150+", label: "Projects Completed" },
    { number: "6", label: "Years of Excellence" }
  ];

  return (
    <section id="about" className={`py-20 px-4 ${isDarkMode ? 'bg-dark-secondary' : 'bg-gray-200'}`}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 font-display ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            About HK Production
          </h2>
          <p className={`text-xl font-medium mb-2 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Crafting Visual Stories Since 2019
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className={`p-8 rounded-2xl backdrop-blur-md border ${
              isDarkMode 
                ? 'bg-gray-900/50 border-gray-800' 
                : 'bg-white/70 border-gray-200'
            }`}>
              <p className={`text-lg leading-relaxed mb-6 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                At HK Production, we believe every moment deserves to be captured with artistry and precision. Our team of professional photographers specializes in transforming ordinary moments into extraordinary memories. With over 150 successful projects and countless satisfied clients, we're passionate about delivering photography that exceeds expectations.
              </p>
              <p className={`text-lg leading-relaxed ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Our approach combines technical excellence with creative vision, ensuring every shot tells a compelling story. Whether it's your wedding day, corporate event, or personal portrait session, we're dedicated to capturing the essence of your special moments.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className={`p-6 rounded-xl text-center ${
                    isDarkMode 
                      ? 'bg-gray-800/50 border border-gray-700' 
                      : 'bg-white/80 border border-gray-200'
                  }`}
                >
                  <div className={`text-3xl font-bold mb-2 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {stat.number}
                  </div>
                  <div className={`text-sm ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
