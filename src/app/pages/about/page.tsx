import React from 'react';
import Image from 'next/image';
import Image1 from '../../../../public/images/logo.jpg';


const teamMembers = [
  {
    id: 1,
    name: "Rakshya Neupane",
    position: "Managing Director and CEO",
    image: Image1,
    desp: "Rakshya Neupane is the Managing Director and CEO of Kathmandu Films. Beginning her career in 2015 as a producer at Kathmandu Films, she has amassed extensive industry experience. Her leadership and vision have been crucial in driving the company towards success."
  },
  {
    id: 2,
    name: "Chandan Jha",
    position: "Producer",
    image: Image1,
    desp: "Of Kathmandu films and is globally known as Line-Producer and Fixer in Nepal who has an eye for perfection and has handled over 200 international companies varying from channels to film makers."
  },
  {
    id: 3,
    name: "Bijay KC",
    position: "Chief Editor",
    image: Image1,
    desp: "BIMAL K.C is a film Editor, Animator as well as Sound Engineer. He studied Film Making & Sound at Josai International University, Japan graduating in 2009. Since then he has been engaged in Nepali Film and Television Industry. He has worked on various projects of Music Videos, Visual Advertisements, Documentary films, Feature films, Short Films, Audio Advertising, Audio Jingle, Audio Drama, etc."
  },
  {
    id: 4,
    name: "Madan Thapa",
    position: "Director",
    image: Image1,
    desp: "After working in YouTube, Music Video and Ads, He start by assisting Director in Indian Film industry and also win Maverick Director Award. Being an Indo-Nepali, he as a dream of exploring and taking Nepal Cinema to Next Level, He serve the Indian film industry by telling unexplored diverse stories. His idea is to deliver good quality of films to the world and innovate new ways of film-Making."
  },
  {
    id: 5,
    name: "Prakash Himal",
    position: "Production Manager",
    image: Image1,
    desp: "As a Line Producer and Production Manager at Kathmandu Films, Prakash manages national and international projects. He supervises the production schedules, coordinates the resources, and ensures that all goes smoothly within the production process. Prakash manages budgeting, logistics, and crew coordination so that the film output meets the creative and operational goals of the project. Focused on efficiency and quality, he is dedicated to delivering top-notch results in every production."
  },
  {
    id:6,
    name: "Kaji",
    position :"Office Boy",
    image: Image1,
    desp : "Kaji Danuwar is working as an office assistant at Kathmandu Films. His role revolves around keeping the office atmosphere conducive for work, helping out in day-to-day errands, and ensuring that the team runs smoothly. He is committed to assisting in the accomplishment of goals of every project he is involved with through competent provision of services."
  }
];

function AboutUs() {
  return (
    <div>
      <div className="flex justify-center mt-24 mb-8">
        <h2 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white mt-8">Who We Are</h2>
      </div>
      <div className="w-full md:w-3/4 lg:w-2/3 mx-auto p-4 rounded-lg mt-4">
        <p className="mb-3 font-openSans font-light text-xl text-gray-950 dark:text-gray-400" style={{ textAlign: 'justify' }}>
          Established in 2007 in the heart of Nepal, Kathmandu Films has been a trusted partner for all filming needs in the region. Founded by Chandan Jha, renowned as the best fixer and line producer in Nepal, we boast a dedicated team of Asia’s finest crew members and a proficient logistics team. Equipped to tackle any challenge, our shared passion for filmmaking and industry professionalism drives us to deliver unparalleled results. Our client-centric approach ensures diverse service options tailored to your needs. Embark on your filming journey in Nepal with us and experience the dedication of our young, creative team. From script to screen, we go to great lengths to craft perfect frames for you. Work with Kathmandu Films for a seamless and professional filming experience in the captivating landscapes of Nepal. Start your project with us and witness your vision come to life!
        </p>
      </div>
      <div className="flex justify-center mt-8">
        <h2 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Our Team</h2>
      </div>
      <div className="w-full md:w-3/4 lg:w-2/3 mx-auto p-4 rounded-lg mt-4">
        <p className="mb-3 font-light font-openSans text-xl text-gray-950 dark:text-gray-400" style={{ textAlign: 'justify' }}>
          We are a group of professionals committed to innovative processes that promote continuous learning and raise the bar for organizational and individual results.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center bg-white p-6">
        {teamMembers.map(member => (
          <div key={member.id} className="relative p-4 bg-white  flex flex-col items-center">
            <div className="relative group">
              <Image
                className="rounded-full"
                src={member.image}
                alt={`${member.name} Profile Picture`}
                width={200}
                height={200}
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h2 className="text-white text-xl font-semibold">{member.name}</h2>
              </div>
            </div>
            <div className="text-center mt-4 w-96">
              <h2 className="text-xl font-semibold font-openSans">{member.name}</h2>
              <p className="text-gray-600 font-openSans">{member.position}</p>
              <p className="text-gray-700 mt-2 font-openSans" >{member.desp}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutUs;
