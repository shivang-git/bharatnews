import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <footer className="bg-dark mt-5">
      <div className="container section">
        <div className="row">
          <div className="col-lg-10 mx-auto text-center">
            <a className="d-inline-block mb-4 pb-2" href="index.html">
              Kutumbh News
              {/* <img loading="prelaod" decoding="async" className="img-fluid" src="images/logo-white.png" alt="Reporter Hugo"/> */}
            </a>
            <ul className="p-0 d-flex navbar-footer mb-0 list-unstyled ">
              <li className="nav-item my-0 mx-2"> <a className="nav-link" href="about.html">About</a></li>
              <li className="nav-item my-0 mx-2"> <a className="nav-link" href="article.html">Elements</a></li>
              <li className="nav-item my-0 mx-2"> <a className="nav-link" href="privacy-policy.html">Privacy Policy</a></li>
              <li className="nav-item my-0 mx-2"> <a className="nav-link" href="terms-conditions.html">Terms Conditions</a></li>
              <li className="nav-item my-0 mx-2"> <a className="nav-link" href="404.html">404 Page</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright bg-dark content">Designed &amp; Developed By Shivang Srivastava</div>
    </footer>
    )
  }
}
