import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '38482196-313c8fae61b907697b0558da7';

export default class PixabayApiService {
  constructor() {
    this.page = 1;
    this.searchQuery = '';
  }

  async fetchPhotos() {
    const searchParams = new URLSearchParams({
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      per_page: 40,
      page: this.page,
      q: this.searchQuery,
      key: API_KEY,
    });

    const { data } = await axios(`?${searchParams}`);
    this.incrementPage();
    return data;
  }

  incrementPage() {
    this.page += 1;
  }
  resetPage() {
    this.page = 1;
  }
}

export const pixabayApiService = new PixabayApiService();
