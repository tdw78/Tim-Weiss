import React, { Component } from 'react';
import { Navbar } from 'reactstrap';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render(){
    return (
      <div>
        <div class="d-flex justify-content-around">
          <Link class="link-item" to="/contact">Contact</Link> 
          <Link class="link-item"  to="/projects">Projects</Link> 
          <Link class="link-item" to="/about">About</Link>
          <Link class="link-item" to="/">Home</Link>
        </div>
      </div>
    )
  }
}


export default NavBar;