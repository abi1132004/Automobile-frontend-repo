import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Crud extends Component {
	render() {
		return (		
			<div className="register">                 
				<form className='box1' onSubmit={this.displayLogin}>
					<h2 className='text'>DETAILS OF AUTOMOBILES TO BE:</h2>
					<div>
				<Link to="/Post">
					<input type="submit" value="Create the details" /><br/><br/></Link>
				<Link to="/Put">
				<input type="submit" value="Update the details" /><br/><br/>
				</Link>
				<Link to="/Delete">
				<input type="submit" value="Delete the detail" /><br/><br/>
				</Link>
				<Link to="/Get">
					<input type="submit" value="Get the details" /><br/><br/>
				</Link></div>
				</form>
			</div>
		);
	}
}

export default Crud;
