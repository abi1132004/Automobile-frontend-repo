import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Put extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      brandName: '',
      price: '',
      quantity: '',
      automobileName: ''
    };
  }

  handleidChange = (event) => {
    this.setState({ id: event.target.value });
  };

  handlebrandNameChange = (event) => {
    this.setState({ brandName: event.target.value });
  };

  handlepriceChange = (event) => {
    this.setState({ price: event.target.value });
  };

  handlequantityChange = (event) => {
    this.setState({ quantity: event.target.value });
  };

  handleautomobileNameChange = (event) => {
    this.setState({ automobileName: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      id: this.state.id,
      brandName: this.state.brandName,
      price: this.state.price,
      quantity: this.state.quantity,
      automobileName: this.state.automobileName,
    };

    axios.put('http://127.0.0.1:8080/updateDetails', data);
  };

  render() {
    return (
      <div><form onSubmit={this.handleSubmit} className="createbox1">
        <h1>Update the details</h1>
        <label className="field1">ID</label><br/>
        <input
          className="input1"
          type="number"
          value={this.state.id}
          onChange={this.handleidChange}
        /><br/><br/><br/>

        <label className="field1">Brand Name</label><br/>
        <input
          className="input1"
          type="text"
          value={this.state.brandName}
          onChange={this.handlebrandNameChange}
        /><br/><br/><br/>
        <label className="field1">Price</label><br/>
        <input
          className="input1"
          type="number"
          value={this.state.price}
          onChange={this.handlepriceChange}
        /><br/><br/><br/>

        <label className="field1">Quantity</label><br/>
        <input
          className="input1"
          type="number"
          value={this.state.quantity}
          onChange={this.handlequantityChange}
        /><br/><br/><br/>

        <label className="field1">Automobile Name</label><br/>
        <input
          className="input1"
          type="text"
          value={this.state.automobileName}
          onChange={this.handleautomobileNameChange}
        /><br/><br/><br/> 
          <button className="login-button" type="submit">
            Update the details
          </button>
          <Link to='/Get'>
          <button className="login-button" type="submit">
            Show
          </button></Link>
      </form>
      <Link to='/Crud'>
      <button className="login-button1" type="submit">
        Back
      </button></Link></div>
    );
  }
}

export default Put;
