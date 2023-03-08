import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Post extends Component {
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

    axios.post('http://127.0.0.1:8080/addDetails', data)
      .then(() => {
        toast.success("Details added successfully!");
      })
      .catch(() => {
        toast.error("Error adding details!");
      });
  };

  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit} className="createbox1">
        <h1>Create the details</h1>
        <label className="field1">ID</label><br/>
        <input
          className="input1"
          type="number"
          value={this.state.id}
          onChange={this.handleidChange}
        /><br/><br/>

        <label className="field1">Brand Name</label><br/>
        <input
          className="input1"
          type="text"
          value={this.state.brandName}
          onChange={this.handlebrandNameChange}
        /><br/><br/>
        <label className="field1">Price</label><br/>
        <input
          className="input1"
          type="number"
          value={this.state.price}
          onChange={this.handlepriceChange}
        /><br/><br/>

        <label className="field1">Quantity</label><br/>
        <input
          className="input1"
          type="number"
          value={this.state.quantity}
          onChange={this.handlequantityChange}
        /><br/><br/>

        <label className="field1">Automobile Name</label><br/>
        <input
          className="input1"
          type="text"
          value={this.state.automobileName}
          onChange={this.handleautomobileNameChange}
        /><br/><br/>
          <button className="login-button" type="submit" onClick={this.handleCreate}>
            Create the details
          </button>
      </form>
          <Link to='/Get'>
          <button className="login-button1" type="submit">
            Show
          </button></Link><ToastContainer/>
      </div>
    );
  }
}

export default Post;
