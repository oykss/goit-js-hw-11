const API_KEY = '46231257-9f78b377890ff4b2ac35cee0f';
const BASE_URL = 'https://pixabay.com/api/';

export const getPhotos = requestValue => {
  const searchParams = new URLSearchParams({
    key: API_KEY,
    q: requestValue,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`${BASE_URL}?${searchParams}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};
