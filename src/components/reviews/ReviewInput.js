import React, { Component } from "react";
import Reviews from "./Reviews";

class ReviewInput extends Component {
  state = {
    text: ""
  };

  handleOnChange = event => {
    this.setState({
      text: event.target.value
    });
  };

  handleOnSubmit = event => {
    event.preventDefault();
    const review = {
      text: this.state.text,
      restaurantId: this.props.restaurantId
    };
    this.props.addReview(review);
    this.setState({
      text: ""
    });
  };

  render() {
    return (
      <div>
        <p>Leave a Review</p>
        <form onSubmit={event => this.handleOnSubmit(event)}>
          <input
            type="text"
            id="text"
            onChange={event => this.handleOnChange(event)}
            value={this.state.text}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default ReviewInput;
