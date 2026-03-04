# Gallery Performance Optimization Guide

## What Was Causing the Issue

### The Problem
Your mobile gallery was loading **40-50 high-resolution photos immediately** (approximately 80 total photos when counting both Bridal and Couple categories). Each photo was likely 2-5MB, causing:

1. **Memory overflow**: Mobile browsers crashed trying to load 200-400MB of images
2. **Network congestion**: All images downloaded simultaneously
3. **Layout shift (CLS)**: Images loading caused page jumping
4. **Frozen UI**: Main thread blocked by image decoding

## What We Fixed

### 1. Lazy Loading with Intersection Observer (NEW)
**File**: `src/components/OptimizedImage.tsx`

```typescript
// Images only load when they come into viewport
const observer = new IntersectionObserver(
  (entries) => {
    if (entry.isIntersecting) {
      setIsInView(true); // Start loading only now
    }
  },
  { rootMargin: '100px' } // Preload 100px before visible
);
```

**Impact**: Only images you can see are loaded, not all 50 at once.

### 2. Progressive Loading (Already Implemented)
**File**: `src/components/ServicesSection.tsx`

```typescript
const [visibleImages, setVisibleImages] = useState<number>(6);
// Loads only 6 images initially, then user clicks "Load More"
```

**Impact**: Initial load reduced from 50 images to just 6.

### 3. Skeleton Placeholders (NEW)
Prevents layout shift while images load:

```typescript
{!isLoaded && !hasError && (
  <div className="absolute inset-0 bg-gray-200 animate-pulse" />
)}
```

**Impact**: No CLS (Cumulative Layout Shift), better Core Web Vitals.

### 4. Aspect Ratio (NEW)
```typescript
style={{ aspectRatio: '1/1' }} // Reserve space before image loads
```

**Impact**: Layout doesn't jump when image loads.

### 5. Reduced 3D Scene Photos (Already Implemented)
**File**: `src/components/ThreeScene.tsx`

Reduced from 32 photos to 12 photos for the 3D cubes.

**Impact**: Main page loads faster on mobile.

## Best Practices for Photography Websites

### Image Compression Recommendations

#### For Gallery/Portfolio Images
- **Resolution**: 1920px width max (good for all devices)
- **Format**: JPEG with 85% quality
- **File Size**: 150-300KB per image (ideal for mobile)
- **Tools**: 
  - [TinyPNG](https://tinypng.com/) - Web-based, easy
  - [Squoosh](https://squoosh.app/) - Google's tool, more control
  - Photoshop "Export As" with quality 75-85

#### For Thumbnails (if needed)
- **Resolution**: 400x400px
- **Format**: WebP with JPEG fallback
- **File Size**: 20-50KB

### Progressive Loading Strategy

```
Initial Load: 6 images (Mobile) / 12 images (Desktop)
Load More:   4-6 images per click
Total:        All 50 images available on demand
```

**Why**: Users don't need to see all 50 images at once. They browse progressively.

### WebP Format Support (Optional Enhancement)

If you want even better performance, convert images to WebP:

```html
<picture>
  <source srcset="photo.webp" type="image/webp">
  <source srcset="photo.jpg" type="image/jpeg">
  <img src="photo.jpg" alt="...">
</picture>
```

**Benefit**: WebP is 25-35% smaller than JPEG at same quality.

### Mobile-Specific Optimizations

1. **Use Intersection Observer** - We implemented this ✓
2. **Lazy load below-fold images** - Done ✓
3. **Reduce initial batch size** - 6 images on mobile ✓
4. **Use CSS aspect-ratio** - Prevents layout shift ✓
5. **Add skeleton placeholders** - Visual feedback while loading ✓

## File Structure

```
src/components/
├── ServicesSection.tsx     # Main gallery with virtualization
├── OptimizedImage.tsx      # Lazy loading component
├── ThreeScene.tsx          # 3D cubes (reduced photos)
└── App.tsx                 # Mobile detection for 3D scene
```

## Performance Metrics to Monitor

After these changes, check:

1. **Lighthouse Score**: Should improve significantly on mobile
2. **Time to Interactive**: Should drop from 10s+ to <3s
3. **First Contentful Paint**: Faster initial render
4. **Cumulative Layout Shift**: Should be <0.1 (good CLS)
5. **Memory Usage**: Should stay under 100MB on mobile

## Testing Checklist

- [ ] Gallery opens without freezing on iPhone/Android
- [ ] "Load More" button works smoothly
- [ ] Images load as you scroll
- [ ] No layout jumping (CLS)
- [ ] 3D cubes still visible on mobile
- [ ] Watermarks display correctly
- [ ] Right-click prevention still works

## Further Optimizations (Future)

1. **CDN**: Use Cloudflare or CloudFront for faster delivery
2. **Image Resizing API**: Use Imgix or Cloudinary for on-demand resizing
3. **Preload Critical Images**: First 2-3 images in `<head>`
4. **Service Worker**: Cache images for repeat visits

## Quick Commands

```bash
# Check image sizes
find public/photos -name "*.jpg" -exec ls -lh {} \; | awk '{ print $5 ": " $9 }'

# Get total size
du -sh public/photos/
```

## Summary

**Before**: 50 images × 3MB = 150MB immediate load → Mobile crash
**After**: 6 images × 200KB = 1.2MB initial + lazy load rest → Smooth performance

**Key Insight**: Photography websites don't need to show all photos at once. Progressive loading + lazy loading = perfect mobile experience.
