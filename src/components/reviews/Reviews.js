import React, { Component } from "react";
import Review from "./Review";

class Reviews extends Component {
  render() {
    return (
      <ul>
        Reviews
        {this.props.reviews.map(review => (
          <Review
            review={review}
            deleteReview={() => this.props.deleteReview(review)}
          />
        ))}
      </ul>
    );
  }
}

export default Reviews;
