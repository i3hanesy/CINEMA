import React from "react";
import PropTypes from "prop-types";
import {formatFilmDuration} from "../../utils/film.js";

const DetailsPage = (props) => {
  const {filmData} = props;
  const {filmRegisseur, filmDuration, filmGenres, filmDate, filmActors} = filmData;

  return (
    <React.Fragment>
      <div className="movie-card__text movie-card__row">
        <div className="movie-card__text-col">
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Director</strong>
            <span className="movie-card__details-value">{filmRegisseur}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Starring</strong>
            <span className="movie-card__details-value">
              {filmActors.join(`, \n`)}
            </span>
          </p>
        </div>

        <div className="movie-card__text-col">
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Run Time</strong>
            <span className="movie-card__details-value">{formatFilmDuration(filmDuration)}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Genre</strong>
            <span className="movie-card__details-value">{filmGenres}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Released</strong>
            <span className="movie-card__details-value">{filmDate}</span>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

DetailsPage.propTypes = {
  filmData: PropTypes.shape({
    filmActors: PropTypes.array.isRequired,
    filmRating: PropTypes.string.isRequired,
    voiceCount: PropTypes.string.isRequired,
    filmDescription: PropTypes.string.isRequired,
    filmRegisseur: PropTypes.string.isRequired,
    filmDuration: PropTypes.number.isRequired,
    filmGenres: PropTypes.string.isRequired,
    filmDate: PropTypes.string.isRequired,
  }).isRequired,
};


export default DetailsPage;
