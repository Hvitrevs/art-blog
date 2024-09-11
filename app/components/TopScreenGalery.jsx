"use client";

import { useEffect, useRef } from 'react';

const TopScreenGallery = () => {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;

    const handleOnDown = (e) => {
      track.dataset.mouseDownAt = e.clientX;
    };

    const handleOnUp = () => {
      track.dataset.mouseDownAt = "0";  
      track.dataset.prevPercentage = track.dataset.percentage;
    };

    const handleOnMove = (e) => {
      if (track.dataset.mouseDownAt === "0") return;
      
      const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
            maxDelta = window.innerWidth / 2;
      
      const percentage = (mouseDelta / maxDelta) * -100,
            nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
            nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
      
      track.dataset.percentage = nextPercentage;
      
      track.animate({
        transform: `translate(${nextPercentage}%, -50%)`
      }, { duration: 1200, fill: "forwards" });
      
      for (const image of track.getElementsByClassName("image")) {
        image.animate({
          objectPosition: `${100 + nextPercentage}% center`
        }, { duration: 1200, fill: "forwards" });
      }
    };

    window.addEventListener('mousedown', handleOnDown);
    window.addEventListener('touchstart', e => handleOnDown(e.touches[0]));
    window.addEventListener('mouseup', handleOnUp);
    window.addEventListener('touchend', e => handleOnUp(e.touches[0]));
    window.addEventListener('mousemove', handleOnMove);
    window.addEventListener('touchmove', e => handleOnMove(e.touches[0]));

    return () => {
      window.removeEventListener('mousedown', handleOnDown);
      window.removeEventListener('touchstart', handleOnDown);
      window.removeEventListener('mouseup', handleOnUp);
      window.removeEventListener('touchend', handleOnUp);
      window.removeEventListener('mousemove', handleOnMove);
      window.removeEventListener('touchmove', handleOnMove);
    };
  }, []);

  return (
    <div className="relative">
      <div 
        id="image-track" 
        ref={trackRef}
        data-mouse-down-at='0'
        data-prev-percentage="0"
        className="flex gap-5 p-2 mt-40 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 select-none  scrollbar-hide"
        
      >
        <img 
          className="w-40 h-50 object-cover " 
          src="https://cdnb.artstation.com/p/assets/images/images/071/741/543/large/venus-of-12-pm-getomerged.jpg?1705853460" 
          alt="Gallery Image 1" 
          draggable="false"
        />
        <img 
          className="w-40 h-50 object-cover" 
          src="https://cdna.artstation.com/p/assets/images/images/063/338/994/medium/venus-of-12-pm-fwg0zc8wiaw9hjo.jpg?1685315395" 
          alt="Gallery Image 2"
          draggable="false"
        />
        <img 
          className="w-40 h-50 object-cover" 
          src="https://cdna.artstation.com/p/assets/images/images/063/339/220/medium/venus-of-12-pm-fvn5ihmxsa4atjv.jpg?1685316160" 
          alt="Gallery Image 3"
          draggable="false"
        />
        <img 
          className="w-40 h-50 object-cover" 
          src="https://cdna.artstation.com/p/assets/images/images/060/780/462/medium/hvitrev-raiden-shogun.jpg?1679321834" 
          alt="Gallery Image 4"
          draggable="false"
        />
        <img 
          className="w-40 h-50 object-cover" 
          src="https://cdnb.artstation.com/p/assets/images/images/063/339/131/medium/venus-of-12-pm-lucy.jpg?1685315944" 
          alt="Gallery Image 5"
          draggable="false"
        />
        <img 
          className="w-40 h-50 object-cover" 
          src="https://cdnb.artstation.com/p/assets/images/images/060/867/613/medium/venus-of-12-pm-opera-snapshot-2023-03-22-091842-mona-jpg.jpg?1685316910" 
          alt="Gallery Image 6"
          draggable="false"
        />
        <img 
          className="w-40 h-50 object-cover" 
          src="https://cdnb.artstation.com/p/assets/images/images/060/822/299/medium/venus-of-12-pm-opera-snapshot-2023-03-21-085102-getou-jpg.jpg?1679403071" 
          alt="Gallery Image 7"
          draggable="false"
        />
        <img 
          className="w-40 h-50 object-cover" 
          src="https://cdnb.artstation.com/p/assets/images/images/048/435/123/medium/hvitrev-1649907691848.jpg?1650022921" 
          alt="Gallery Image 8"
          draggable="false"
        />
      </div>
    </div>
  );
};

export default TopScreenGallery;