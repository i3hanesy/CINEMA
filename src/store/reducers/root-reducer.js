import {combineReducers} from "redux";
import {filmCardsAction} from "./film-cards-action/film-cards-action";
import {filmsData} from "./films-data/films-data";
import {user} from "./user/user";

export const NameSpace = {
  DATA: `DATA`,
  FILM: `FILM`,
  USER: `USER`,
};

export default combineReducers({
  [NameSpace.DATA]: filmsData,
  [NameSpace.FILM]: filmCardsAction,
  [NameSpace.USER]: user,
});
