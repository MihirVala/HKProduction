# HK Production

An interactive 3D photography portfolio website featuring floating photo cubes in a 3D perspective grid space.

## Features

### 🎨 Visual Design
- **Dark Theme**: Deep charcoal background (#0a0a0a) with 3D perspective grid
- **Modern Typography**: Montserrat Bold for headings, Inter for body text
- **Glassmorphism**: Translucent navigation bar with backdrop blur effects
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices

### 🎯 3D Experience
- **Floating Photo Cubes**: Multiple 3D cubes displaying photography on each face
- **Auto-rotation**: Smooth, gentle spinning animation for all cubes
- **Interactive Behavior**: Hover effects pause rotation and highlight cubes
- **Perspective Grid**: Creates depth with vanishing point centered on screen

### 🎮 Interactive Elements
- **Navigation Bar**: Floating translucent bar with logo, menu items, and register button
- **Hero Section**: Bold "HK Production" title with modern typography
- **Dark/Light Mode Toggle**: Smooth theme switching with bottom-left toggle
- **Cookie Notice**: Acceptable cookie banner with modern design
- **Scroll Indicator**: Animated scroll prompt in bottom-right corner

### ⚡ Performance Optimizations
- **Responsive Cube Count**: Fewer cubes on mobile devices (3 vs 6)
- **Texture Caching**: Optimized image loading with unique seeds
- **Hover State Management**: Pauses rotation when hovering for better UX
- **Viewport-based Scaling**: Adapts to different screen sizes

## Technology Stack

- **React.js**: Component-based architecture with TypeScript
- **Three.js & React Three Fiber**: 3D rendering and WebGL integration
- **React Drei**: Helper components for Three.js
- **Tailwind CSS**: Utility-first styling framework
- **Framer Motion**: Smooth animations and transitions

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd hk-production
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── Navigation.tsx        # Top navigation bar
│   ├── HeroSection.tsx      # Main hero content
│   ├── ThreeScene.tsx       # 3D scene with cubes and grid
│   ├── DarkModeToggle.tsx   # Theme switcher
│   ├── CookieNotice.tsx     # Cookie consent banner
│   └── ScrollIndicator.tsx  # Scroll prompt
├── App.tsx                  # Main application component
├── App.css                  # Custom styles
├── index.css                # Global styles with Tailwind
└── index.tsx                # Application entry point
```

## Customization

### Adding New Photos
Replace the placeholder images in `ThreeScene.tsx`:
```typescript
const textures = useMemo(() => {
  const loader = new THREE.TextureLoader();
  return [
    loader.load('your-image-1.jpg'),
    loader.load('your-image-2.jpg'),
    // ... more images
  ];
}, []);
```

### Adjusting Cube Count
Modify the cube count in `ThreeScene.tsx`:
```typescript
const cubeCount = viewport.width < 768 ? 3 : 6; // Adjust these values
```

### Customizing Colors
Update the color palette in `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      'dark-bg': '#0a0a0a',
      'dark-secondary': '#1a1a1a',
      // ... add your custom colors
    }
  }
}
```

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Performance Notes

- Uses WebGL for optimal 3D rendering
- Implements lazy loading for textures
- Responsive design reduces cube count on mobile
- Optimized animation loops with requestAnimationFrame

## License

This project is open source and available under the [MIT License](LICENSE).

---

Created with ❤️ using React, Three.js, and modern web technologies.
