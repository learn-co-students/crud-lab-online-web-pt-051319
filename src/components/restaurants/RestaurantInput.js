import React, { Component } from 'react';

class RestaurantInput extends Component {
	state ={
		text: ""
	}
	handleOnChange = event => {
		this.setState({ text: event.target.value })
	}
	handleOnSubmit = event => {
		event.preventDefault()
    if(this.state.text.trim() === "") return
		this.props.addRestaurant(this.state.text)
		this.setState({ text: "" })
	}
  render() {
    return (
      <div>
        <form onSubmit={ this.handleOnSubmit } >
        	<label>Enter Restaurant Name:
        		<input type="text" onChange={ this.handleOnChange } value={ this.state.text } />
        	</label>
        	{/*<button type="submit">Add Restaurant</button>*/}
        </form>
      </div>
    );
  }
};

export default RestaurantInput;