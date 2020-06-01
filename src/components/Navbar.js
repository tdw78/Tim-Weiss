import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render(){
    return (
      <div>
         <br></br>
        <div className="nav">
        <Link className="nav-link" to="/about">About</Link>
          <Link className="nav-link" to="/contact">Contact</Link>
          <Link className="nav-link" to="/skills"> Technical Skills</Link>
          <Link className="nav-link" to="/projects">Projects</Link>
          <Link className="nav-link" to="/">Home</Link>    
        </div>

        {/* <nav class="nav">
          <a class="nav-link active" href="#">Active</a>
          <a class="nav-link" href="#">Link</a>
          <a class="nav-link" href="#">Link</a>
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </nav> */}

        {/* <div class="row">
            <div class="col-lg-2"></div>

            <div class="col-lg-3 list-group">
              <nav class="nav flex-column">
                <Link class="nav-link active" to="/contact">Contact</Link>
                <Link class="nav-link" to="/projects">Projects</Link>
                <Link class="nav-link" to="/about">About</Link>
                <Link class="nav-link" to="/">Home</Link>
              </nav>
            </div>
            
            <div class="col-lg-3"></div>
          </div> */}


      </div>
    )
  }
}


export default NavBar;