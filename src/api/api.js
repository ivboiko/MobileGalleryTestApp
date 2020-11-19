import {API_URL, API_ACCESS_KEY} from '@env';

export const unsplashAPI = {
  getPhotos(pageNumber) {
    return fetch(
      `${API_URL}/photos?client_id=${API_ACCESS_KEY}&page=${pageNumber}`,
    )
      .then((res) => res.json())
      .catch((err) => {
        console.log(err, 'from api layer');
        throw new Error('Data fetching error');
      });
  },
};
