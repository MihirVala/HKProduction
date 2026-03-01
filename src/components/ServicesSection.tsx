import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ServicesSectionProps {
  isDarkMode: boolean;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ isDarkMode }) => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  // Memoized photo arrays for better performance
  const bridalPhotos = useMemo(() => [
    '/protected-photos/bridal/IMG_0889.JPG.jpeg',
    '/protected-photos/bridal/IMG_1407.JPG.jpeg',
    '/protected-photos/bridal/IMG_1420.JPG.jpeg',
    '/protected-photos/bridal/IMG_1424.JPG.jpeg',
    '/protected-photos/bridal/IMG_1427.JPG.jpeg',
    '/protected-photos/bridal/IMG_1468.JPG.jpeg',
    '/protected-photos/bridal/IMG_1471.JPG.jpeg',
    '/protected-photos/bridal/IMG_1472.JPG.jpeg',
    '/protected-photos/bridal/IMG_3007.JPG.jpeg',
    '/protected-photos/bridal/IMG_3008.JPG.jpeg',
    '/protected-photos/bridal/IMG_3010.JPG.jpeg',
    '/protected-photos/bridal/IMG_3011.JPG.jpeg',
    '/protected-photos/bridal/IMG_3013.JPG.jpeg',
    '/protected-photos/bridal/IMG_3014.JPG.jpeg',
    '/protected-photos/bridal/IMG_4146.JPG.jpeg',
    '/protected-photos/bridal/IMG_4295.JPG.jpeg',
    '/protected-photos/bridal/IMG_4296.JPG.jpeg',
    '/protected-photos/bridal/IMG_4298.JPG.jpeg',
    '/protected-photos/bridal/IMG_4303.JPG.jpeg',
    '/protected-photos/bridal/IMG_4306.JPG.jpeg',
    '/protected-photos/bridal/IMG_4308.JPG.jpeg',
    '/protected-photos/bridal/IMG_4344.JPG.jpeg',
    '/protected-photos/bridal/IMG_4345.JPG.jpeg',
    '/protected-photos/bridal/IMG_4346.JPG.jpeg',
    '/protected-photos/bridal/IMG_4374.JPG.jpeg',
    '/protected-photos/bridal/IMG_4379.JPG.jpeg',
    '/protected-photos/bridal/IMG_4751.JPG.jpeg',
    '/protected-photos/bridal/IMG_4752.JPG.jpeg',
    '/protected-photos/bridal/IMG_4753.JPG.jpeg',
    '/protected-photos/bridal/IMG_4803.JPG.jpeg',
    '/protected-photos/bridal/IMG_4804.JPG.jpeg',
    '/protected-photos/bridal/IMG_4805.JPG.jpeg',
    '/protected-photos/bridal/IMG_4806.JPG.jpeg',
    '/protected-photos/bridal/IMG_4842.JPG.jpeg',
    '/protected-photos/bridal/IMG_5159.JPG.jpeg',
    '/protected-photos/bridal/IMG_5160.JPG.jpeg',
    '/protected-photos/bridal/IMG_5161.JPG.jpeg',
    '/protected-photos/bridal/IMG_5162.JPG.jpeg',
    '/protected-photos/bridal/IMG_5163.JPG.jpeg',
    '/protected-photos/bridal/IMG_5164.JPG.jpeg',
    '/protected-photos/bridal/IMG_5167.JPG.jpeg',
    '/protected-photos/bridal/IMG_5168.JPG.jpeg',
  ], []);

  const couplePhotos = useMemo(() => [
    '/protected-photos/couplePhotos/IMG_0879.JPG.jpeg',
    '/protected-photos/couplePhotos/IMG_0885.JPG.jpeg',
    '/protected-photos/couplePhotos/IMG_1848.JPG.jpeg',
    '/protected-photos/couplePhotos/IMG_2165.JPG.jpeg',
    '/protected-photos/couplePhotos/IMG_2166.JPG.jpeg',
    '/protected-photos/couplePhotos/IMG_2167.JPG.jpeg',
    '/protected-photos/couplePhotos/IMG_2169.JPG.jpeg',
    '/protected-photos/couplePhotos/IMG_2170.JPG.jpeg',
    '/protected-photos/couplePhotos/IMG_2172.JPG.jpeg',
    '/protected-photos/couplePhotos/IMG_4145.JPG.jpeg',
    '/protected-photos/couplePhotos/IMG_4147.JPG.jpeg',
    '/protected-photos/couplePhotos/IMG_4249.JPG.jpeg',
    '/protected-photos/couplePhotos/IMG_4250.JPG.jpeg',
    '/protected-photos/couplePhotos/IMG_4259.JPG.jpeg',
    '/protected-photos/couplePhotos/IMG_4264.JPG.jpeg',
    '/protected-photos/couplePhotos/IMG_4276.JPG.jpeg',
    '/protected-photos/couplePhotos/IMG_4288.JPG.jpeg',
    '/protected-photos/couplePhotos/IMG_4348.JPG.jpeg',
    '/protected-photos/couplePhotos/IMG_4372.JPG.jpeg',
    '/protected-photos/couplePhotos/IMG_4373.JPG.jpeg',
    '/protected-photos/couplePhotos/IMG_4375.JPG.jpeg',
    '/protected-photos/couplePhotos/IMG_4376.JPG.jpeg',
    '/protected-photos/couplePhotos/IMG_4378.JPG.jpeg',
    '/protected-photos/couplePhotos/IMG_4379.JPG.jpeg',
    '/protected-photos/couplePhotos/IMG_4380.JPG.jpeg',
    '/protected-photos/couplePhotos/IMG_4381.JPG.jpeg',
    '/protected-photos/couplePhotos/IMG_4382.JPG.jpeg',
    '/protected-photos/couplePhotos/IMG_4383.JPG.jpeg',
    '/protected-photos/couplePhotos/IMG_4791.JPG.jpeg',
    '/protected-photos/couplePhotos/IMG_4844.JPG.jpeg',
    '/protected-photos/couplePhotos/IMG_4846.JPG.jpeg',
    '/protected-photos/couplePhotos/IMG_4854.JPG.jpeg',
    '/protected-photos/couplePhotos/IMG_4855.JPG.jpeg',
    '/protected-photos/couplePhotos/IMG_4867.JPG.jpeg',
    '/protected-photos/couplePhotos/IMG_4950.JPG.jpeg',
    '/protected-photos/couplePhotos/IMG_4990.JPG.jpeg',
    '/protected-photos/couplePhotos/IMG_5065.JPG.jpeg',
    '/protected-photos/couplePhotos/IMG_5066.JPG.jpeg',
  ], []);

  const services = [
    {
      title: "Bridal Photography",
      description: "Professional headshots and personal portraits",
      icon: "👰"
    },
    {
      title: "Couple Photography", 
      description: "Capturing your special day with elegance",
      icon: "💑"
    },
    {
      title: "Product Photography",
      description: "High-quality commercial product shots",
      icon: "📦"
    }
  ];

  const handleServiceClick = (serviceTitle: string) => {
    if (serviceTitle === "Bridal Photography" || serviceTitle === "Couple Photography") {
      setSelectedService(serviceTitle);
    }
  };

  // Memoized getCurrentPhotos function for performance
  const getCurrentPhotos = useMemo(() => {
    return () => {
      if (selectedService === "Bridal Photography") return bridalPhotos;
      if (selectedService === "Couple Photography") return couplePhotos;
      return [];
    };
  }, [selectedService, bridalPhotos, couplePhotos]);

  const photos = getCurrentPhotos();

  const closeModal = () => {
    setSelectedService(null);
  };

  // Keyboard navigation for ESC key only
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <style>{`
        .no-select {
          -webkit-user-select: none !important;
          -moz-user-select: none !important;
          -ms-user-select: none !important;
          user-select: none !important;
          -webkit-touch-callout: none !important;
          -webkit-tap-highlight-color: transparent !important;
        }
        .no-context-menu {
          -webkit-touch-callout: none !important;
          -webkit-user-select: none !important;
          -khtml-user-select: none !important;
          -moz-user-select: none !important;
          -ms-user-select: none !important;
          user-select: none !important;
        }
        .protected-photo {
          pointer-events: none !important;
          -webkit-user-drag: none !important;
          -khtml-user-drag: none !important;
          -moz-user-drag: none !important;
          -o-user-drag: none !important;
          user-drag: none !important;
        }
      `}</style>
      
      <section id="services" className={`min-h-screen py-20 px-4 ${isDarkMode ? 'bg-dark-bg' : 'bg-gray-100'} no-select no-context-menu`}>
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
                onClick={() => handleServiceClick(service.title)}
                className={`p-8 rounded-2xl backdrop-blur-md border ${
                  isDarkMode 
                    ? 'bg-gray-900/50 border-gray-800 hover:bg-gray-800/70' 
                    : 'bg-white/70 border-gray-200 hover:bg-white/90'
                } transition-all duration-300 cursor-pointer ${
                  (service.title === "Bridal Photography" || service.title === "Couple Photography") 
                    ? 'ring-2 ring-blue-500 ring-opacity-50' 
                    : ''
                }`}
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
                {(service.title === "Bridal Photography" || service.title === "Couple Photography") && (
                  <div className={`mt-4 text-sm ${
                    isDarkMode ? 'text-blue-400' : 'text-blue-600'
                  }`}>
                    Click to view gallery
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-2 sm:p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-7xl w-full h-[80vh] sm:h-[85vh] md:max-h-[90vh] bg-black rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-700">
                <h3 className={`text-xl font-bold text-white`}>
                  {selectedService} Gallery ({photos.length} photos)
                </h3>
                <div className="flex items-center space-x-4">
                  <div className="text-xs text-gray-400">
                    ESC to close
                  </div>
                  <button
                    onClick={closeModal}
                    className="bg-red-500 hover:bg-red-600 text-white rounded-full p-2 w-10 h-10 flex items-center justify-center transition-colors text-lg font-bold"
                  >
                    ×
                  </button>
                </div>
              </div>

              {/* Photo Grid */}
              <div className="p-3 sm:p-4 overflow-y-auto h-[50vh] sm:h-[60vh] md:max-h-[60vh]">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-4">
                  {photos.map((photo: string, index: number) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.02 }}
                      whileHover={{ scale: 1.05 }}
                      className="relative aspect-square rounded-lg overflow-hidden cursor-pointer group select-none"
                      onClick={(e) => {
                        e.preventDefault();
                        // Optional: You can add single photo view here if needed
                        console.log(`Photo ${index + 1} clicked:`, photo);
                      }}
                      onContextMenu={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        return false;
                      }}
                      onDragStart={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        return false;
                      }}
                    >
                      <img
                        src={photo}
                        alt={`${selectedService} ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 pointer-events-none select-none protected-photo"
                        draggable={false}
                        loading="lazy"
                        decoding="async"
                        onContextMenu={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          return false;
                        }}
                        onDragStart={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          return false;
                        }}
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                        <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                          <div className="text-lg font-bold">#{index + 1}</div>
                        </div>
                      </div>
                      
                      {/* Watermark overlay */}
                      <div className="absolute top-2 right-2 bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded pointer-events-none select-none">
                        HK Production
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="p-4 border-t border-gray-700 text-center">
                <p className="text-gray-400 text-sm">
                  Total: {photos.length} {selectedService.toLowerCase()} photos
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ServicesSection;
