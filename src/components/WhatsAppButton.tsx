import React from 'react';
import { motion } from 'framer-motion';

interface WhatsAppButtonProps {
  isDarkMode: boolean;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ isDarkMode }) => {
  const openWhatsApp = () => {
    const phoneNumber = '+917778979768';
    const message = encodeURIComponent('Hi, I\'m interested in your photography services');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 2 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <motion.button
        onClick={openWhatsApp}
        className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors icon-button"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        title="Contact us on WhatsApp"
      >
        <i className="fab fa-whatsapp text-2xl"></i>
      </motion.button>
    </motion.div>
  );
};

export default WhatsAppButton;
