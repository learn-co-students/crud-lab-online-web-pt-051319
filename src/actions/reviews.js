function addReview(reviewData) {
    return {
        type: "ADD_REVIEW",
        review: reviewData
    };
}

function deleteReview(reviewId) {
    return {
        type: "DELETE_REVIEW",
        reviewId: reviewId
    }
}

export { addReview, deleteReview };
