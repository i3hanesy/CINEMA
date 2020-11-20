import React, {PureComponent} from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {fetchFilm} from "../../store/api-actions";


const withFilm = (Component) => {
  class WithFilm extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isLoading: true,
      };
    }

    componentDidMount() {
      const {id, getFilm} = this.props;
      getFilm(id);
    }

    componentDidUpdate(prevProps) {
      const prevId = prevProps.id;
      const {id, getFilm} = this.props;

      this.setState({isLoading: false});

      if (id !== prevId) {
        getFilm(id);
      }
    }

    render() {
      const {isLoading} = this.state;
      const {film} = this.props;

      return isLoading ? `` :
        <Component
          {...this.props}
          filmData={film} />;
    }
  }

  WithFilm.propTypes = {
    id: PropTypes.number,
    film: PropTypes.object.isRequired,
    getFilm: PropTypes.func.isRequired,
  };

  const mapStateToProps = ({DATA}) => ({
    film: DATA.film
  });

  const mapDispatchToProps = (dispatch) => ({
    getFilm(id) {
      dispatch(fetchFilm(id));
    },
  });

  return connect(mapStateToProps, mapDispatchToProps)(WithFilm);
};

export {withFilm};
export default withFilm;
