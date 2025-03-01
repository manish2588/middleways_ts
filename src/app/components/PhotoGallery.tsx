"use client";
import { useEffect, useState } from "react";
import { fetchPhotos } from "../lib/pixels";

interface PhotoSrc {
  original: string;
  medium: string;
  small: string;
}

interface Photo {
  id: number;
  src: PhotoSrc;
  photographer: string;
  alt?: string;
}

interface PhotoGalleryProps {
  query: string;
}

const PhotoGallery: React.FC<PhotoGalleryProps> = ({ query }) => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getPhotos = async () => {
      try {
        const data = await fetchPhotos(query);
        setPhotos(data);
      } catch (err) {
        setError((err as Error).message);
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
      {photos.map((photo) => (
        <div key={photo.id} className="p-2 border rounded h-60">
          <img
            src={photo.src.medium}
            alt={photo.alt}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default PhotoGallery;
