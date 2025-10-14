import React from "react";
import logo from "../assets/images/church/logo.png"; // Replace with actual logo path

const Navbar: React.FC = () => {
  return (
    <nav
      className="navbar navbar-expand-lg sticky-top"
      style={{
        backgroundColor: "#F0E4D3", // light gray
        backgroundImage: "none", // removes any gradient
        zIndex: 1050, // ensures it stays above other content
        boxShadow: "0 2px 12px 0 rgba(78, 84, 200, 0.08)", // subtle shadow for floating effect
      }}
    >
      <div className="container-fluid py-2">
        <a
          href="#home"
          className="navbar-brand d-flex align-items-center"
          style={{ marginRight: 0 }}
        >
          <img
            src={logo}
            alt="Church Logo"
            style={{
              height: "60px",
              width: "60px",
              objectFit: "fill",
              marginRight: "1rem",
              marginLeft: "1rem",
            }}
          />
        </a>
        {/* <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-lg-3">
            <li className="nav-item">
              <a
                className="nav-link px-3 rounded-pill fw-semibold"
                href="#home"
                style={{ transition: "background 0.2s" }}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link px-3 rounded-pill fw-semibold"
                href="#about"
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link px-3 rounded-pill fw-semibold"
                href="#events"
              >
                Events
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link px-3 rounded-pill fw-semibold"
                href="#leadership"
              >
                Leadership
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link px-3 rounded-pill fw-semibold"
                href="#resources"
              >
                Resources
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link px-3 rounded-pill fw-semibold"
                href="#contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
