import React from "react";
import PropTypes from "prop-types";

const ReviewForm = (props) => {

  const {onFieldChange, onSubmit} = props;

  return (
    <form action="#"
      className="add-review__form"
      onSubmit={onSubmit}>
      <div className="rating">
        <div className="rating__stars">
          { [...Array(5)].map((item, index) =>
            <React.Fragment key={index + 1}>
              <input
                className="rating__input"
                id={`star-${index + 1}`}
                type="radio"
                name="rating"
                value={index + 1}
                onChange={onFieldChange}/>
              <label
                className="rating__label"
                htmlFor={`star-${index + 1}`}>
                Rating {index + 1}
              </label>
            </React.Fragment>)}
        </div>
      </div>

      <div className="add-review__text">
        <textarea className="add-review__textarea"
          name="reviewText"
          id="review-text"
          placeholder="Review text"
          onChange={onFieldChange}>
        </textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>

      </div>
    </form>
  );

};

ReviewForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onFieldChange: PropTypes.func.isRequired,
};

export default ReviewForm;
