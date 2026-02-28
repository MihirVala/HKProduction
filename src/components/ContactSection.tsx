import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ContactSectionProps {
  isDarkMode: boolean;
}

const ContactSection: React.FC<ContactSectionProps> = ({ isDarkMode }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: 'Portrait',
    message: '',
    contactMethod: 'WhatsApp'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    // Create message content
    const messageContent = `Hi, I'm ${formData.fullName} and I'm interested in ${formData.service} photography services.

Message: ${formData.message}
Email: ${formData.email}
Phone: ${formData.phone}`;

    // Send based on preferred contact method
    switch (formData.contactMethod) {
      case 'WhatsApp':
        const phoneNumber = '+917778979768';
        const encodedMessage = encodeURIComponent(messageContent);
        window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
        break;
      
      case 'Email':
        const emailSubject = encodeURIComponent(`Photography Inquiry - ${formData.service}`);
        const emailBody = encodeURIComponent(messageContent);
        window.open(`mailto:patelkuldip379@gmail.com?subject=${emailSubject}&body=${emailBody}`, '_blank');
        break;
      
      case 'Phone':
        // For phone, show the number in an alert and open WhatsApp as fallback
        alert(`Please call us at: +91 7778979768\n\nOr we'll connect via WhatsApp with your message.`);
        const phoneWhatsAppNumber = '+917778979768';
        const phoneMessage = encodeURIComponent(messageContent);
        window.open(`https://wa.me/${phoneWhatsAppNumber}?text=${phoneMessage}`, '_blank');
        break;
      
      default:
        // Default to WhatsApp
        const defaultNumber = '+917778979768';
        const defaultMessage = encodeURIComponent(messageContent);
        window.open(`https://wa.me/${defaultNumber}?text=${defaultMessage}`, '_blank');
    }
  };

  const openWhatsApp = () => {
    const phoneNumber = '+917778979768';
    const message = encodeURIComponent('Hi, I\'m interested in your photography services');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const openInstagram = () => {
    window.open('https://instagram.com/hk_weddingstudio', '_blank');
  };

  const openEmail = () => {
    window.open('mailto:patelkuldip379@gmail.com', '_blank');
  };

  return (
    <section id="contact" className={`py-20 px-4 ${isDarkMode ? 'bg-dark-bg' : 'bg-gray-100'}`}>
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
            Get In Touch
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${
            isDarkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Let's capture your precious moments together
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
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
              <h3 className={`text-2xl font-bold mb-6 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Contact Information
              </h3>
              
              <div className="space-y-4 mb-8">
                <div className={`flex items-center space-x-3 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  <i className="fas fa-envelope text-lg"></i>
                  <span>patelkuldip379@gmail.com</span>
                </div>
                <div className={`flex items-center space-x-3 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  <i className="fas fa-phone text-lg"></i>
                  <span>+91 7778979768</span>
                </div>
                <div className={`flex items-center space-x-3 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  <i className="fas fa-map-marker-alt text-lg"></i>
                  <span>India</span>
                </div>
              </div>

              <div>
                <h4 className={`text-lg font-semibold mb-4 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Quick Contact
                </h4>
                <div className="flex space-x-4">
                  <motion.button
                    onClick={openWhatsApp}
                    className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    title="WhatsApp"
                  >
                    <i className="fab fa-whatsapp text-lg"></i>
                  </motion.button>
                  <motion.button
                    onClick={openInstagram}
                    className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-full flex items-center justify-center hover:from-purple-700 hover:to-pink-700 transition-all"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    title="Instagram"
                  >
                    <i className="fab fa-instagram text-lg"></i>
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className={`p-8 rounded-2xl backdrop-blur-md border ${
              isDarkMode 
                ? 'bg-gray-900/50 border-gray-800' 
                : 'bg-white/70 border-gray-200'
            }`}>
              <h3 className={`text-2xl font-bold mb-6 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Send Message
              </h3>

              <div className="space-y-4">
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-2 rounded-lg border ${
                      isDarkMode 
                        ? 'bg-gray-800 border-gray-700 text-white' 
                        : 'bg-white border-gray-300 text-gray-900'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  />
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-2 rounded-lg border ${
                      isDarkMode 
                        ? 'bg-gray-800 border-gray-700 text-white' 
                        : 'bg-white border-gray-300 text-gray-900'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  />
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 rounded-lg border ${
                      isDarkMode 
                        ? 'bg-gray-800 border-gray-700 text-white' 
                        : 'bg-white border-gray-300 text-gray-900'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  />
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Service Interested In
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 rounded-lg border ${
                      isDarkMode 
                        ? 'bg-gray-800 border-gray-700 text-white' 
                        : 'bg-white border-gray-300 text-gray-900'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  >
                    <option value="Portrait">Portrait</option>
                    <option value="Wedding">Wedding</option>
                    <option value="Event">Event</option>
                    <option value="Product">Product</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className={`w-full px-4 py-2 rounded-lg border ${
                      isDarkMode 
                        ? 'bg-gray-800 border-gray-700 text-white' 
                        : 'bg-white border-gray-300 text-gray-900'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  />
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Preferred Contact Method
                  </label>
                  <select
                    name="contactMethod"
                    value={formData.contactMethod}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 rounded-lg border ${
                      isDarkMode 
                        ? 'bg-gray-800 border-gray-700 text-white' 
                        : 'bg-white border-gray-300 text-gray-900'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  >
                    <option value="WhatsApp">WhatsApp</option>
                    <option value="Phone">Phone</option>
                  </select>
                </div>

                <motion.button
                  type="submit"
                  className={`w-full py-3 rounded-lg font-medium transition-colors duration-300 ${
                    isDarkMode
                      ? 'bg-white text-gray-900 hover:bg-gray-100'
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
