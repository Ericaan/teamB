import React from "react";
import about_pic from '../images/about2.png';

function About() {
  return (
    <div className="about">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={about_pic}
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">About Our Website</h1>
            <p>
              In this website, users can pull data from API such as The Author List, The Post List, and The User List.
              Users also can create new author and user. Moreover, they can post and delete their contents. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
