import React from "react";
import "./About.css";
import about from "../assets/images/church/about.png";

const AboutUs: React.FC = () => (
  <section id="about" className="about-section">
    <div className="container">
      <div className="row align-items-center ">
        {/* Left column with image */}
        <div className="col-md-6 about-img-col d-flex justify-content-start">
          <img src={about} alt="About Us" className="about-img" />
        </div>
        {/* Right column with Our Mission */}
        <div className="col-12 col-md-6 about-mission-col">
          <h2 className="abou t-title">Our Mission</h2>
          <p className="about-desc">
            The Arwas Church of Christ is a welcoming community dedicated to
            faith, fellowship, and service. Our mission is to make disciples,
            inspire hope, share love, and make a positive impact.
          </p>
          {/* <button className="about-btn">
            More About Us <span className="about-btn-arrow">&rarr;</span>
          </button> */}
        </div>
      </div>
    </div>
  </section>
);

export default AboutUs;
