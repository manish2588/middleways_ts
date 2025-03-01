"use client";

import Image from "next/image";
import { useRef, useEffect, useCallback } from "react";

interface ImageSliderProps {
  images: string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);

  const handleMouseDown = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (sliderRef.current) {
      isDraggingRef.current = true;
      startXRef.current = e.pageX - sliderRef.current.offsetLeft;
      scrollLeftRef.current = sliderRef.current.scrollLeft;
      sliderRef.current.classList.add("cursor-grabbing");
    }
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current || !sliderRef.current) return;
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 2;
    sliderRef.current.scrollLeft = scrollLeftRef.current - walk;
  }, []);

  const handleMouseUp = useCallback(() => {
    isDraggingRef.current = false;
    if (sliderRef.current) {
      sliderRef.current.classList.remove("cursor-grabbing");
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (isDraggingRef.current) {
      handleMouseUp(); // Now it works without an argument
    }
  }, [handleMouseUp]);

  const preventImageDrag = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    slider.addEventListener("mousedown", (e) => handleMouseDown(e as any));
    slider.addEventListener("mousemove", (e) => handleMouseMove(e as any));
    slider.addEventListener("mouseup", () => handleMouseUp());
    slider.addEventListener("mouseleave", () => handleMouseLeave());

    return () => {
      slider.removeEventListener("mousedown", (e) => handleMouseDown(e as any));
      slider.removeEventListener("mousemove", (e) => handleMouseMove(e as any));
      slider.removeEventListener("mouseup", () => handleMouseUp());
      slider.removeEventListener("mouseleave", () => handleMouseLeave());
    };
  }, [handleMouseDown, handleMouseMove, handleMouseUp, handleMouseLeave]);

  return (
    <div className="relative overflow-hidden bg-transparent w-[60vw]">
      <div
        ref={sliderRef}
        className="flex overflow-x-auto space-x-16 py-4 scroll-hidden cursor-grab"
      >
        {images.map((src, index) => (
          <div key={index} className="flex-shrink-0 w-32 h-16" onDragStart={preventImageDrag}>
            <Image src={src} alt={`Image ${index}`} width={128} height={70} className="object-cover rounded-lg select-none" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
