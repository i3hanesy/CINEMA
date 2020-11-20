import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const MovieCard = (props) => {
  const {film, onFilmCardOver, onFilmCardLeave, renderPlayer} = props;

  return (
    <article
      className="small-movie-card catalog__movies-card"
      id={film.id}
      onMouseOver={() => onFilmCardOver()}
      onMouseLeave={() => onFilmCardLeave()}
    >
      {renderPlayer(film.previewImage)}
      <h3 className="small-movie-card__title">
        <Link to={`/films/${film.id}`} className="small-movie-card__link">{film.name}</Link>
      </h3>
    </article>);
};

MovieCard.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.number.isRequired,
    previewImage: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  onFilmCardOver: PropTypes.func.isRequired,
  onFilmCardLeave: PropTypes.func.isRequired,
  renderPlayer: PropTypes.func.isRequired,
};

export default MovieCard;
