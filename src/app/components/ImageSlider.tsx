"use client";

import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';

interface ImageSliderProps {
  images: string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [scrollLeft, setScrollLeft] = useState<number>(0);

  // Handle mouse down event on the slider
  const handleMouseDown = (e: MouseEvent) => {
    setIsDragging(true);
    if (sliderRef.current) {
      setStartX(e.pageX - sliderRef.current.offsetLeft);
      setScrollLeft(sliderRef.current.scrollLeft);
      sliderRef.current.classList.add('cursor-grabbing'); // Change cursor to grabbing
    }
  };

  // Handle mouse move event
  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || !sliderRef.current) return;
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll-fast multiplier
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  // Handle mouse up event
  const handleMouseUp = (e: MouseEvent) => {
    setIsDragging(false);
    if (sliderRef.current) {
      sliderRef.current.classList.remove('cursor-grabbing'); // Change cursor back to grab
    }
  };

  // Handle mouse leave event to ensure dragging stops if the mouse leaves the component
  const handleMouseLeave = (e: MouseEvent) => {
    if (isDragging) {
      handleMouseUp(e); // Call with the event argument
    }
  };

  // Prevent default image dragging behavior
  const preventImageDrag: React.DragEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    e.stopPropagation(); // Stop the event from propagating to parent elements
  };

  // Handle infinite scroll effect
  useEffect(() => {
    const slider = sliderRef.current;

    const handleScroll = () => {
      if (slider) {
        const { scrollLeft, scrollWidth, clientWidth } = slider;
        if (scrollLeft === 0) {
          slider.scrollLeft = scrollWidth - 2 * clientWidth;
        } else if (scrollLeft + clientWidth >= scrollWidth) {
          slider.scrollLeft = clientWidth;
        }
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
    <div className="relative overflow-hidden">
      <div
        ref={sliderRef}
        className="flex overflow-x-auto space-x-10 py-2 scroll-hidden cursor-grab"
      >
        {allImages.map((src, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-64 h-40"
            onDragStart={preventImageDrag} // Prevent default image dragging behavior
          >
            <Image
              src={src}
              alt={`Image ${index}`}
              width={256}
              height={160}
              className="object-cover rounded-lg select-none"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
