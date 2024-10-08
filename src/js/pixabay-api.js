import axios from 'axios';

const API_KEY = '46396055-d69cef0b7d1de44edfbae421d';
const BASE_URL = 'https://pixabay.com/api/';
const PER_PAGE = 15;

export const searchImages = async (query, page = 1) => {
  const options = {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page,
      per_page: PER_PAGE,
    },
  };

  try {
    const response = await axios.get(BASE_URL, options);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
