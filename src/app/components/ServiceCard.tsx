import { useState } from 'react';
import Image from 'next/image';
import Button from '../components/Button'; // Adjust the path if necessary

// Define types for the props
interface ServiceCardProps {
  image: string; // URL of the image
  title: string; // Title of the card
  description: string; // Short description
  moreDescription?: string; // Additional description, optional
  alignLeft?: boolean; // Whether the image should be aligned to the left or right, optional
}

const ServiceCard: React.FC<ServiceCardProps> = ({ image, title, description, moreDescription, alignLeft }) => {
  const [showMore, setShowMore] = useState(false);

  // Button properties stored in an object
  const buttonProps = {
    onClick: () => setShowMore(!showMore),
    className: " font-serif bg-transparent text-black border border-blue-500 hover:bg-blue-500 hover:text-black hover:border-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-lg w-full sm:w-auto px-2 dark:bg-transparent dark:hover:bg-blue-600 dark:focus:ring-blue-800",
    label: showMore ? 'Read less' : 'Read more',
  };

  return (
    <div className="mt-20 flex justify-center">
      {alignLeft ? (
        // Render card with image on the left
        <div className="flex items-start text-justify">
          <Image src={image} width={300} height={240} alt={title} />
          <div
            className="mx-8 flex flex-col justify-between flex-grow transition-all duration-300 ease-in-out"
            style={{ width: '600px', maxHeight: showMore ? '500px' : '300px', overflow: 'hidden' }}
          >
            <div>
              <h5 className="mb-2 text-2xl font-medium font-openSans">{title}</h5>
              <p className="mb-3 font-light text-black dark:text-gray-400 tracking-wide font-openSans">
                {description}
              </p>
              {showMore && (
                <p className="mb-3 font-light text-black dark:text-gray-400 tracking-wide font-openSans">
                  {moreDescription}
                </p>
              )}
            </div>
            {/* Read more button */}
            <div className="flex justify-start">
              <Button
                onClick={buttonProps.onClick}
                className={buttonProps.className}
                label={buttonProps.label}
              />
            </div>
          </div>
        </div>
      ) : (
        // Render card with image on the right
        <div className="flex items-start text-justify">
          <div
            className="mx-8 flex flex-col justify-between flex-grow transition-all duration-300 ease-in-out"
            style={{ width: '600px', maxHeight: showMore ? '500px' : '300px', overflow: 'hidden' }}
          >
            <div>
              <h5 className="mb-2 text-2xl font-medium font-openSans">{title}</h5>
              <p className="mb-3 font-light text-black dark:text-gray-400 tracking-wide font-openSans">
                {description}
              </p>
              {showMore && (
                <p className="mb-3 font-light text-black dark:text-gray-400 tracking-wide font-openSans">
                  {moreDescription}
                </p>
              )}
            </div>
            {/* Read more button */}
            <div className="flex justify-start">
              <Button
                onClick={buttonProps.onClick}
                className={buttonProps.className}
                label={buttonProps.label}
              />
            </div>
          </div>
          <Image src={image} width={300} height={240} alt={title} />
        </div>
      )}
    </div>
  );
};

export default ServiceCard;
