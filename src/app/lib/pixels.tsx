
const API_KEY = 'Q01HrkOoqJH4TM7dWITQVRdkX0i9gRxProX0FclSuFs7DkTZmWfPxxSr';

export const fetchPhotos = async (query, page = 1, perPage = 18) => {
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
  return data.photos;
};

export const fetchVideos = async (query, page = 1, perPage = 18) => {
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
  return data.videos;
};
