"use client"
import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';

const ImageSlider = ({ images }) => {
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Handle mouse down event on the slider
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
    sliderRef.current.classList.add('cursor-grabbing'); // Change cursor to grabbing
  };

  // Handle mouse move event
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll-fast multiplier
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  // Handle mouse up event
  const handleMouseUp = () => {
    setIsDragging(false);
    sliderRef.current.classList.remove('cursor-grabbing'); // Change cursor back to grab
  };

  // Handle mouse leave event to ensure dragging stops if the mouse leaves the component
  const handleMouseLeave = () => {
    if (isDragging) {
      handleMouseUp();
    }
  };

  // Prevent default image dragging behavior
  const preventImageDrag = (e) => {
    e.preventDefault();
    e.stopPropagation(); // Stop the event from propagating to parent elements
  };

  // Handle infinite scroll effect
  useEffect(() => {
    const slider = sliderRef.current;
    const handleScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = slider;
      if (scrollLeft === 0) {
        slider.scrollLeft = scrollWidth - 2 * clientWidth;
      } else if (scrollLeft + clientWidth >= scrollWidth) {
        slider.scrollLeft = clientWidth;
      }
    };

    if (slider) {
      slider.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (slider) {
        slider.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  // Combine the original images with duplicates at the start and end
  const allImages = [...images, ...images, ...images];

  useEffect(() => {
    const slider = sliderRef.current;

    if (slider) {
      slider.addEventListener('mousedown', handleMouseDown);
      slider.addEventListener('mousemove', handleMouseMove);
      slider.addEventListener('mouseup', handleMouseUp);
      slider.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        slider.removeEventListener('mousedown', handleMouseDown);
        slider.removeEventListener('mousemove', handleMouseMove);
        slider.removeEventListener('mouseup', handleMouseUp);
        slider.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [isDragging, startX, scrollLeft]);

  return (
    <div className="relative overflow-hidden bg-transparent w-[60vw] ">
      <div
        ref={sliderRef}
        className="flex overflow-x-auto space-x-16 py-4 scroll-hidden cursor-grab"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        {allImages.map((src, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-32 h-16" // Adjust size here
            onMouseDown={preventImageDrag} // Prevent default image dragging behavior
          >
            <Image
              src={src}
              alt={`Image ${index}`}
              width={128} // Adjust width here
              height={70} // Adjust height here
              className="object-cover rounded-lg select-none " // Prevent image selection
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
