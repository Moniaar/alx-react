import axios from "axios";

const API_URL = "http://localhost:5000"; // Change this when you deploy

export const fetchReviews = async (bookId) => {
  const response = await axios.get(`${API_URL}/reviews/${bookId}`);
  return response.data;
};

export const submitReview = async (bookId, review) => {
  await axios.post(`${API_URL}/reviews`, { bookId, ...review });
};

export const subscribeNewsletter = async (email) => {
  await axios.post(`${API_URL}/subscribe`, { email });
};

export default api;
