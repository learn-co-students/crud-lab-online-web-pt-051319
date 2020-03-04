import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
	state = {
		text: ""
	}
	handleOnChange = event => {
		this.setState({ text: event.target.value })
	}
	handleOnSubmit = event => {
		event.preventDefault()
		if(this.state.text.trim() === "") return
		const newReview = {
			text: this.state.text,
			restaurantId: this.props.restaurantId
		}
		this.props.addReview(newReview)
		this.setState({ text: "" })
	}
  render() {
    return (
      <div>
        <form onSubmit={ this.handleOnSubmit }>
					<label>Leave a Review:
						<input type="text" value={ this.state.text } onChange={ this.handleOnChange } />
					</label>
					<input type="submit" value="Submit Review"/>
        </form>
      </div>
    );
  }
};

export default ReviewInput;