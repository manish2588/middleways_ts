"use client";

import Image from 'next/image';
import { useRef, useState, useEffect, MouseEvent, DragEvent } from 'react';

interface ImageSlider3Props {
  images: string[]; // Array of image URLs
}

const ImageSlider3: React.FC<ImageSlider3Props> = ({ images }) => {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [scrollLeft, setScrollLeft] = useState<number>(0);
  const [scrollSpeed, setScrollSpeed] = useState<number>(0);

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    if (sliderRef.current) {
      setIsDragging(true);
      setStartX(e.pageX - sliderRef.current.offsetLeft);
      setScrollLeft(sliderRef.current.scrollLeft);
      sliderRef.current.classList.add('cursor-grabbing');
    }
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !sliderRef.current) return;
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (sliderRef.current) {
      sliderRef.current.classList.remove('cursor-grabbing');
    }
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      handleMouseUp();
    }
  };

  const preventImageDrag = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const startScrolling = () => {
      setScrollSpeed(1);
    };

    const stopScrolling = () => {
      setScrollSpeed(0);
    };

    const animate = () => {
      if (!slider) return;
      slider.scrollLeft += scrollSpeed;
      if (slider.scrollLeft >= slider.scrollWidth / 2) {
        slider.scrollLeft = slider.scrollWidth / 4;
      }
      if (scrollSpeed > 0) {
        requestAnimationFrame(animate);
      }
    };

    startScrolling();
    animate();

    return () => {
      stopScrolling();
    };
  }, [scrollSpeed]);

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
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        {allImages.map((src, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-64 h-36" // Adjust size here
            onDragStart={preventImageDrag}
          >
            <Image
              src={src}
              alt={`Image ${index}`}
              width={256} // Adjust width here
              height={144} // Adjust height here
              className="object-cover rounded-lg select-none"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider3;
