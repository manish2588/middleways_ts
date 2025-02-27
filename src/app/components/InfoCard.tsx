import React from 'react';

interface InfoCardProps {
  icon: React.ReactNode; // Define type for icon
  title: string; // Define type for title
  description: string; // Define type for description
  href: string; // Define type for href
}

const InfoCard: React.FC<InfoCardProps> = ({ icon, title, description, href }) => {
  return (
    <div className="flex flex-col items-center p-4 border rounded-lg shadow-sm min-w-[250px] h-32 justify-center">
      <div className="text-3xl mb-2 transition-transform duration-300 transform hover:scale-125">
        {icon} {/* Render the icon */}
      </div>
      <h4 className="font-bold text-lg mb-1 text-center">{title}</h4>
      <a
        href={href}
        className="text-sm text-gray-700 text-center transition-colors duration-300 hover:text-blue-500"
        target={title === 'Email Us' ? '_self' : '_blank'}
        rel="noopener noreferrer"
      >
        <span className="transition-transform duration-300 transform hover:scale-105">{description}</span>
      </a>
    </div>
  );
};

export default InfoCard;
