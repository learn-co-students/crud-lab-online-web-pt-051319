import cuid from "cuid";
import Restaurants from "../components/restaurants/Restaurants";
export const cuidFn = cuid;

export default function manageRestaurants(state = { restaurants: [] }, action) {
  switch (action.type) {
    case "ADD_RESTAURANT":
      return {
        restaurants: [...state.restaurants, { text: action.text, id: cuid() }]
      };
    case "DELETE_RESTAURANT":
      return { restaurants: state.restaurants.filter(r => r.id !== action.id) };
    default:
      return state;
  }
}
