import React, { Component } from 'react';
import { Navbar } from 'reactstrap';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render(){
    return (
      <div>
        <div class="d-flex justify-content-around">
          <Link to="/contact">Contact</Link> 
          <Link to="/projects">Projects</Link> 
          <Link to="/about">About</Link>
          <Link to="/">Home</Link>
        </div>
      </div>
    )
  }
}


export default NavBar;