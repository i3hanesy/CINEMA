import React from "react";
import PropTypes from "prop-types";
import TabsDataScreen from "./tabs-daten";

import {TabsHeaders} from "../../const";


const TabsScreen = (props) => {

  const {film, activeTab, onTabClick} = props;

  return (
    <React.Fragment>
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          {Object.values(TabsHeaders).map((value, i) => {
            return (
              <li key ={`${i}`}
                className={`movie-nav__item ${activeTab === value && `movie-nav__item--active`}`}>
                <a href="#"
                  className="movie-nav__link"
                  onClick={(evt) => {
                    evt.preventDefault();
                    onTabClick(value);
                  }}>{value}</a>
              </li>);
          })}

        </ul>
      </nav>
      <TabsDataScreen activeTab={activeTab} film={film}/>
    </React.Fragment>

  );

};

TabsScreen.propTypes = {
  film: PropTypes.object.isRequired,
  activeTab: PropTypes.string.isRequired,
  onTabClick: PropTypes.func.isRequired,
};

export default TabsScreen;
