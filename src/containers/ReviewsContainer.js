import React, { Component } from "react";
import ReviewInput from "../components/reviews/ReviewInput";
import Reviews from "../components/reviews/Reviews";
import { connect } from "react-redux";

class ReviewsContainer extends Component {
  render() {
    return (
      <div>
        <ReviewInput
          restaurantId={this.props.restaurant.id}
          addReview={this.props.addReview}
        />
        <Reviews
          reviews={this.props.reviews.filter(
            review => review.restaurantId === this.props.restaurant.id
          )}
          deleteReview={this.props.deleteReview}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  reviews: state.reviews
});

const mapDispatchToProps = dispatch => ({
  addReview: review =>
    dispatch({
      type: "ADD_REVIEW",
      review
    }),
  deleteReview: review =>
    dispatch({
      type: "DELETE_REVIEW",
      review
    })
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer);
