import cuid from "cuid";
import Restaurants from "../components/restaurants/Restaurants";
export const cuidFn = cuid;

export default function manageRestaurants(
  state = [{ text: "Subway", id: cuid() }],
  action
) {
  switch (action.type) {
    case "ADD_RESTAURANT":
      return [...state, { text: action.restaurant.text, id: cuid() }];
    case "DELETE_RESTAURANT":
      return state.filter(r => r.id !== action.id);
    default:
      return state;
  }
}
