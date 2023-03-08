import axios from "axios";
import React, { Component } from "react";
import './App.css';

class Get extends Component {
  state = {
    data: []
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:8080/showDetails')
      .then(response => {
        this.setState({ data: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {   
    return (
      <div>
      <table className="getd" border={10}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Automobile Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Brand Name</th>
          </tr>
        </thead>
        <tbody>
          {this.state.data.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.brandName}</td>
              <td>{item.price}</td>
              <td>{item.quantity}</td>
              <td>{item.automobileName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    );
  }
}

export default Get;
