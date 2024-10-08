const API_KEY = '46396055-d69cef0b7d1de44edfbae421d';
const BASE_URL = 'https://pixabay.com/api/';

export const searchImages = searchRequest => {
  const options = new URLSearchParams({
    key: API_KEY,
    q: searchRequest,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`${BASE_URL}?${options}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};
