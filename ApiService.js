import axios from 'axios';

const API_BASE_URL = 'https://restcountries.com/v3.1/all';

const ApiService = {
  getCountries: async () => {
    try {
      const response = await axios.get(API_BASE_URL);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default ApiService;