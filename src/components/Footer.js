import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
        <footer className="bg-dark text-center text-white ">
        {/* <!-- Grid container --> */}
        <div className="container p-4 pb-0">
          {/* <!-- Section: Social media --> */}
          <section className="mb-4">
            {/* <!-- Facebook --> */}
            <a
              className="btn btn-primary btn-floating m-1"
               style={{backgroundColor: "#3b5998"}}
              href="#"
              role="button"
              ><i className="fab fa-facebook-f"></i
            ></a>
      
            {/* <!-- Twitter --> */}
            <a
              className="btn btn-primary btn-floating m-1"
              style={ { backgroundColor: "#55acee" } }
              href="#"
              role="button"
              ><i  className="fab fa-twitter"></i
            ></a>
      
          
      
            {/* <!-- Instagram --> */}
            <a
              className="btn btn-primary btn-floating m-1"
              style={{backgroundColor: "#ac2bac"}}
              target="_blank"
              href="https://www.instagram.com/tushar_since_2000/"
              role="button"
              ><i className="fab fa-instagram"></i
            ></a>
      
            {/* <!-- Linkedin --> */}
            <a
              className="btn btn-primary btn-floating m-1"
              style={{backgroundColor: "#0082ca"}}
              target="_blank"
              href="https://www.linkedin.com/in/tushar-ginotra-885786197/"
              role="button"
              ><i className="fab fa-linkedin-in"></i
            ></a>
            {/* <!-- Github --> */}
            <a
              className="btn btn-primary btn-floating m-1"
              style={{backgroundColor: "#333333"}}
              target="_blank"
              href="https://github.com/tusharginotra"
              role="button"
              ><i className="fab fa-github"></i
            ></a>
          </section>
          {/* <!-- Section: Social media --> */}
        </div>
        {/* <!-- Grid container --> */}
      
        {/* <!-- Copyright --> */}
        <div className="text-center p-3" 
        style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}
        >
          © 2022 Copyright: <br></br>
          <a className="text-white" target="_blank" href="https://www.linkedin.com/in/tushar-ginotra-885786197/">Developed By Tushar :- NIT KURUKSHETRA</a>
        </div>
        {/* <!-- Copyright --> */}
      </footer>
    )
  }
}
