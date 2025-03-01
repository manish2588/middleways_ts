"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";

interface ImageSlider3Props {
  images: string[];
}

const ImageSlider3: React.FC<ImageSlider3Props> = ({ images }) => {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [scrollLeft, setScrollLeft] = useState<number>(0);
  const [scrollSpeed, setScrollSpeed] = useState<number>(0);

  const handleMouseDown = (e: MouseEvent) => {
    if (sliderRef.current) {
      setIsDragging(true);
      setStartX(e.pageX - sliderRef.current.offsetLeft);
      setScrollLeft(sliderRef.current.scrollLeft);
      sliderRef.current.classList.add("cursor-grabbing");
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || !sliderRef.current) return;
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (sliderRef.current) {
      sliderRef.current.classList.remove("cursor-grabbing");
    }
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      handleMouseUp();
    }
  };

  const preventImageDrag = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    slider.addEventListener("mousedown", handleMouseDown);
    slider.addEventListener("mousemove", handleMouseMove);
    slider.addEventListener("mouseup", handleMouseUp);
    slider.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      slider.removeEventListener("mousedown", handleMouseDown);
      slider.removeEventListener("mousemove", handleMouseMove);
      slider.removeEventListener("mouseup", handleMouseUp);
      slider.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isDragging, startX, scrollLeft]);

  const allImages = [...images, ...images, ...images];

  return (
    <div className="relative overflow-hidden bg-transparent w-[60vw]">
      <div
        ref={sliderRef}
        className="flex overflow-x-auto space-x-16 py-4 scroll-hidden cursor-grab"
        onMouseDown={(e) => handleMouseDown(e as unknown as MouseEvent)}
        onMouseMove={(e) => handleMouseMove(e as unknown as MouseEvent)}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        {allImages.map((src, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-64 h-36"
            onDragStart={preventImageDrag}
          >
            <Image
              src={src}
              alt={`Image ${index}`}
              width={256}
              height={144}
              className="object-cover rounded-lg select-none"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider3;
