import React from 'react';
import { motion } from 'framer-motion';

interface PricingSectionProps {
  isDarkMode: boolean;
}

const PricingSection: React.FC<PricingSectionProps> = ({ isDarkMode }) => {
  const pricingTiers = [
    {
      name: "BASIC PACKAGE",
      price: "$299",
      features: [
        "2-hour photo session",
        "50 edited high-resolution photos",
        "Online gallery for 30 days",
        "Personal use license",
        "Perfect for: Portraits, Headshots"
      ],
      highlighted: false
    },
    {
      name: "PROFESSIONAL PACKAGE",
      price: "$599",
      features: [
        "4-hour photo session",
        "150 edited high-resolution photos",
        "Online gallery for 90 days",
        "Commercial use license",
        "1 round of revisions",
        "Perfect for: Events, Products, Small weddings"
      ],
      highlighted: true
    },
    {
      name: "PREMIUM PACKAGE",
      price: "$1,299",
      features: [
        "Full-day coverage (8 hours)",
        "300+ edited high-resolution photos",
        "Unlimited online gallery access",
        "Full commercial license",
        "2 rounds of revisions",
        "Same-day sneak peeks",
        "Printed photo album (20 pages)",
        "Perfect for: Weddings, Corporate events, Campaigns"
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
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className={`relative p-8 rounded-2xl backdrop-blur-md border flex flex-col h-full ${
                tier.highlighted
                  ? isDarkMode 
                    ? 'bg-blue-900/30 border-blue-500 ring-2 ring-blue-500/50' 
                    : 'bg-blue-50 border-blue-500 ring-2 ring-blue-500/30'
                  : isDarkMode 
                    ? 'bg-gray-900/50 border-gray-800 hover:bg-gray-800/70' 
                    : 'bg-white/70 border-gray-200 hover:bg-white/90'
              } transition-all duration-300`}
            >
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className={`px-4 py-1 rounded-full text-sm font-bold ${
                    isDarkMode ? 'bg-blue-600 text-white' : 'bg-blue-500 text-white'
                  }`}>
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className={`text-xl font-bold mb-2 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {tier.name}
                </h3>
                <div className={`text-4xl font-bold mb-4 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {tier.price}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <span className={`mr-2 mt-1 ${
                      isDarkMode ? 'text-green-400' : 'text-green-600'
                    }`}>✓</span>
                    <span className={`text-sm ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <motion.button
                className={`w-full py-3 rounded-lg font-medium transition-colors duration-300 mt-auto ${
                  tier.highlighted
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : isDarkMode
                      ? 'bg-white text-gray-900 hover:bg-gray-100'
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Started
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
