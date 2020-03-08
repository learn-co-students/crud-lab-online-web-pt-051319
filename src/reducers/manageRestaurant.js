import cuid from "cuid";
import Restaurants from "../components/restaurants/Restaurants";
import Restaurant from "../components/restaurants/Restaurant";
export const cuidFn = cuid;

export default function manageRestaurants(
  state = { restaurants: [], reviews: [] },
  action
) {
  switch (action.type) {
    case "ADD_RESTAURANT":
      return {
        restaurants: [
          ...state.restaurants,
          {
            text: action.text,
            id: cuid()
          }
        ],
        reviews: [...state.reviews]
      };
    case "DELETE_RESTAURANT":
      return {
        restaurants: state.restaurants.filter(r => r.id !== action.id),
        reviews: [...state.reviews]
      };
    case "ADD_REVIEW":
      return {
        restaurants: [...state.restaurants],
        reviews: [
          ...state.reviews,
          {
            text: action.review.text,
            restaurantId: action.review.restaurantId,
            id: cuid()
          }
        ]
      };
    case "DELETE_REVIEW":
      return {
        restaurants: [...state.restaurants],
        reviews: state.reviews.filter(review => review.id !== action.review.id)
      };
    default:
      return state;
  }
}
