import React from "react";
import PropTypes from "prop-types";
import {filmLevel} from "../../utils/film.js";

const OverViewPage = (props) => {
  const {filmData} = props;
  const {description, rating, scoresCount, starring, director} = filmData;

  return (
    <React.Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">{rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{filmLevel(rating)}</span>
          <span className="movie-rating__count">{scoresCount} ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>{description}</p>

        <p className="movie-card__director"><strong>Director: {director}</strong></p>

        <p className="movie-card__starring"><strong>Starring: {starring.slice(0, 4).join(`, `)} and other</strong></p>
      </div>
    </React.Fragment>
  );
};


OverViewPage.propTypes = {
  filmData: PropTypes.shape({
    starring: PropTypes.array.isRequired,
    rating: PropTypes.number.isRequired,
    scoresCount: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
  }).isRequired,
};

export default OverViewPage;
