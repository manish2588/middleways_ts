import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const InfoBoxes = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mt-6">
      
      <div className="relative flex items-center w-full sm:w-64">
        <div className="relative w-full bg-transparent border border-blue-500 text-black rounded-l-lg overflow-hidden transition-all duration-500 group p-2">
          <div className="absolute inset-0 flex items-center justify-center bg-blue-500 text-white transform -translate-x-full transition-transform duration-500 group-hover:translate-x-0 p-2">
            <div className="text-center">
              <p className="text-lg">01-528029</p>
            </div>
          </div>
          <div className="flex items-center justify-center text-lg font-semibold transition-opacity duration-500 group-hover:opacity-0">
            Call Us
          </div>
        </div>
        <div className="w-auto h-full flex items-center bg-blue-500 text-white p-2 rounded-r-lg">
          <FaArrowRight />
        </div>
      </div>

      
      <div className="relative flex items-center w-full sm:w-64">
        <div className="relative w-full bg-transparent border border-blue-500 text-black rounded-l-lg overflow-hidden transition-all duration-500 group p-2">
          <div className="absolute inset-0 flex items-center justify-center bg-blue-500 text-white transform -translate-x-full transition-transform duration-500 group-hover:translate-x-0 p-2">
            <div className="text-center">
              <p className="text-lg">Lalitpur, Kathmandu</p>
            </div>
          </div>
          <div className="flex items-center justify-center text-lg font-semibold transition-opacity duration-500 group-hover:opacity-0">
            Visit Us
          </div>
        </div>
        <div className="w-auto h-full flex items-center bg-blue-500 text-white p-2 rounded-r-lg">
          <FaArrowRight />
        </div>
      </div>

      
      <div className="relative flex items-center w-full sm:w-64">
        <div className="relative w-full bg-transparent border border-blue-500 text-black rounded-l-lg overflow-hidden transition-all duration-500 group p-2">
          <div className="absolute inset-0 flex items-center justify-center bg-blue-500 text-white transform -translate-x-full transition-transform duration-500 group-hover:translate-x-0 p-2">
            <div className="text-center">
              <p className="text-lg">middlewaysfilms@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center justify-center text-lg font-semibold transition-opacity duration-500 group-hover:opacity-0">
            Email
          </div>
        </div>
        <div className="w-auto h-full flex items-center bg-blue-500 text-white p-2 rounded-r-lg">
          <FaArrowRight />
        </div>
      </div>
    </div>
  );
};

export default InfoBoxes;
