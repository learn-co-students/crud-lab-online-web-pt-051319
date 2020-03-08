import React, { Component } from "react";

class Review extends Component {
  handleOnClick = event => {
    this.props.deleteReview();
  };

  render() {
    const { review } = this.props;

    return (
      <div>
        <li>
          {review.text}
          <button onClick={event => this.handleOnClick(event)}> X </button>
        </li>
      </div>
    );
  }
}

export default Review;
