function addRestaurant(text) {
    return {
        type: "ADD_RESTAURANT",
        text: text
    };
}

function deleteRestaurant(id) {
    return {
        type: "DELETE_RESTAURANT", 
        id: id
    }
}

export {addRestaurant, deleteRestaurant}
