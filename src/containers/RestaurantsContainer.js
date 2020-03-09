import React, { Component } from 'react'
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'
import { connect } from 'react-redux'
import { addRestaurant, deleteRestaurant} from '../actions/restaurants'

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant} />
        <Restaurants
          restaurants={this.props.restaurants}
          deleteRestaurant={this.props.deleteRestaurant}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { restaurants: state.restaurants };
};

const mapDispatchToProps = dispatch => {
  return {
    addRestaurant: (text) => {
      dispatch(addRestaurant(text));
    },
    deleteRestaurant: (id) => {
      dispatch(deleteRestaurant(id))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer)
