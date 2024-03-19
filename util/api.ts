
import axios from 'axios';

export const fetchPhotos = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/photos');
    return response.data;
  } catch (error) {
    console.error('Error fetching photos:', error);
    return [];
  }
};

export const fetchPosts = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
};
