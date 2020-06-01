import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBar from "./Navbar";

class HomePage extends Component {

  render () {
  
    return (
      <div>
        <div className="main">
          
          <div>
            <p id="title">Timothy Weiss</p>
            <p class="subtext">Full Stack Web Developer</p>
          </div>
        
          {/* <div class="row">
            <div class="col-lg-2"></div>

            <div class="col-lg-3"> 
              <img src="../../images/family2.jpeg" />
            </div>
           
            <div class="col-lg-3 list-group">
              
              <NavBar />
                <Link class="nav-link active" to="/contact">Contact</Link>
                <Link class="nav-link" to="/projects">Projects</Link>
                <Link class="nav-link" to="/about">About</Link>
                <Link class="nav-link" to="/">Home</Link>
              
            </div>

            <div class="col-lg-3"></div>
          </div> */}

        </div>
      </div>
  );
 }
}


export default HomePage;