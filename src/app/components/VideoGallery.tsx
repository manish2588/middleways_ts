// components/VideoGallery.js
import React from 'react';
import Button from './Button';

const videos = [
  {
    title: 'Project 4',
    url: 'https://www.youtube.com/embed/PfgGa_UENFs',
    link: 'https://www.youtube.com/watch?v=PfgGa_UENFs',
  },
  {
    title: 'Project 1',
    url: 'https://www.youtube.com/embed/fQkAWSgXSg8',
    link: 'https://www.youtube.com/watch?v=fQkAWSgXSg8',
  },
  {
    title: 'Project 2',
    url: 'https://www.youtube.com/embed/g26W-GUhsCQ',
    link: 'https://www.youtube.com/watch?v=g26W-GUhsCQ',
  },
  {
    title: 'Project 3',
    url: 'https://www.youtube.com/embed/dao3msTsVjk',
    link: 'https://www.youtube.com/watch?v=dao3msTsVjk',
  },
 
  // Add more video objects here
];

const VideoGallery = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className=" mb-8 text-center text-2xl underline underline-offset-8 decoration-blue-500 font-semibold">OUR PROJECTS</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {videos.map((video, index) => (
          <div key={index} className="video-item relative">
            <iframe
              className="w-full h-80" // Increased height
              src={video.url}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="absolute bottom-2 right-2 bg-gray-500 bg-opacity-50 text-white text-sm p-1 rounded flex items-center">
              
             
            </div>
          </div>
        ))}
      </div>
      <div className='flex justify-center'>
        <Button
          className="mb-4 font-serif mt-8 bg-transparent text-black border border-black hover:bg-black hover:text-white hover:border-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-thin text-sm w-full sm:w-auto px-5 py-2 text-center"
          label="VIEW ALL PROJECTS"
        />
        </div>
    </div>
  );
};

export default VideoGallery;
