import {extend} from "../../../utils/redux";
import {ActionType} from "../../action";
import {snakeToCamelObjAdapter} from "../../../utils/film";

const initialState = {
  films: [],
  promoFilm: {},
  reviews: [],
  film: {},
};


const filmsData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILMS:
      return extend(state, {
        films: action.payload.map((film) => (snakeToCamelObjAdapter(film))),
      });
  }

  switch (action.type) {
    case ActionType.LOAD_PROMO_FILM:
      return extend(state, {
        promoFilm: snakeToCamelObjAdapter(action.payload),
      });
  }

  switch (action.type) {
    case ActionType.LOAD_FILM_REVIEWS:
      return extend(state, {
        reviews: action.payload,
      });
  }

  switch (action.type) {
    case ActionType.LOAD_FILM:
      return extend(state, {
        film: snakeToCamelObjAdapter(action.payload),
      });
  }

  return state;
};

export {filmsData};
