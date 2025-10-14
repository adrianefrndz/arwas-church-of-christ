import React from "react";
import "./Home.css";
import churchBg from "../assets/images/church/church_bg.jpg";

const Home: React.FC = () => (
  <section id="home" className="home-section">
    {/* Background Image */}
    <img className="img" src={churchBg} alt="Church background" />
    {/* Main Content */}
    <div
      className="container justify-content-center text-center py-5"
      style={{ position: "relative", zIndex: 1 }}
    >
      <h1 className="display-2 fw-bold mb-3">Arwas Church Of Christ</h1>
      <p className="display-6 mb-8 fw-bold">(Ephesians 5:23)</p>
      <p className="lead mb-8">
        Join us in worship, community, and service. All are welcome!
      </p>
      <a
        href="#about"
        className="btn m-2px btn-success btn-lg px-5 rounded-pill fw-semibold shadow me-3"
        style={{
          border: "none",
          boxShadow:
            "0 6px 32px 0 rgba(78, 84, 200, 0.25), 0 2px 8px 0 rgba(0,0,0,0.10)",
        }}
      >
        Learn More
      </a>
      <a
        href="https://maps.app.goo.gl/CDjeg6Sgr5G5Bkj37"
        target="_blank"
        rel="noopener noreferrer"
        className="btn m-2px btn-success btn-lg px-5 rounded-pill fw-semibold shadow"
        style={{
          border: "none",
          boxShadow:
            "0 6px 32px 0 rgba(78, 84, 200, 0.25), 0 2px 8px 0 rgba(0,0,0,0.10)",
          marginLeft: "1rem",
        }}
      >
        Get Directions
      </a>
    </div>
  </section>
);

export default Home;
