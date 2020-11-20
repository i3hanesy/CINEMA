import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {incrementGenre, resetList} from "../../store/action";
import MovieList from "../movie-list/movie-list";
import ShowMoreButton from "../show-more-button/show-more-button";
import {getGenre, getGenerList, getFilteredFilms} from "../../store/selectors";

const GenreList = (props) => {
  const {genre,
    changeGenre,
    resetGenreList,
    filmsCountToShow,
    filteredFilms,
    genreList} = props;

  const chooseFilms = (genreItem) => {
    return genreItem !== `All genres` ? changeGenre(genreItem) : resetGenreList();
  };

  return (
    <React.Fragment>
      <ul className="catalog__genres-list">
        {genreList.map((genreItem, i) => (
          <li key={`${i}`}
            className={`catalog__genres-item ${genreItem === genre ? `catalog__genres-item--active` : ``}`}>
            <a
              href="#"
              className="catalog__genres-link"
              onClick={(evt) => {
                evt.preventDefault();
                chooseFilms(genreItem);
              }}>
              {genreItem}
            </a>
          </li>
        ))}
      </ul>
      <MovieList films={filteredFilms.slice(0, filmsCountToShow)} />
      {filteredFilms.length > filmsCountToShow && <ShowMoreButton/>}
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  genreList: getGenerList(state),
  genre: getGenre(state),
  filmsCountToShow: state.FILM.filmsCountToShow,
  filteredFilms: getFilteredFilms(state),
});

const mapDispatchToProps = (dispatch) => ({
  changeGenre(genre) {
    dispatch(incrementGenre(genre));
  },
  resetGenreList() {
    dispatch(resetList());
  },
});

GenreList.propTypes = {
  genreList: PropTypes.array.isRequired,
  filteredFilms: PropTypes.array.isRequired,
  genre: PropTypes.string.isRequired,
  changeGenre: PropTypes.func.isRequired,
  resetGenreList: PropTypes.func.isRequired,
  filmsCountToShow: PropTypes.number.isRequired,
};

export {GenreList};
export default connect(mapStateToProps, mapDispatchToProps)(GenreList);
