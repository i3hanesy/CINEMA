import React from "react";
import PropTypes from "prop-types";

import ReviewScreen from "../review-screen/review-screen";

const ReviewsPage = (props) => {
  const {reviews} = props;

  const leftColComments = reviews.filter((_, index) => index % 2 === 0);
  const rightColComments = reviews.filter((_, index) => index % 2 !== 0);


  return (
    <React.Fragment>
      <div className="movie-card__reviews movie-card__row">
        <div className="movie-card__reviews-col">
          {leftColComments.map((comment) => (
            <ReviewScreen
              key ={`${comment.id}`}
              filmComment={comment}/>
          ))}
        </div>
        <div className="movie-card__reviews-col">
          {rightColComments.map((comment) => (
            <ReviewScreen
              key ={`${comment.id}`}
              filmComment={comment}/>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};


ReviewsPage.propTypes = {
  reviews: PropTypes.array.isRequired,
  id: PropTypes.number,
};

export default ReviewsPage;
