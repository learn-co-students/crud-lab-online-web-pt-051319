import cuid from "cuid";
import Restaurants from "../components/restaurants/Restaurants";
import Restaurant from "../components/restaurants/Restaurant";
export const cuidFn = cuid;

export default function manageRestaurants(state = { restaurants: [] }, action) {
  switch (action.type) {
    case "ADD_RESTAURANT":
      return {
        restaurants: [
          ...state.restaurants,
          {
            text: action.text,
            id: cuid(),
            reviews: []
          }
        ]
      };
    case "DELETE_RESTAURANT":
      return { restaurants: state.restaurants.filter(r => r.id !== action.id) };
    case "ADD_REVIEW":
      let index = state.restaurants.findIndex(
        r => r.id === action.review.restaurantId
      );
      let restaurant = state.restaurants[index];
      let reviews = [
        ...restaurant.reviews,
        {
          text: action.review.text,
          restaurantId: restaurant.id,
          id: cuid()
        }
      ];
      return {
        restaurants: [
          ...state.restaurants.slice(0, index),
          {
            text: restaurant.text,
            id: restaurant.id,
            reviews: reviews
          },
          ...state.restaurants.slice(index + 1)
        ]
      };
    case "DELETE_REVIEW":
      index = state.restaurants.findIndex(
        r => r.id === action.review.restaurantId
      );
      restaurant = state.restaurants[index];
      reviews = restaurant.reviews.filter(
        review => review.id !== action.review.id
      );
      return {
        restaurants: [
          ...state.restaurants.slice(0, index),
          {
            text: restaurant.text,
            id: restaurant.id,
            reviews: reviews
          },
          ...state.restaurants.slice(index + 1)
        ]
      };
    default:
      return state;
  }
}
