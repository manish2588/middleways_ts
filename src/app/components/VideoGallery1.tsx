
"use client"
import { useEffect, useState } from 'react';
import { fetchVideos } from '../lib/pixels';

const VideoGallery1 = ({ query }) => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getVideos = async () => {
      try {
        const data = await fetchVideos(query);
        setVideos(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getVideos();
  }, [query]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {videos.map(video => (
        <div key={video.id} className="p-2 border rounded h-60">
          <video controls className="w-full h-full object-cover">
            <source src={video.video_files[0].link} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ))}
    </div>
  );
};

export default VideoGallery1;
