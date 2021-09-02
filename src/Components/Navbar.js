import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light nav-1 ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#home">
            <img
              className="fb-logo"
              src="images/facebook-logo.png"
              alt="logo-fb"
            />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span><i className="fas fa-cog"></i></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <div className="me-auto d-flex align-items-center">
              <form>
                <input
                  className="form-control search-box"
                  type="search"
                  placeholder="Search Facebook"
                  aria-label="Search"
                />
              </form>
              <ul className="navbar-nav ">
                <li className="nav-item flinks">
                  <a className="nav-link" href="#home">
                    <i className="fas fa-home"></i>
                  </a>
                </li>
                <li className="nav-item flinks">
                  <a className="nav-link" href="#home">
                    <i className="fas fa-play-circle"></i>
                  </a>
                </li>
                <li className="nav-item flinks">
                  <a className="nav-link" href="#home">
                    <i className="fas fa-search-location"></i>
                  </a>
                </li>
                <li className="nav-item flinks">
                  <a className="nav-link" href="#home">
                    <i className="fas fa-users"></i>
                  </a>
                </li>
              </ul>
            </div>
            <ul className="navbar-nav me ">
              <li className="nav-item set-logo">
                <a className="nav-link" href="#home">
                  <i className="fas fa-cog"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>


      
 
    </>
  );
};

export default Navbar;
