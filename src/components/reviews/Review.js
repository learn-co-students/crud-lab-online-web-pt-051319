import React, { Component } from 'react';

class Review extends Component {

  render() {
    const { review } = this.props

    return (
      <li>
        {review.text}
        <button onClick={() => this.props.deleteReview(review.id)}> X </button>
      </li>
    );
  }

};

export default Review;
