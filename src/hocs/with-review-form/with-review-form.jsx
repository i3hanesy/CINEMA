import React, {PureComponent} from "react";


const withReviewForm = (Component) => {
  class WithReviewForm extends PureComponent {
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
        <Component
          {...this.props}
          onSubmit={this.onSubmitHandle}
          onFieldChange={this.onFieldChangeHandle}
        />
      );
    }
  }


  return WithReviewForm;
};


export default withReviewForm;
