import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

interface FooterProps {
  isDarkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ isDarkMode }) => {
  const openWhatsApp = () => {
    const phoneNumber = '+919316271155';
    const message = encodeURIComponent('Hi, I\'m interested in your photography services');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const openInstagram = () => {
    window.open('https://instagram.com/hk.production19', '_blank');
  };

  const openEmail = () => {
    window.open('mailto:hello@hkproduction.photography', '_blank');
  };

  // Add creator credit dynamically to make it non-modifiable
  useEffect(() => {
    const encodedName = 'TWloaXIgVmFsYQ==';
    const creatorText = `Created by ${atob(encodedName)}`;
    
    // Find the copyright element and add creator credit after it
    const copyrightElement = document.querySelector('.footer-copyright');
    if (copyrightElement && !copyrightElement.nextElementSibling?.classList.contains('creator-credit')) {
      const creatorElement = document.createElement('p');
      creatorElement.className = `text-xs mt-2 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'} creator-credit`;
      creatorElement.textContent = creatorText;
      copyrightElement.parentNode?.insertBefore(creatorElement, copyrightElement.nextSibling);
    }
  }, [isDarkMode]);

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className={`py-12 px-4 ${isDarkMode ? 'bg-gray-900 border-t border-gray-800' : 'bg-gray-800 border-t border-gray-700'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column - Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <i className={`fas fa-camera text-lg ${isDarkMode ? 'text-white' : 'text-gray-100'}`}></i>
              <span className={`font-bold text-lg ${
                isDarkMode ? 'text-white' : 'text-gray-100'
              }`}>HK Production</span>
            </div>
            <p className={`text-sm mb-4 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-300'
            }`}>
              Capturing timeless moments
            </p>
            <p className={`text-xs footer-copyright ${
              isDarkMode ? 'text-gray-500' : 'text-gray-400'
            }`}>
              © 2024 HK Production. All rights reserved.
            </p>
          </motion.div>

          {/* Middle Column - Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className={`text-lg font-semibold mb-4 ${
              isDarkMode ? 'text-white' : 'text-gray-100'
            }`}>
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`text-sm transition-colors duration-200 ${
                      isDarkMode 
                        ? 'text-gray-400 hover:text-white' 
                        : 'text-gray-300 hover:text-gray-100'
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right Column - Connect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className={`text-lg font-semibold mb-4 ${
              isDarkMode ? 'text-white' : 'text-gray-100'
            }`}>
              Connect
            </h3>
            <div className="space-y-3 mb-6">
              <div className={`flex items-center space-x-2 text-sm ${
                isDarkMode ? 'text-gray-400' : 'text-gray-300'
              }`}>
                <i className="fas fa-envelope"></i>
                <span>hello@hk.production</span>
              </div>
              <div className={`flex items-center space-x-2 text-sm ${
                isDarkMode ? 'text-gray-400' : 'text-gray-300'
              }`}>
                <span>📞</span>
                <span>+91 9316271155</span>
              </div>
            </div>
            <div className="flex space-x-3">
              <motion.button
                onClick={openWhatsApp}
                className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title="WhatsApp"
              >
                <i className="fab fa-whatsapp"></i>
              </motion.button>
              <motion.button
                onClick={openInstagram}
                className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-full flex items-center justify-center hover:from-purple-700 hover:to-pink-700 transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </motion.button>
              <motion.button
                onClick={openEmail}
                className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title="Email"
              >
                <i className="fas fa-envelope"></i>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
