import React, { useEffect, useState } from 'react';
import { GalleryBlock } from './data';
import './GallerySection.css';

interface GallerySectionProps {
  gallery: GalleryBlock;
}

const GallerySection: React.FC<GallerySectionProps> = ({ gallery }) => {
  const [index, setIndex] = useState(0);
  const total = gallery.images.length;

  useEffect(() => {
    if (total <= 1) return;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, 3200);
    return () => clearInterval(timer);
  }, [total]);

  if (total === 0) return null;

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  const dots = (
    <div className="gallery-dots">
      {gallery.images.map((_, i) => (
        <span
          key={i}
          className={i === index ? 'active' : ''}
          onClick={() => setIndex(i)}
        />
      ))}
    </div>
  );

  if (gallery.style === 'iphone') {
    return (
      <div className="gallery-iphone-wrap">
        <div className="iphone-frame">
          <div className="iphone-notch" />
          <div className="iphone-screen">
            {gallery.images.map((src, i) => (
              <img key={src} src={src} alt="" className={i === index ? 'visible' : ''} />
            ))}
          </div>
          <div className="iphone-home-indicator" />
        </div>
        <div className="gallery-iphone-controls">
          <button onClick={prev} aria-label="Previous">‹</button>
          {dots}
          <button onClick={next} aria-label="Next">›</button>
        </div>
        {gallery.caption && <div className="gallery-caption">{gallery.caption}</div>}
      </div>
    );
  }

  return (
    <div className="gallery-default-wrap">
      <div className="gallery-default-viewport">
        {total > 1 && (
          <button className="gallery-nav left" onClick={prev} aria-label="Previous">‹</button>
        )}
        <div className="gallery-default-image-wrap">
          {gallery.images.map((src, i) => (
            <img key={src} src={src} alt="" className={i === index ? 'visible' : ''} />
          ))}
        </div>
        {total > 1 && (
          <button className="gallery-nav right" onClick={next} aria-label="Next">›</button>
        )}
      </div>
      {total > 1 && dots}
      {gallery.caption && <div className="gallery-caption">{gallery.caption}</div>}
    </div>
  );
};

export default GallerySection;
