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

 
  const handleMouseDown: (e: MouseEvent) => void = (e) => {
    if (sliderRef.current) {
      setIsDragging(true);
      setStartX(e.pageX - sliderRef.current.offsetLeft);
      setScrollLeft(sliderRef.current.scrollLeft);
      sliderRef.current.classList.add('cursor-grabbing');
    }
  };
  const handleMouseMove: (e: MouseEvent) => void = (e) => {
    if (!isDragging || !sliderRef.current) return;
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2; 
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp: (e: MouseEvent) => void = () => {
    setIsDragging(false);
    if (sliderRef.current) {
      sliderRef.current.classList.remove('cursor-grabbing'); 
    }
  };

  
  const handleMouseLeave: (e: MouseEvent) => void = () => {
    if (isDragging) {
      handleMouseUp(); 
    }
  };

  
  const preventImageDrag: React.DragEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  
  useEffect(() => {
    const slider = sliderRef.current;
    const handleScroll = () => {
      if (!slider) return;
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
    <div className="relative overflow-hidden bg-transparent w-[60vw]">
      <div
        ref={sliderRef}
        className="flex overflow-x-auto space-x-16 py-4 scroll-hidden cursor-grab"
      >
        {allImages.map((src, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-32 h-16" 
            onDragStart={preventImageDrag} 
          >
            <Image
              src={src}
              alt={`Image ${index}`}
              width={128} 
              height={70} 
              className="object-cover rounded-lg select-none"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
