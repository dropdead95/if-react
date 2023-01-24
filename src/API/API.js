import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://if-student-api.onrender.com/api/'
});

export const hotelsAPI = {
  async getHotels() {
    const { data: hotels } = await instance.get('hotels/popular');
    return hotels;
  },
  async searchAvailableHotels(searchValue) {
    const { data: availableHotels } = await instance.get('hotels', {
      params: {
        search: searchValue
      }
    });
    return availableHotels;
  }
};
