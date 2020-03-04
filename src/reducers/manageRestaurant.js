
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = { restaurants: [], reviews: [] }, action) {
	switch(action.type) {
		case "ADD_RESTAURANT":
			const newRest = {
				text: action.text,
				id: cuid()
			}
			return { restaurants: [...state.restaurants, newRest], reviews: [...state.reviews] }
		case "DELETE_RESTAURANT":
			return {
				restaurants: [...state.restaurants].filter(rest => rest.id !== action.id),
				reviews: [...state.reviews].filter(rev => rev.restaurantId !== action.id)
			}
		case "ADD_REVIEW":
			const newReview = {
				text: action.review.text,
				id: cuid(),
				restaurantId: action.review.restaurantId
			}
			return { restaurants: [...state.restaurants], reviews: [...state.reviews, newReview] }
		case "DELETE_REVIEW":
			return {
				restaurants: [...state.restaurants],
				reviews: [...state.reviews].filter(rev => rev.id !== action.id)
			}
		default:
			return state
	}
}
