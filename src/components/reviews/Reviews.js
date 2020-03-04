import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
  	const { reviews, deleteReview, restaurantId } = this.props
  	const applicableReviews = reviews.filter(review => review.restaurantId === restaurantId)
  	const renderReviews = applicableReviews.map(review => <Review key={review.id} review={review} deleteReview={deleteReview} />)
    return (
      <ul>
        { renderReviews }
      </ul>
    );
  }
};

export default Reviews;