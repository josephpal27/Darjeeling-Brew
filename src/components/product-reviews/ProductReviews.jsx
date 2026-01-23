import './ProductReviews.css';
import RatingStars from './../rating-stars/RatingStars';

const ProductReviews = () => {
    return (
        <>
            <section className="product-reviews">
                <h3>Reviews</h3>
                <div className="review-dashboard">
                    <div className="review-dashboard-left">
                        <span>4.3</span>
                        <div className="stars">★★★★</div>
                    </div>
                    <div className="review-dashboard-right">
                        {/* 5 star */}
                        <div className="rating-prog">
                            <div className="rating-prog-left">
                                <RatingStars rating="5.0" />
                            </div>
                            <div className="rating-prog-right">
                                <progress value="80" max="100"></progress>
                            </div>
                        </div>
                        {/* 4 star */}
                        <div className="rating-prog">
                            <div className="rating-prog-left">
                                <RatingStars rating="4.0" />
                            </div>
                            <div className="rating-prog-right">
                                <progress value="70" max="100"></progress>
                            </div>
                        </div>
                        {/* 3 star */}
                        <div className="rating-prog">
                            <div className="rating-prog-left">
                                <RatingStars rating="3.0" />
                            </div>
                            <div className="rating-prog-right">
                                <progress value="45" max="100"></progress>
                            </div>
                        </div>
                        {/* 2 star */}
                        <div className="rating-prog">
                            <div className="rating-prog-left">
                                <RatingStars rating="2.0" />
                            </div>
                            <div className="rating-prog-right">
                                <progress value="30" max="100"></progress>
                            </div>
                        </div>
                        {/* 1 star */}
                        <div className="rating-prog">
                            <div className="rating-prog-left">
                                <RatingStars rating="1.0" />
                            </div>
                            <div className="rating-prog-right">
                                <progress value="10" max="100"></progress>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductReviews
