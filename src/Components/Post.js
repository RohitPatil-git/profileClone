import React from "react";
import PostCad from "../PostCad";
import { Scrollbars } from 'react-custom-scrollbars';
const Post = () => {
  return (
    <div className="post-div">
      <div className="d-flex justify-content-center">
        <div className="row">
          <div className="col-md-5 col-sm-12">
            <div className="card" style={{ width: "22rem" }}>
              <div className="card-body">
                <h5 className="card-title">Intro</h5>
                <p className="card-text">
                  <i className="fas fa-briefcase"></i> Frontend Devloper
                </p>
                <p className="card-text">
                  <i className="fas fa-home"></i> Lives in Islampur
                </p>
                <button type="button" className="btn btn-light card-btn">
                  Edit details
                </button>{" "}
                <br />
                <button type="button" className="btn btn-light card-btn">
                  Add Hobbies{" "}
                </button>{" "}
                <br />
                <button type="button" className="btn btn-light card-btn">
                  Add Featured
                </button>
              </div>
            </div>
            <div className="card" style={{ width: "22rem" }}>
              <div className="card-body">
                <h5 className="card-title">Photos</h5>
               <img src="images/snip.png" alt="snip" />
                
              </div>
            </div>
            <div className="card" style={{ width: "22rem" }}>
              <div className="card-body">
                <h5 className="card-title">Friends</h5>
               <img src="images/snip2.png" alt="snip" />
                
              </div>
            </div>
          </div>
          <div className="col-md-7 left">
            <div className="card">
              <div className="card-body">
                <div className="post-box d-flex">
                  <img
                    className="me-2 pf-circle"
                    src="images/profile.jpg"
                    alt="profile"
                  />
                  <input
                    type="text"
                    className="form-control search-box flex-grow-1"
                    placeholder="whats on your mind?"
                  />
                </div>

                <div className="card-body mt-2">
                  <button type="button" className="btn sublinks">
                    <i className="fas fa-video"></i>LiveVideo
                  </button>
                  <button type="button" className="btn sublinks">
                  <i className="fas fa-image"></i> Photo/Video
                  </button>
                  <button type="button" className="btn sublinks">
                  <i className="fas fa-flag"></i>Life Events
                  </button>
                </div>
                
              </div>
             
            </div>
            <Scrollbars style={{ width: 500, height: 1000 }}>
            <div className="scroll">
           
            <PostCad/>
            <PostCad/>
            <PostCad/>
            <PostCad/>
            </div>
            </Scrollbars>

          </div>
         
        </div>
        
      </div>
    </div>
  );
};

export default Post;
