// pages/contact.tsx
"use client"
import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import InfoCard from '../../components/InfoCard';
import Card from '../../components/Card';
import ContactForm from '../../components/ContactForm';

// Define types for card and infoCard objects
interface CardData {
  title: string;
  description: string;
}

interface InfoCardData {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}

const Contact: React.FC = () => {
  const handleSubmit = () => {
    console.log('Form submitted');
  };

  const cards: CardData[] = [
    { title: "Experienced Crew", description: "Our crew members have a high experience working in filming sector of Nepal." },
    { title: "Complete Filming Solution", description: "From planning to delivery, we provide you with a high quality and a complete solution to your needs." },
    { title: "High Quality Equipment", description: "We provide all the latest technologies and equipment as per requirements." },
    { title: "Filming in Nepal", description: "We have been producing high-quality films and documentaries in Nepal." },
  ];

  const infoCards: InfoCardData[] = [
    { icon: <FaPhoneAlt className="text-blue-500 text-3xl" />, title: "Call Us", description: "01-528029", href: "tel:01528029" },
    { icon: <FaEnvelope className="text-blue-500 text-3xl" />, title: "Email Us", description: "middlewayfilms@gmail.com", href: "mailto:middlewayfilms@gmail.com" },
    { icon: <FaMapMarkerAlt className="text-blue-500 text-3xl" />, title: "Main Office", description: "Kupondole, Lalitpur", href: "https://www.google.com/maps/search/?api=1&query=Kupondole,+Lalitpur" },
  ];

  return (
    <div className="mt-20 flex flex-col items-center bg-white-300 min-h-screen">
      <div className='mt-12 mb-8 text-left'>
        <h1 className='font-openSans text-3xl underline underline-offset-8 decoration-blue-500 font-bold'>
          Quick Fact About Us
        </h1>
      </div>

      <div className="p-2 ">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          {cards.slice(0, 3).map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
        <div className="flex justify-center mt-1">
          {cards.slice(3).map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </div>

      <div className="text-center">
        <h2 className='text-3xl font-bold underline underline-offset-8 decoration-blue-500 font-openSans'>Contact Us</h2>
      </div>

      <div className="flex flex-col lg:flex-row lg:justify-between w-full max-w-4xl px-6 py-4 gap-8">
        <div className="w-full lg:w-2/3 bg-white p-6 rounded-lg">
          <ContactForm onSubmit={handleSubmit} />
        </div>

        <div className="w-full lg:w-1/3 bg-white p-6 rounded-lg">
          <div className="flex flex-col gap-6">
            {infoCards.map((infoCard, index) => (
              <InfoCard
                key={index}
                icon={infoCard.icon}
                title={infoCard.title}
                description={infoCard.description}
                href={infoCard.href}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
