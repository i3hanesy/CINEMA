import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import OverViewPage from "../overview-page/overview-page";
import DetailsPage from "../details-page/details-page";
import ReviewsPage from "../reviews-page/reviews-page";

const tabsHeaders = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`
};

export default class TabsScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.onTabClickHandle = this.onTabClickHandle.bind(this);

    this.state = {
      activeTab: tabsHeaders.OVERVIEW
    };
  }

  onTabClickHandle(value) {
    this.setState({activeTab: value});
  }

  renderTabsDaten() {
    const {activeTab} = this.state;
    const {film} = this.props;


    switch (activeTab) {
      case tabsHeaders.OVERVIEW:
        return <OverViewPage filmData={film}/>;
      case tabsHeaders.DETAILS:
        return <DetailsPage filmData={film}/>;
      case tabsHeaders.REVIEWS:
        return <ReviewsPage filmComments={film.filmComments}/>;

    }

    return null;
  }

  render() {
    const {activeTab} = this.state;

    return (
      <React.Fragment>
        <nav className="movie-nav movie-card__nav">
          <ul className="movie-nav__list">
            {Object.values(tabsHeaders).map((value, i) => {
              return (
                <li key ={`${i}`}
                  className={`movie-nav__item ${activeTab === value ? `movie-nav__item--active` : ``}`}>
                  <a
                    className="movie-nav__link"
                    onClick={() => this.onTabClickHandle(value)}>{value}</a>
                </li>);
            })}

          </ul>
        </nav>
        {this.renderTabsDaten()}
      </React.Fragment>

    );
  }
}

TabsScreen.propTypes = {
  film: PropTypes.object.isRequired,
};
