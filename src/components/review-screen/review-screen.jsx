import React from "react";
import PropTypes from "prop-types";
import {formatDate} from "../../utils/film.js";


const ReviewScreen = (props) => {
  const {filmComment} = props;
  const {comment, commentAutor, rating, commentDate} = filmComment;

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment}</p>

        <footer className="review__details">
          <cite className="review__author">{commentAutor}</cite>
          <time
            className="review__date"
            dateTime={formatDate(commentDate, `YYYY-M-D`)}>
            {formatDate(commentDate, `MMMM DD, YYYY`)}
          </time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating}</div>
    </div>
  );
};

ReviewScreen.propTypes = {
  filmComment: PropTypes.shape({
    comment: PropTypes.string.isRequired,
    commentAutor: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    commentDate: PropTypes.string.isRequired,
  }).isRequired,
};

export default ReviewScreen;
