import React, { Component } from "react";
import ReviewInput from "../components/reviews/ReviewInput";
import Reviews from "../components/reviews/Reviews";

class ReviewsContainer extends Component {
  render() {
    return (
      <div>
        <ReviewInput
          restaurantId={this.props.restaurant.id}
          addReview={this.props.addReview}
        />
        <Reviews
          reviews={this.props.restaurant.reviews}
          deleteReview={this.props.deleteReview}
        />
      </div>
    );
  }
}

export default ReviewsContainer;
