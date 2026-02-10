import React from 'react';
import { motion } from 'framer-motion';

interface ServicesSectionProps {
  isDarkMode: boolean;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ isDarkMode }) => {
  const services = [
    {
      title: "Portrait Photography",
      description: "Professional headshots and personal portraits",
      icon: "📸"
    },
    {
      title: "Wedding Photography", 
      description: "Capturing your special day with elegance",
      icon: "💒"
    },
    {
      title: "Event Photography",
      description: "Corporate events, parties, and celebrations",
      icon: "🎉"
    },
    {
      title: "Product Photography",
      description: "High-quality commercial product shots",
      icon: "📦"
    },
    {
      title: "Landscape Photography",
      description: "Nature and architectural photography",
      icon: "🏞️"
    },
    {
      title: "Studio Sessions",
      description: "Professional studio photography services",
      icon: "🎬"
    }
  ];

  return (
    <section id="services" className={`min-h-screen py-20 px-4 ${isDarkMode ? 'bg-dark-bg' : 'bg-gray-100'}`}>
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
            Our Services
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${
            isDarkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Professional photography services tailored to capture your most precious moments
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className={`p-8 rounded-2xl backdrop-blur-md border ${
                isDarkMode 
                  ? 'bg-gray-900/50 border-gray-800 hover:bg-gray-800/70' 
                  : 'bg-white/70 border-gray-200 hover:bg-white/90'
              } transition-all duration-300 cursor-pointer`}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className={`text-xl font-bold mb-3 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {service.title}
              </h3>
              <p className={`${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
