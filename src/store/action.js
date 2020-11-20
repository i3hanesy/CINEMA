import {FILM_CARD_COUNT_PER_STEP} from "../const";

export const ActionType = {
  INCREMENT_GENRE: `INCREMENT_GENRE`,
  RESET_LIST: `RESET_LIST`,
  ADD_FILMS_COUNT: `ADD_FILMS_COUNT`,
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_PROMO_FILM: `LOAD_PROMO_FILM`,
  LOAD_FILM_REVIEWS: `LOAD_FILM_REVIEWS`,
  LOAD_FILM: `LOAD_FILM`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
};

export const incrementGenre = (genre) => ({
  type: ActionType.INCREMENT_GENRE,
  payload: genre,
});


export const resetList = () => ({
  type: ActionType.RESET_LIST,
});

export const addFilmsCount = () => ({
  type: ActionType.ADD_FILMS_COUNT,
  payload: FILM_CARD_COUNT_PER_STEP,
});

export const loadFilms = (films) => ({
  type: ActionType.LOAD_FILMS,
  payload: films,
});

export const loadPromoFilm = (film) => ({
  type: ActionType.LOAD_PROMO_FILM,
  payload: film,
});

export const loadFilmReviews = (comments) => ({
  type: ActionType.LOAD_FILM_REVIEWS,
  payload: comments,
});

export const loadFilm = (film) => ({
  type: ActionType.LOAD_FILM,
  payload: film,
});

export const requireAuthorization = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status,
});
