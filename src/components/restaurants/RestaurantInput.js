import React, { Component } from "react";

class RestaurantInput extends Component {
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
    const restaurant = {
      text: this.state.text
    };
    this.props.addRestaurant(restaurant);
    this.setState({
      text: ""
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={event => this.handleOnSubmit(event)}>
          <label htmlFor="tesxt">Restaurant Name</label>
          <input
            type="text"
            onChange={event => this.handleOnChange(event)}
            id="text"
            name="text"
            value={this.state.text}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default RestaurantInput;
