import React from 'react';

const Card = ({ title, description }) => {
  return (
    <div className="w-full max-w-xs bg-white font-openSans  rounded-lg p-2 text-center h-40 flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default Card;
