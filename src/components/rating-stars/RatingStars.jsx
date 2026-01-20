import './RatingStars.css';

const RatingStars = ({ rating }) => {
  const fullStars = Math.floor(rating);

  return (
    <div className="rating">
      <span id="rating-num">{rating}</span>
      {[...Array(5)].map((_, index) => (
        <span key={index} id="rating-stars">
          {index < fullStars ? "★" : "☆"}
        </span>
      ))}
    </div>
  );
};

export default RatingStars;