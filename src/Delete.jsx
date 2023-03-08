import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class Delete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: ''
    };
  }

  handleIdChange = (event) => {
    this.setState({ id: event.target.value });
  };

  handleDelete = (event) => {
    event.preventDefault();
    axios.delete(`http://127.0.0.1:8080/deleteDetails/${this.state.id}`)
    .then(response => {
      toast.success('Record deleted successfully!');
    })
    .catch(error => {
      toast.error('Error deleting record!');
    });
  };

  render() {
    return (
      <div>
      <ToastContainer/>
     <form onSubmit={this.handleDelete} className="createbox1">
        <br/><label className="field1">ID</label><br/><br/>
        <input
          className="input1"
          type="text"
          value={this.state.id}
          onChange={this.handleIdChange}
        />

        <button className="login-button" type="submit" onClick={this.handleDelete}>
          Delete details
        </button>
        <Link to="/Crud">
          <button className="login-button1" type="submit">Back</button>
        </Link>
      </form>
      <Link to='/Get'>
      <button className="login-button1" type="submit">
        Show
      </button></Link></div>
    );
  }
}

export default Delete;