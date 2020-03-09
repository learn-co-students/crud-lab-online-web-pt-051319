import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { connect } from 'react-redux' 
import { addReview, deleteReview } from "../actions/reviews";

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput
          restaurantId={this.props.restaurant.id}
          addReview={this.props.addReview}
        />
        <Reviews
          reviews={this.props.reviews}
          restaurantId={this.props.restaurant.id}
          deleteReview={this.props.deleteReview}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {reviews: state.reviews}
}

const mapDispatchToProps = dispatch => {
  return {
    addReview: reviewData => {
      dispatch(addReview(reviewData));
    },
    deleteReview: reviewId => {
      dispatch(deleteReview(reviewId))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)
