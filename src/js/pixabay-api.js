import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '49651039-b61b5892bf5245ff30c976637'; 

export async function getImagesByQuery(query, page) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page,
    per_page: 15,
    };
    
    try {
    const response = await axios.get(BASE_URL, { params });
    return response.data;
  } catch (error) {
    console.error('❌ Error fetching data from Pixabay:', error);
    throw error;
  }
}







