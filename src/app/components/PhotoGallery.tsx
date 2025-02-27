
"use client"
import { useEffect, useState } from 'react';
import { fetchPhotos } from '../lib/pixels';

const PhotoGallery = ({ query }) => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPhotos = async () => {
      try {
        const data = await fetchPhotos(query);
        setPhotos(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getPhotos();
  }, [query]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {photos.map(photo => (
        <div key={photo.id} className="p-2 border rounded h-60">
          <img src={photo.src.medium} alt={photo.alt} className="w-full h-full object-cover" />
        </div>
      ))}
    </div>
  );
};

export default PhotoGallery;
