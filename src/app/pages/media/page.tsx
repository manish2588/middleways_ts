import React from 'react';
import Link from 'next/link';

const FullScreenBackground = () => {
  return (
    <div className="relative h-screen bg-blue-300">
      <div className="absolute inset-0">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
        >
          <source src="/videos/5662871-sd_640_360_25fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black">
        <div className="flex space-x-8">
          <Link href="/pages/photos" className="font-openSans text-3xl underline underline-offset-8 decoration-blue-500 font-bold">
           
              Photos
            
          </Link>
          <Link href="/pages/videos" className="font-openSans text-3xl underline underline-offset-8 decoration-blue-500 font-bold">
            
              Videos
            
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FullScreenBackground;
