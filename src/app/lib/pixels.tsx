const API_KEY: string = 'Q01HrkOoqJH4TM7dWITQVRdkX0i9gRxProX0FclSuFs7DkTZmWfPxxSr';

interface Photo {
  id: number;
  src: {
    original: string;
    medium: string;
    small: string;
  };
  photographer: string;
}

interface Video {
  id: number;
  video_files: {
    link: string;
    quality: string;
    width: number;
    height: number;
  }[];
}

export const fetchPhotos = async (
  query: string, 
  page: number = 1, 
  perPage: number = 18
): Promise<Photo[]> => {
  const url = `https://api.pexels.com/v1/search?query=${query}&page=${page}&per_page=${perPage}`;

  const response = await fetch(url, {
    headers: {
      Authorization: API_KEY,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch photos');
  }

  const data = await response.json();
  return data.photos as Photo[];
};

export const fetchVideos = async (
  query: string, 
  page: number = 1, 
  perPage: number = 18
): Promise<Video[]> => {
  const url = `https://api.pexels.com/videos/search?query=${query}&page=${page}&per_page=${perPage}`;

  const response = await fetch(url, {
    headers: {
      Authorization: API_KEY,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch videos');
  }

  const data = await response.json();
  return data.videos as Video[];
};
