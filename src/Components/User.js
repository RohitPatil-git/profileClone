import React from "react";

const User = () => {
  return (
    <>
      <div className="photo-div ">
        <div className="container">
          <img
            src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y292ZXIlMjBwaG90b3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="coverphoto"
            className="cover"
          />
          <div className="profile d-flex justify-content-center">
            <img className="pr-image " src="images/profile.jpg" alt="profile" />
          </div>
          <h4 className=" d-flex justify-content-center mt-1 ml-3 fs-3 fw-bold">
            Web Devoloper
          </h4>
        </div>
        <div className="mt-4">
          <nav className="navbar navbar-expand-lg navbar-light nav-2">
            <div className="container">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span>more</span>
              </button>
              <ul className="navbar-nav me-auto ">
                <li className="nav-item sublinks">
                  <a className="nav-link" aria-current="page" href="#home">
                    Post
                  </a>
                </li>
                
                  
              </ul>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ">
                <li className="nav-item sublinks">
                    <a
                      className="nav-link"
                      aria-current="page"
                      href="#home"
                    >
                     About
                    </a>
                  </li>
                 
                  <li className="nav-item sublinks">
                    <a className="nav-link" href="#home">
                      Friends
                    </a>
                  </li>
                  <li className="nav-item sublinks">
                    <a className="nav-link" href="#home">
                      photos
                    </a>
                  </li>
                  <li className="nav-item sublinks">
                    <a className="nav-link" href="#home">
                      more
                    </a>
                  </li>
                </ul>
              </div>
              <button type="button" class="btn btn-primary me-md-3"><i class="fas fa-plus-circle"></i> Story</button>
              <button type="button" class="btn btn-light "><i class="fas fa-user-edit"></i> Profile</button>

            </div>
            
          </nav>
        </div>
      </div>
    </>
  );
};

export default User;
