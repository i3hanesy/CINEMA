import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const MovieCard = (props) => {
  const {film, onFilmCardOver, onFilmCardLeave, children} = props;

  return (
    <article
      className="small-movie-card catalog__movies-card"
      id={film.id}
      onMouseOver={() => onFilmCardOver(film.id)}
      onMouseLeave={() => onFilmCardLeave()}
    >
      {children}
      <h3 className="small-movie-card__title">
        <Link to={`/films/${film.id}`} className="small-movie-card__link">{film.filmTitle}</Link>
      </h3>
    </article>);
};

MovieCard.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.number.isRequired,
    filmPoster: PropTypes.string.isRequired,
    filmTitle: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
  }).isRequired,
  onFilmCardOver: PropTypes.func.isRequired,
  onFilmCardLeave: PropTypes.func.isRequired,
  children: PropTypes.object.isRequired,
};

export default MovieCard;
