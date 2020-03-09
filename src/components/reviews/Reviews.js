import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  renderReviews = () => {
    let filteredReviews = this.props.reviews.filter(
      review => review.restaurantId === this.props.restaurantId
    );

    return filteredReviews.map(review => {
      return (
        <Review
          key={review.id}
          review={review}
          deleteReview={this.props.deleteReview}
        />
      );
    });
  };

  render() {
    return <ul>{this.renderReviews()}</ul>;
  }
};

export default Reviews;