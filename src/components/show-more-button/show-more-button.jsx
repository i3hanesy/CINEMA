import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {addFilmsCount} from "../../store/action";


const ShowMoreButton = (props) => {
  const {onShowMore} = props;

  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={onShowMore}
      >
        Show more</button>
    </div>
  );
};


const mapDispatchToProps = (dispatch) => ({
  onShowMore() {
    dispatch(addFilmsCount());
  },
});

ShowMoreButton.propTypes = {
  onShowMore: PropTypes.func.isRequired,
};

export {ShowMoreButton};
export default connect(null, mapDispatchToProps)(ShowMoreButton);

