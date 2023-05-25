import React from "react";

const Navbar = () => {
  const styles = {
    color: "white",
  };

  return (
    <div className="bg bg-dark">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid" style={styles}>
          <a className="navbar-brand text-white" href="#">
            Start Bootstrap
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon navbar-dark"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavAltMarkup">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link text-white"
                  aria-current="page"
                  href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white-50" aria-current="page" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white-50" aria-current="page" href="#">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white-50" aria-current="page" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
