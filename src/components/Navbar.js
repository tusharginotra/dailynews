import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Stylesheet.css'

export class Navbar extends Component {


  render() {

    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark ">
          <div className="container-fluid ">
            <Link className="navbar-brand" to="/">Daily News  <i className="fa-solid fa-radio"></i></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-evenly" id="navbarNav">
              <ul className="navbar-nav primary me-0  " >
                <li className="nav-item mx-1 my-1 " id='home' >
                  <Link className="nav-link mx-1 my-1 active" aria-current="page" to="/">Home  <i className="fa-solid fa-house"></i></Link>
                </li>

                <li className="nav-item mx-1 my-1 " id='entertainment'>
                  <Link className="nav-link mx-1 my-1 active" to="/entertainment">Entertainment  <i className="fa-solid fa-clapperboard"></i></Link>
                </li>

                <li className="nav-item mx-1 my-1 " id='sports'>
                  <Link className="nav-link mx-1 my-1 active" to="/sports">Sports  <i className="fa-solid fa-baseball"></i></Link>
                </li>
                <li className="nav-item mx-1 my-1 " id='business'>
                  <Link className="nav-link mx-1 my-1  active" to="/business">Business  <i className="fa-solid fa-briefcase"></i></Link>
                </li>
                <li className="nav-item mx-1 my-1 " id='general'>
                  <Link className="nav-link mx-1 my-1 active" to="/general">General  <i className="fa-solid fa-book-open"></i></Link>
                </li>
                <li className="nav-item mx-1 my-1" id='health'>
                  <Link className="nav-link mx-1 my-1 active" to="/health">Health  <i className="fa-solid fa-heart-pulse"></i></Link>
                </li>
                <li className="nav-item mx-1 my-1" id='science'>
                  <Link className="nav-link mx-1 my-1 active" to="/science">Science  <i className="fa-solid fa-flask"></i></Link>
                </li>
                <li className="nav-item mx-1 my-1" id='technology'>
                  <Link className="nav-link mx-1 my-1 active" to="/technology">Technology  <i className="fa-solid fa-microchip"></i></Link>
                </li>
                {/* <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button"  data-bs-toggle="dropdown" aria-controls='navbarDropdown' aria-haspopup="true" aria-expanded="false">
                    Dropdown
                  </Link>
                  <div className="dropdown-menu" id="navbarDropdown">
                    <option className="dropdown-item">Action</option>
                    <Link className="dropdown-item" to="#">Another action</Link>
                    
                    <Link className="dropdown-item" to="#">Something else here</Link>
                  </div>
                </li> */}

              </ul>

            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar
