
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {restaurants: [], reviews: []}, action) {
    switch (action.type) {
        case "ADD_RESTAURANT":
            const newRestaurant = {
                id: cuidFn(),
                text: action.text
            }
            return { ...state, restaurants: [...state.restaurants, newRestaurant] }
        case "DELETE_RESTAURANT":
            return { ...state, restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.id)}
        case "ADD_REVIEW":
            const review = { id: cuidFn(), restaurantId: action.review.restaurantId, text: action.review.text }
            return { ...state, reviews: [...state.reviews, review]}
        case "DELETE_REVIEW":
            return { ...state, reviews: state.reviews.filter(review => review.id !== action.reviewId)}
        default:
            return state
    }

}
