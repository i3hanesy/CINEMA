import React from "react";
import ReviewForm from "../review-form/review-form";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

import withReviewForm from "../../hocs/with-review-form/with-review-form";
const ReviewFormWrapped = withReviewForm(ReviewForm);

const ReviewScreen = (props) => {
  const {filmData} = props;
  const {backgroundImage, name, posterImage, id} = filmData;

  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img
            src={backgroundImage}
            alt={name} />
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
                <Link to={`/films/${id}`} className="breadcrumbs__link">{name}</Link>
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
            src={posterImage}
            alt={name}
            width="218"
            height="327" />
        </div>
      </div>

      <div className="add-review">
        <ReviewFormWrapped />
      </div>

    </section>
  );
};

ReviewScreen.propTypes = {
  filmData: PropTypes.shape({
    id: PropTypes.number,
    backgroundImage: PropTypes.string,
    posterImage: PropTypes.string,
    name: PropTypes.string,
  }),
};

export default ReviewScreen;
