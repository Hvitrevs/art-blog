"use client";

import { useRef } from 'react';

const TopScreenGallery = () => {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -250 : 250;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative  md:mt-[350px] xxs:mt-[250px] ">
      <h1 className='text-[#ffbc65] px-2  lg:text-[15px] md:text-[14px] xs:text-[10px] xxs:text-[9px] tracking-widest font-sans uppercase '>
        Last month best seller:
      </h1>
      <div 
        id="image-track" 
        ref={scrollContainerRef}
        className="flex overflow-x-auto space-x-4 p-4 scrollbar-hide  xs:mx-9 xxs:mx-4"
      >
        <img 
          className="w-40 h-50 object-cover" 
          src="https://cdnb.artstation.com/p/assets/images/images/071/741/543/large/venus-of-12-pm-getomerged.jpg?1705853460" 
          alt="Gallery Image 1" 
        />
        <img 
          className="w-40 h-50 object-cover" 
          src="https://cdna.artstation.com/p/assets/images/images/063/338/994/medium/venus-of-12-pm-fwg0zc8wiaw9hjo.jpg?1685315395" 
          alt="Gallery Image 2" 
        />
        <img 
          className="w-40 h-50 object-cover" 
          src="https://cdna.artstation.com/p/assets/images/images/063/339/220/medium/venus-of-12-pm-fvn5ihmxsa4atjv.jpg?1685316160" 
          alt="Gallery Image 3" 
        />
        <img 
          className="w-40 h-50 object-cover" 
          src="https://cdna.artstation.com/p/assets/images/images/060/780/462/medium/hvitrev-raiden-shogun.jpg?1679321834" 
          alt="Gallery Image 4" 
        />
        <img 
          className="w-40 h-50 object-cover" 
          src="https://cdnb.artstation.com/p/assets/images/images/063/339/131/medium/venus-of-12-pm-lucy.jpg?1685315944" 
          alt="Gallery Image 5" 
        />
        <img 
          className="w-40 h-50 object-cover" 
          src="https://cdnb.artstation.com/p/assets/images/images/060/867/613/medium/venus-of-12-pm-opera-snapshot-2023-03-22-091842-mona-jpg.jpg?1685316910" 
          alt="Gallery Image 6" 
        />
        <img 
          className="w-40 h-50 object-cover" 
          src="https://cdnb.artstation.com/p/assets/images/images/060/822/299/medium/venus-of-12-pm-opera-snapshot-2023-03-21-085102-getou-jpg.jpg?1679403071" 
          alt="Gallery Image 7" 
        />
        <img 
          className="w-40 h-50 object-cover" 
          src="https://cdnb.artstation.com/p/assets/images/images/048/435/123/medium/hvitrev-1649907691848.jpg?1650022921" 
          alt="Gallery Image 8" 
        />
      </div>

      {/* Scroll Arrows */}
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 border-2 border-[#694e2b] text-orange-300 bg-[#03001417] backdrop-blur-md  p-1 rounded-l cursor-pointer"
        onClick={() => scroll('left')}
      >
        &lt;
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 border-2 border-[#694e2b] text-orange-300 bg-[#03001417] backdrop-blur-md  p-1 rounded-r cursor-pointer"
        onClick={() => scroll('right')}
      >
        &gt;
      </button>
    </div>
  );
};

export default TopScreenGallery;