import { useEffect, useState } from "react";
import { fetchReviews, submitReview } from "../services/api";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState("");
  const bookId = "1"; // Change this dynamically

  useEffect(() => {
    const getReviews = async () => {
      const data = await fetchReviews(bookId);
      setReviews(data);
    };
    getReviews();
  }, []);

  const handleSubmit = async () => {
    await submitReview(bookId, { review_text: newReview });
    setNewReview("");
    setReviews([...reviews, { review_text: newReview }]); // Optimistic update
  };

  return (
    <div>
      <h1>Reviews</h1>
      <ul>
        {reviews.map((r, index) => (
          <li key={index}>{r.review_text}</li>
        ))}
      </ul>
      <textarea value={newReview} onChange={(e) => setNewReview(e.target.value)} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Reviews;
