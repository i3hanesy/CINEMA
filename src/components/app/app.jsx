import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter, Link} from "react-router-dom";

import MainScreen from "../main-screen/main-screen";
import LoginScreen from "../login/login-screen";
import MyListScreen from "../my-list/my-list-screen";
import FilmScreen from "../film/film-screen";
import PlayerScreen from "../player/player-screen";
import ReviewScreen from "../review/review-screen";


const App = (props) => {
  const {films} = props;
  const filmData = films[0];

  return (
    <BrowserRouter>
      <Switch>
        <Route exact
          path="/"
          render={({history}) => (
            <MainScreen
              onPlayFilmButtonClick={() => history.push(`/player/:id`)}
              films ={films}
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
          render={({history}) => (
            <FilmScreen
              onPlayFilmButtonClick={() => history.push(`/player/:id`)}
              filmData ={filmData}
              films={films}
            />
          )}
        />
        <Route exact path="/films/:id/review">
          <ReviewScreen filmData ={filmData}/>
        </Route>
        <Route exact
          path="/player/:id"
          render={({history}) => (
            <PlayerScreen
              onExitButtonClick={() => history.push(`/`)}
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

App.propTypes = {
  films: PropTypes.array.isRequired,
};

export default App;
