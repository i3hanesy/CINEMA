import {extend} from "../../../utils/redux";
import {FILM_CARD_COUNT_PER_STEP} from "../../../const";
import {ActionType} from "../../action";

const initialState = {
  genre: `All genres`,
  filmsCountToShow: FILM_CARD_COUNT_PER_STEP,
};

const filmCardsAction = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.INCREMENT_GENRE:
      return extend(state, {
        genre: action.payload,
        filmsCountToShow: FILM_CARD_COUNT_PER_STEP,
      });

    case ActionType.RESET_LIST:
      return extend({}, initialState);

    case ActionType.ADD_FILMS_COUNT:
      return extend(state, {
        filmsCountToShow: state.filmsCountToShow + action.payload,
      });
  }

  return state;
};


export {filmCardsAction};
