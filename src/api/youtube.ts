import axios from 'axios';
import { YOUTUBE_API_KEY } from '@env';

const BASE_URL = 'https://www.googleapis.com/youtube/v3';

export const searchVideos = async (query: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/search`, {
      params: {
        part: 'snippet',
        maxResults: 10,
        q: query,
        type: 'video',
        key: YOUTUBE_API_KEY,
      },
    });

    return response.data.items;
  } catch (error) {
    console.error('YouTube API error:', error);
    return [];
  }
};
