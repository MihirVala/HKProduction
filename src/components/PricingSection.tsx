import React from 'react';
import { motion } from 'framer-motion';

interface PricingSectionProps {
  isDarkMode: boolean;
}

const PricingSection: React.FC<PricingSectionProps> = ({ isDarkMode }) => {
  const packages = [
    {
      name: "SILVER PACKAGE",
      duration: "2 days",
      price: "₹ 65,000",
      color: "from-gray-600 to-gray-800",
      features: [
        "Traditional Photography",
        "Traditional Videography", 
        "Album 30 Pages (250 Photos)",
        "2.3 Hour Video"
      ],
      highlighted: false
    },
    {
      name: "GOLD PACKAGE", 
      duration: "2 days",
      price: "₹ 1,25,000",
      color: "from-yellow-600 to-amber-700",
      features: [
        "Traditional Photography",
        "Traditional Videography",
        "Candid Photography",
        "Cinematic Videography",
        "Album 30 Pages (300 Photos)",
        "2.3 Hour Video",
        "Highlight + Teaser + 2 Reel",
        "Drone Shoot"
      ],
      highlighted: true
    },
    {
      name: "DIAMOND PACKAGE",
      duration: "2 days", 
      price: "₹ 1,85,000",
      color: "from-purple-600 to-purple-800",
      features: [
        "Traditional Photography",
        "Traditional Videography",
        "Candid Photography",
        "Cinematic Videography",
        "Crowd Capture Photography",
        "Drone Shoot",
        "2 Album 30 Pages (300 Photos)",
        "2 to 3 Hour Video in 64GB Pendrive",
        "Highlight + Teaser + 2 Reel",
        "Pre Wedding Shoot",
        "Cinematic Clip 1.5 to 2 minutes",
        "10 Day Edit Photos"
      ],
      highlighted: false
    }
  ];

  return (
    <section id="pricing" className={`py-20 px-4 ${isDarkMode ? 'bg-dark-secondary' : 'bg-gray-200'}`}>
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
            Pricing Plans
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${
            isDarkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Choose the perfect package for your photography needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className={`relative p-8 rounded-2xl backdrop-blur-md border flex flex-col h-full ${
                pkg.highlighted
                  ? isDarkMode 
                    ? 'bg-yellow-900/30 border-yellow-500 ring-2 ring-yellow-500/50' 
                    : 'bg-yellow-50 border-yellow-500 ring-2 ring-yellow-500/30'
                  : isDarkMode 
                    ? 'bg-gray-900/50 border-gray-800 hover:bg-gray-800/70' 
                    : 'bg-white/70 border-gray-200 hover:bg-white/90'
              } transition-all duration-300`}
            >
              {pkg.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className={`px-4 py-1 rounded-full text-sm font-bold ${
                    isDarkMode ? 'bg-yellow-600 text-white' : 'bg-yellow-500 text-white'
                  }`}>
                    MOST POPULAR
                  </span>
                </div>
              )}
              
              {/* Package Header with Gradient */}
              <div className={`bg-gradient-to-br ${pkg.color} p-6 text-white text-center rounded-t-lg -m-8 mb-4`}>
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <div className="text-sm opacity-90 mb-2">{pkg.duration}</div>
                <div className="text-3xl font-bold">{pkg.price}</div>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className={`flex items-start ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    <svg 
                      className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path 
                        fillRule="evenodd" 
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                        clipRule="evenodd" 
                      />
                    </svg>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                className={`w-full py-3 rounded-lg font-medium transition-colors duration-300 mt-auto ${
                  pkg.highlighted
                    ? 'bg-yellow-500 hover:bg-yellow-600 text-white'
                    : isDarkMode
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  window.open('https://wa.me/917778979768?text=Hi!%20I%20am%20interested%20in%20the%20' + encodeURIComponent(pkg.name), '_blank');
                }}
              >
                Book This Package
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
