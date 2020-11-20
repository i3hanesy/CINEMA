import React, {PureComponent} from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {fetchFilmReviews} from "../../store/api-actions";

const withReviews = (Component) => {
  class WithReviews extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isLoading: true,
      };
    }

    componentDidMount() {
      const {id, getReviews} = this.props;
      getReviews(id);
    }

    componentDidUpdate() {
      this.setState({isLoading: false});
    }

    render() {
      const {isLoading} = this.state;
      const {reviews} = this.props;

      return isLoading ? `` :
        <Component
          {...this.props}
          reviews={reviews} />;
    }
  }

  WithReviews.propTypes = {
    id: PropTypes.number,
    reviews: PropTypes.array.isRequired,
    getReviews: PropTypes.func.isRequired,
  };

  const mapStateToProps = ({DATA}) => ({
    reviews: DATA.reviews
  });

  const mapDispatchToProps = (dispatch) => ({
    getReviews(id) {
      dispatch(fetchFilmReviews(id));
    },
  });

  return connect(mapStateToProps, mapDispatchToProps)(WithReviews);
};

export {withReviews};
export default withReviews;
