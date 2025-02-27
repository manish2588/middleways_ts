"use client";
import { useEffect, useState } from "react";
import { fetchVideos } from "../lib/pixels";

interface VideoFile {
  link: string;
  quality: string;
  width: number;
  height: number;
}

interface Video {
  id: number;
  video_files: VideoFile[];
}

interface VideoGallery1Props {
  query: string;
}

const VideoGallery1: React.FC<VideoGallery1Props> = ({ query }) => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getVideos = async () => {
      try {
        const data = await fetchVideos(query);
        setVideos(data);
      } catch (err) {
        setError((err as Error).message);
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
      {videos.map((video) => (
        <div key={video.id} className="p-2 border rounded h-60">
          <video controls className="w-full h-full object-cover">
            {video.video_files.length > 0 && (
              <source src={video.video_files[0].link} type="video/mp4" />
            )}
            Your browser does not support the video tag.
          </video>
        </div>
      ))}
    </div>
  );
};

export default VideoGallery1;
