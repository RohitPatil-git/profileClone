import React from "react";

const PostCad = () => {
  return (
    <>
      <div className="card postcard" style={{ width: "32rem" }}>
      <div className="d-flex">
        <img src="images/profile.jpg" className="pf-circle" alt="card" />
        <p>
          <span className="pr-name">Rohit Patil</span> upload a post <i className="fas fa-ellipsis-h dots"></i>
        </p>
        </div>
        <div class="card-body">
          <p class="card-title">Nature Is Awesome</p>
          <img src="images/feed1.jpg" className="card-img-top"alt="" />
        </div>
      </div>
    </>
  );
};

export default PostCad;
