import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {TabsHeaders} from "../../const";
// import {connect} from "react-redux";
// import {fetchFilmReviews} from "../../store/api-actions";
import withReviews from "../../hocs/width-reviews/width-reviews";

import OverViewPage from "../overview-page/overview-page";
import DetailsPage from "../details-page/details-page";
import ReviewsPage from "../reviews-page/reviews-page";

const ReviewsPageWrapped = withReviews(ReviewsPage);

const TabsDataScreen = (props) => {
  const {activeTab, film, reviews} = props;

  switch (activeTab) {
    case TabsHeaders.OVERVIEW:
      return <OverViewPage filmData={film}/>;
    case TabsHeaders.DETAILS:
      return <DetailsPage filmData={film}/>;
    case TabsHeaders.REVIEWS:
      return <ReviewsPageWrapped id={film.id}/>;
    default:
      return (
        <React.Fragment>
          <h1>
            404.
            <br />
            <small>Page not found</small>
          </h1>
          <Link to="/">Go to main page</Link>
        </React.Fragment>
      );
  }

};


TabsDataScreen.propTypes = {
  film: PropTypes.shape().isRequired,
  activeTab: PropTypes.string.isRequired,
  reviews: PropTypes.array,
};

export default TabsDataScreen;
