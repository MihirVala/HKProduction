import React from 'react';

interface SecurePhotoViewerProps {
  photoPath: string;
  alt: string;
  className?: string;
}

const SecurePhotoViewer: React.FC<SecurePhotoViewerProps> = ({ photoPath, alt, className = "" }) => {
  // Convert public path to secure path
  const securePath = photoPath.replace('/photos/', '/api/photos/');
  
  return (
    <div className={`relative ${className}`}>
      <img
        src={securePath}
        alt={alt}
        className={`w-full h-full object-cover pointer-events-none select-none ${className}`}
        draggable={false}
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
        onError={(e) => {
          // Fallback to original path if API fails
          const target = e.target as HTMLImageElement;
          target.src = photoPath;
        }}
      />
      <div className="absolute top-2 right-2 bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded pointer-events-none select-none">
        HK Production
      </div>
    </div>
  );
};

export default SecurePhotoViewer;
