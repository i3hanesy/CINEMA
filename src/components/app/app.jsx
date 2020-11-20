import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, Router as BrowserRouter, Link} from "react-router-dom";
import {connect} from "react-redux";
import browserHistory from "../../browser-history";

import MainScreen from "../main-screen/main-screen";
import LoginScreen from "../login/login-screen";
import MyListScreen from "../my-list/my-list-screen";
import FilmScreen from "../film/film-screen";
import PlayerScreen from "../player/player-screen";
import ReviewScreen from "../review/review-screen";

import withVideo from "../../hocs/with-video/with-video";
import withFilm from "../../hocs/with-film/with-film";

const FilmPlayer = withVideo(PlayerScreen);
const FilmScreenWrapped = withFilm(FilmScreen);

const App = (props) => {
  const {films} = props;
  const promoFilm = films[0];

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact
          path="/"
          render={({history}) => (
            <MainScreen
              onPlayFilmButtonClick={() => history.push(`/player/:id`)}
            />
          )}
        />

        <Route exact path="/login">
          <LoginScreen />
        </Route>
        <Route exact path="/mylist">
          <MyListScreen />
        </Route>
        <Route exact
          path="/films/:id"
          render={({history, match}) => (
            <FilmScreenWrapped
              onPlayFilmButtonClick={(id) => history.push(`/player/${id}`)}
              id={Number(match.params.id)}
            />
          )}
        />
        <Route exact path="/films/:id/review">
          <ReviewScreen filmData ={promoFilm}/>
        </Route>
        <Route exact
          path="/player/:id"
          render={({history}) => (
            <FilmPlayer
              onExitButtonClick={() => history.push(`/`)}
              {...promoFilm}
            />
          )}/>
        <Route
          render={() => (
            <React.Fragment>
              <h1>
                404.
                <br />
                <small>Page not found</small>
              </h1>
              <Link to="/">Go to main page</Link>
            </React.Fragment>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};

const mapStateToProps = ({DATA}) => ({
  films: DATA.films,
});


App.propTypes = {
  films: PropTypes.array.isRequired,
};

export {App};
export default connect(mapStateToProps)(App);
