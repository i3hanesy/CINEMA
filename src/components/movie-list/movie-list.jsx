import React from "react";
import MovieCard from "../movie-card/movie-card";
import PropTypes from "prop-types";
import withVideo from "../../hocs/with-video/with-video";

const MovieCardWrapped = withVideo(MovieCard);

const MovieList = (props) => {

  const {films} = props;

  return (
    <div className="catalog__movies-list">
      {films.map((film, i) => (
        <MovieCardWrapped key ={`${i}`}
          film={film}
          src={film.previewVideoLink}
          poster={film.previewImage}
          muted={true}
          width="280"
          height="175"
        />

      ))}
    </div>
  );

};

MovieList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    previewImage: PropTypes.string.isRequired,
    previewVideoLink: PropTypes.string.isRequired,
  })).isRequired,
};


export default MovieList;
