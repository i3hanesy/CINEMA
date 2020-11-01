import React from "react";
import PropTypes from "prop-types";
import {filmLevel} from "../../utils/film.js";

const OverViewPage = (props) => {
  const {filmData} = props;
  const {filmDescription, filmRating, voiceCount, filmActors, filmRegisseur} = filmData;

  return (
    <React.Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">{filmRating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{filmLevel(filmRating)}</span>
          <span className="movie-rating__count">{voiceCount} ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>{filmDescription}</p>

        <p>{filmDescription}</p>

        <p className="movie-card__director"><strong>Director: {filmRegisseur}</strong></p>

        <p className="movie-card__starring"><strong>Starring: {filmActors.slice(0, 4).join(`, `)} and other</strong></p>
      </div>
    </React.Fragment>
  );
};


OverViewPage.propTypes = {
  filmData: PropTypes.shape({
    filmActors: PropTypes.array.isRequired,
    filmRating: PropTypes.string.isRequired,
    voiceCount: PropTypes.string.isRequired,
    filmDescription: PropTypes.string.isRequired,
    filmRegisseur: PropTypes.string.isRequired,
  }).isRequired,
};

export default OverViewPage;
