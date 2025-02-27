"use client";
import { useEffect } from 'react';
import { useNavbarContext } from '../../context/NavbarContext';
import Image from 'next/image';
import image1 from "../../../../public/images/A.png";
import image2 from "../../../../public/images/B.png";
import image3 from "../../../../public/images/C.png";
import image4 from "../../../../public/images/D.png";
import image5 from "../../../../public/images/F.png";
import Bgimage from "../../../../public/images/Film2.png";
import ServiceCard from '../../components/ServiceCard';
import Head from 'next/head';

const ServicePage = () => {
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

  const services = [
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

  return (
    <div className="relative">
      <Head>
        <title>Our Services | Middleways Films</title>
        <meta name="description" content="Explore the diverse range of services offered by Middleways Films, including expert cinematography, production management, and more. Contact us for your film production needs." />
        <meta name="keywords" content="Cinematography, Film Production, Social Media Content, Equipment Rental, VFX, SFX" />
        <meta property="og:title" content="Our Services | Middleways Films" />
        <meta property="og:description" content="Explore the diverse range of services offered by Middleways Films, including expert cinematography, production management, and more. Contact us for your film production needs." />
        <meta property="og:image" content="/path-to-your-image.jpg" /> 
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

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center gap-12">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} alignLeft={index % 2 === 0} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
