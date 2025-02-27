"use client";

import { useEffect } from 'react';
import { useNavbarContext } from '../../context/NavbarContext'; // Adjust the path if needed
import Image from 'next/image';
import image1 from "../../../../public/images/A.png";
import image2 from "../../../../public/images/B.png";
import image3 from "../../../../public/images/C.png";
import image4 from "../../../../public/images/D.png";
import image5 from "../../../../public/images/F.png";
import Bgimage from "../../../../public/images/Film2.png";
import ServiceCard from '../../components/ServiceCard';
import Head from 'next/head';
import type { StaticImageData } from 'next/image';

// Define the type for the service object
interface Service {
  image: StaticImageData; // `StaticImageData` type is used for imported images in Next.js
  title: string;
  description: string;
  moreDescription: string;
  alignLeft?: boolean; // Optional, used for alignment
}

const services: Service[] = [
  {
    image: image1,
    title: "Expert Cinematography",
    description: "Our visual experts in cinematography can help your brand gain vision and spread your message through captivating videos. With professional cinematographers on our team, we make sure to portray your message beautifully through the art of cinematography. Being one of our core strengths, we have made films of varied genre and length, including feature films, shorts, videos, and documentary films for a number of social and development organizations and agencies working in Nepal.",
    moreDescription: "We are a one-stop solution for all kinds of filmmaking services from pre to post, including writing and researching, scriptwriting, filming, and total post production work, including editing, titling, subtitling, sound design and mixing, color grading, VFX and animation, and DCP preparation. We also provide production services like line productions, crew, equipment rentals, as well as location scouting for your shooting requirements in Nepal.",
  },
  {
    image: image3,
    title: "Production Management",
    description: "Our team is responsible for overseeing the entire production process, including budgeting, scheduling, hiring crew members, coordinating with directors and other creative personnel, and ensuring that the film is completed on time. During production, we supervise all on-set activities, ensuring smooth operations and maintaining clear communication between departments.",
    moreDescription: "In post-production, we oversee editing, sound design, visual effects, and other processes to ensure the final product meets the highest standards of quality.",
  },
  {
    image: image4,
    title: "Content Development for Social Media",
    description: "We develop a range of content for social media platforms including Facebook and Instagram. We also provide our expertise services for managing the social media platforms, both day-to-day as well as strategic services to boost their effectiveness and impact by enhancing audience reach and engagement.",
    moreDescription: "Additional details about the technology acquisitions, including the companies involved and the impact on the industry.",
  },
  {
    image: image2,
    title: "Advanced Updated Equipment Available",
    description: "We pride ourselves on providing the latest and most advanced equipment to ensure the highest quality production for your film projects. Our inventory includes state-of-the-art cameras that capture stunning, high-resolution footage, offering a range of options to suit different production needs. We also supply advanced lighting equipment.",
    moreDescription: "We have been providing photography services to some of the major social and development organizations and agencies working in Nepal.",
  },
  {
    image: image5,
    title: "VFX and SFX Specialization",
    description: "VFX and SFX bridge the gap between reality and imagination, by using these authentic digital content from 2D and 3D animations we generate greater impact. Our team’s architectural visualization and seamless visual effects are integrated into your story, resulting in films that pack a punch. Some of VFX & SFX services include chroma keying, set extension, tracking, Live Action 3D integration, and particle FX. Fire, water, air, smoke effects, and more.",
    moreDescription: "We have been providing photography services to some of the major social and development organizations and agencies working in Nepal.",
  },
];

const ServicePage: React.FC = () => {
  const { setIsNavbarTransparent } = useNavbarContext();

  useEffect(() => {
    setIsNavbarTransparent(true);

    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsNavbarTransparent(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      setIsNavbarTransparent(false);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [setIsNavbarTransparent]);

  return (
    <div className="relative">
      <Head>
        <title>Our Services | Middleways Films</title>
        <meta name="description" content="Explore the diverse range of services offered by Middleways Films, including expert cinematography, production management, and more. Contact us for your film production needs." />
        <meta name="keywords" content="Cinematography, Film Production, Social Media Content, Equipment Rental, VFX, SFX" />
        <meta property="og:title" content="Our Services | Middleways Films" />
        <meta property="og:description" content="Explore the diverse range of services offered by Middleways Films, including expert cinematography, production management, and more. Contact us for your film production needs." />
        <meta property="og:image" content="/path-to-your-image.jpg" /> {/* Update with actual image path */}
        <meta property="og:url" content="https://yourwebsite.com/services" />
        <link rel="canonical" href="https://yourwebsite.com/services" />
      </Head>

      <div className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src={Bgimage}
            alt="Service Background"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="w-full md:w-3/4 lg:w-2/3 mx-auto bg-slate-100 p-4 rounded-lg mt-6">
        <div className="w-full flex justify-center">
          <h1 className="mb-4 text-3xl font-large text-center font-openSans">What We Do</h1>
        </div>
        <p className="mb-3 font-light font-openSans text-gray-500 dark:text-gray-400 text-gray-950 tracking-wide" style={{ textAlign: 'justify' }}>
          Middleway films has continually pushed the envelope in all areas, producing entertaining content
          and capturing audiences of Nepal on a wide range of platforms. Our goal has been and always will be
          to reach a global audience with top-notch, ground-breaking tales that combine quality, innovation, and attention to detail.
        </p>
      </div>

      {services.map((service, index) => (
        <ServiceCard
          key={index}
          {...service}
          alignLeft={index % 2 === 0} // Alternates the alignment based on index
        />
      ))}
    </div>
  );
};

export default ServicePage;
