import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import TabsScreen from "../tabs/tabs";
import MovieList from "../movie-list/movie-list";

const FilmScreen = (props) => {
  const {films, filmData, onPlayFilmButtonClick} = props;
  const likeFilms = films.filter((item) =>
    item.filmGenres === filmData.filmGenres
    && item.id !== filmData.id).slice(0, 4);

  return (
    <React.Fragment>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img
              src={filmData.filmBackGround}
              alt={filmData.filmTitle} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header movie-card__head">
            <div className="logo">
              <Link to={`/`} className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </Link>
            </div>

            <div className="user-block">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </div>
          </header>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{filmData.filmTitle}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{filmData.filmGenres}</span>
                <span className="movie-card__year">{filmData.filmDate}</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button"
                  type="button"
                  onClick={onPlayFilmButtonClick}>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button"
                  type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
                <Link to={`/films/${filmData.id}/review`} className="btn movie-card__button">Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img
                src={filmData.filmPoster}
                alt={filmData.filmTitle}
                width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <TabsScreen film={filmData}/>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <MovieList films={likeFilms} />

        </section>

        <footer className="page-footer">
          <div className="logo">
            <a href="main.html" className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
};

FilmScreen.propTypes = {
  filmData: PropTypes.shape({
    id: PropTypes.number.isRequired,
    filmBackGround: PropTypes.string.isRequired,
    filmPoster: PropTypes.string.isRequired,
    filmTitle: PropTypes.string.isRequired,
    filmActors: PropTypes.array.isRequired,
    filmGenres: PropTypes.string.isRequired,
    filmDate: PropTypes.string.isRequired,
    filmRating: PropTypes.string.isRequired,
    voiceCount: PropTypes.string.isRequired,
  }).isRequired,
  films: PropTypes.array.isRequired,
  onPlayFilmButtonClick: PropTypes.func.isRequired,
};

export default FilmScreen;
