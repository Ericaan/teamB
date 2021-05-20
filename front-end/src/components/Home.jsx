import React from "react";
import home_pic from '../images/workplace.jpeg';

function Home() {
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={home_pic}
              alt="Workplace"
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Studio 4</h1>
            <p>
              Studio 4 is a course in OPAIC where students will practice and apply their technical and soft skills.
              This course is also using industry workplace-like workflows and tools.
              Each student has different role in their own team. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
