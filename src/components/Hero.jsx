import React, { useEffect, useRef, useState } from 'react';

const videos = [
  '/videos/Kerala.mp4',
  '/videos/Jaipur.mp4',
  '/videos/Banaras.mp4',
];

function Hero() {
  const parentRef = useRef(null);
  const videoRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const scaleFactor = 1.05; // Zoom-in scale factor (adjustable)
  const movementFactor = 50; // Adjusts the translate movement intensity (adjustable)

  useEffect(() => {
    const parent = parentRef.current;

    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) - 0.5;
      const y = (e.clientY / window.innerHeight) - 0.5;

      if (videoRef.current) {
        videoRef.current.style.transform = `
          scale(${scaleFactor})
          translate(${x * movementFactor}px, ${y * movementFactor}px)
        `;
      }
    };

    if (parent) {
      parent.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (parent) {
        parent.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  const handleVideoClick = () => {
    setIsTransitioning(true);

    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);

      // After changing the video, fade back in
      setTimeout(() => {
        setIsTransitioning(false);
      }, 5);
    }, 5);
  };

  return (
    <div className='relative parent w-full h-screen overflow-hidden' ref={parentRef}>
      <video
        key={currentIndex} 
        muted
        className={`w-full h-[100vh] object-cover transition-transform duration-500 ease-out 
        ${isTransitioning ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}
        src={videos[currentIndex]}
        ref={videoRef}
        autoPlay
        loop
        playsInline
        onClick={handleVideoClick}
      />
    </div>
  );
}

export default Hero;
