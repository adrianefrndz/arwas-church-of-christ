import React from "react";
import "./WeeklyWorship.css";
import logo from "../assets/images/church/logo_bottom.png"; // Replace with actual logo path

const WeeklyWorship: React.FC = () => (
  <section id="contact" className="weekly-worship-section">
    <div className="weekly-worship-container">
      {/* Left: Logo & Address */}
      <div className="weekly-worship-col left">
        <img
          style={{
            maxWidth: "150%",
            height: "auto",
            minWidth: "130px",
          }}
          src={logo}
          alt="Church Logo"
          className="weekly-worship-logo"
        />
        <div className="gap" />
        <div className="weekly-worship-address">
          <span> Boundary of Arwas & San Jose, </span>
        </div>
        <div className="weekly-worship-address">
          <span> Bani, Pangasinan, Philippines</span>
        </div>
      </div>
      {/* Middle: Time/Services */}
      <div className="weekly-worship-col left">
        <h5 className="weekly-worship-title">Schedule of Services</h5>
        <div className="gap2" />
        <div className="schedule">
          <span className="fw-semibold">Sunday Service</span>
        </div>
        <div className="schedule">
          <span> 8:00 - 10:30 AM | Church Chapel</span>
        </div>
        <div className="gap" />

        <div className="schedule">
          <span className="fw-semibold">Midweek Service</span>
        </div>
        <div className="schedule">
          <span> 6:00 - 7:00 PM | Church Chapel</span>
        </div>
      </div>
      {/* Right: Contact Info */}
      <div className="weekly-worship-col left">
        <div className="weekly-worship-title">
          <span className="weekly-worship-title">Contact Info</span>
          <div className="gap2" />
          <h6 className="schedule"> 0948-373-3465</h6>
        </div>
        <div className="weekly-worship-facebook">
          <a
            href="https://www.facebook.com/profile.php?id=100090504360272"
            target="_blank"
            rel="noopener noreferrer"
            className="d-flex justify-content-center"
            style={{
              color: "white",
              border: "none",
              alignItems: "center",
            }}
          >
            <i className="bi bi-facebook fs-2" />
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default WeeklyWorship;
