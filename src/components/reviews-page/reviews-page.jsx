import React from "react";
import PropTypes from "prop-types";
import ReviewScreen from "../review-screen/review-screen";


const ReviewsPage = (props) => {
  const {filmComments} = props;

  const leftColComments = filmComments.filter((_, index) => index % 2 === 0);
  const rightColComments = filmComments.filter((_, index) => index % 2 !== 0);


  return (
    <React.Fragment>
      <div className="movie-card__reviews movie-card__row">
        <div className="movie-card__reviews-col">
          {leftColComments.map((comment, i) => (
            <ReviewScreen
              key ={`${i}`}
              filmComment={comment}/>
          ))}
        </div>
        <div className="movie-card__reviews-col">
          {rightColComments.map((comment, i) => (
            <ReviewScreen
              key ={`${i}`}
              filmComment={comment}/>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

ReviewsPage.propTypes = {
  filmComments: PropTypes.array.isRequired,
};

export default ReviewsPage;
