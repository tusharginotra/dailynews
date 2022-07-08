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
      
            {/* <!-- Google --> */}
            <a
              className="btn btn-primary btn-floating m-1"
              style={{backgroundColor: "#dd4b39"}}
              
              href="#"
              role="button"
              ><i className="fab fa-google"></i
            ></a>
      
            {/* <!-- Instagram --> */}
            <a
              className="btn btn-primary btn-floating m-1"
              style={{backgroundColor: "#ac2bac"}}
              
              href="#"
              role="button"
              ><i className="fab fa-instagram"></i
            ></a>
      
            {/* <!-- Linkedin --> */}
            <a
              className="btn btn-primary btn-floating m-1"
              style={{backgroundColor: "#0082ca"}}
              
              href="#"
              role="button"
              ><i className="fab fa-linkedin-in"></i
            ></a>
            {/* <!-- Github --> */}
            <a
              className="btn btn-primary btn-floating m-1"
              style={{backgroundColor: "#333333"}}
              
              href="#"
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
          © 2022 Copyright:
          <a className="text-white" href="https://mdbootstrap.com/">Developed By Tushar :- NIT KURUKSHETRA</a>
        </div>
        {/* <!-- Copyright --> */}
      </footer>
    )
  }
}
