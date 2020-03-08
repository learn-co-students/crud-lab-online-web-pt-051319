import React, { Component } from "react";
import RestaurantInput from "../components/restaurants/RestaurantInput";
import Restaurants from "../components/restaurants/Restaurants";
import { connect } from "react-redux";

class RestaurantsContainer extends Component {
  render() {
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant} />
        <Restaurants
          restaurants={this.props.restaurants}
          deleteRestaurant={this.props.deleteRestaurant}
          addReview={this.props.addReview}
          deleteReview={this.props.deleteReview}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    restaurants: state.restaurants
  };
};
const mapDispatchToProps = dispatch => ({
  addRestaurant: text =>
    dispatch({
      type: "ADD_RESTAURANT",
      text
    }),
  deleteRestaurant: id =>
    dispatch({
      type: "DELETE_RESTAURANT",
      id
    }),
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
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantsContainer);
