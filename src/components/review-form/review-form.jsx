import React, {PureComponent} from "react";
// import PropTypes from "prop-types";

export default class ReviewForm extends PureComponent {
  constructor(props) {
    super(props);

    this.onSubmitHandle = this.onSubmitHandle.bind(this);
    this.onFieldChangeHandle = this.onFieldChangeHandle.bind(this);

    this.state = {
      reviewText: ``,
      rating: `3`,
    };
  }

  onSubmitHandle(evt) {
    evt.preventDefault();
  }

  onFieldChangeHandle(evt) {
    const {name, value} = evt.target;
    this.setState({[name]: value});
  }

  render() {

    return (
      <form action="#"
        className="add-review__form"
        onSubmit={this.onSubmitHandle}>
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
                  onChange={this.onFieldChangeHandle}/>
                <label className="rating__label" htmlFor={`star-${index + 1}`}>Rating {index + 1}</label>
              </React.Fragment>)}
          </div>
        </div>

        <div className="add-review__text">
          <textarea className="add-review__textarea"
            name="reviewText"
            id="review-text"
            placeholder="Review text"
            onChange={this.onFieldChangeHandle}>
          </textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>

        </div>
      </form>
    );

  }

}
