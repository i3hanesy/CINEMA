import React from "react";
import ReviewForm from "../review-form/review-form";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const ReviewScreen = (props) => {
  const {filmData} = props;

  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img
            src={filmData.filmBackGround}
            alt={filmData.filmTitle} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <div className="logo">
            <Link to={`/`} className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${filmData.id}`} className="breadcrumbs__link">{filmData.filmTitle}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <div className="user-block">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </div>
        </header>

        <div className="movie-card__poster movie-card__poster--small">
          <img
            src={filmData.filmPoster}
            alt={filmData.filmTitle}
            width="218"
            height="327" />
        </div>
      </div>

      <div className="add-review">
        <ReviewForm />
      </div>

    </section>
  );
};

ReviewScreen.propTypes = {
  filmData: PropTypes.shape({
    id: PropTypes.number.isRequired,
    filmBackGround: PropTypes.string.isRequired,
    filmPoster: PropTypes.string.isRequired,
    filmTitle: PropTypes.string.isRequired,
  }).isRequired,
};

export default ReviewScreen;
