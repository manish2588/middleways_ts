"use client";
import { useState } from "react";
import Image from "next/image";
import Button from "../components/Button";
import {motion} from 'framer-motion'
import { StaticImageData } from 'next/image';
interface ServiceCardProps {
  image: StaticImageData;
  title: string;
  description: string;
  moreDescription?: string;
  alignLeft?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  image,
  title,
  description,
  moreDescription = "",
  alignLeft = false,
}) => {
  const [showMore, setShowMore] = useState<boolean>(false);

  return (
    <motion.div className="mt-10 flex justify-center"
    layout
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:0.5,type:"spring",damping:100,stiffness:100}}
    
    >
      <div
        className={`flex flex-col ${
          alignLeft ? "sm:flex-row" : "sm:flex-row-reverse"
        } items-center sm:items-start text-justify w-full max-w-4xl`}
      >
        <Image
          src={image}
          width={300}
          height={240}
          alt={title}
          className="sm:w-1/2 w-full object-cover"
        />
        <motion.div className="p-4 sm:p-8 flex flex-col justify-between flex-grow transition-all duration-300 ease-in-out w-full sm:w-1/2"
        layout
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

          <motion.div className="flex justify-start mt-4">
            <Button
              onClick={() => setShowMore(!showMore)}
              className="font-serif bg-transparent text-black border border-blue-500 hover:bg-blue-500 hover:text-black hover:border-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-lg w-full sm:w-auto px-2 dark:bg-transparent dark:hover:bg-blue-600 dark:focus:ring-blue-800"
              label={showMore ? "Read less" : "Read more"}
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
