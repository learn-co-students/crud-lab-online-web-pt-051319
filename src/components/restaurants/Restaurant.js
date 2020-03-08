import React, { Component } from "react";
import ReviewsContainer from "../../containers/ReviewsContainer";

class Restaurant extends Component {
  render() {
    const { restaurant } = this.props;

    return (
      <div>
        <li>
          {restaurant.text}
          <button onClick={() => this.props.deleteRestaurant(restaurant.id)}>
            X
          </button>
          <ReviewsContainer
            restaurant={restaurant}
            addReview={this.props.addReview}
            deleteReview={this.props.deleteReview}
          />
        </li>
      </div>
    );
  }
}

export default Restaurant;
