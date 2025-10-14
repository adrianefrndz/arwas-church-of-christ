import React, { useState } from "react";
import "./MusicTeam.css";
//import adriane from "../assets/images/music/adriane.jpg";
import joshua from "../assets/images/music/joshua.png";
import aura from "../assets/images/music/aura.png";
import bianca from "../assets/images/music/bianca.png";
// Import musician images - replace these with actual photos
// import musician1 from "../assets/images/music/musician1.jpg";
// import musician2 from "../assets/images/music/musician2.jpg";
// import musician3 from "../assets/images/music/musician3.jpg";

const musicians = [
  {
    name: "Joshua Coz",
    role: "Drummer",
    // image: musician1,
    image: joshua,
  },
  {
    name: "Annie Aura Rivera",
    role: "Guitarist",
    // image: musician2,
    image: aura,
  },
  {
    name: "Bianca Yagin",
    role: "Keyboardist",
    // image: musician4,
    image: bianca,
  },
  {
    name: "Emily Davis",
    role: "Pianist",
    // image: musician3,
    image: "https://via.placeholder.com/300x300?text=Pianist",
  },
];

const MusicTeam: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <section id="music-team" className="music-team-section">
      <div
        className="container-fluid px-4 text-center"
        style={{ maxWidth: "900px" }}
      >
        <h2 className="display-6 fw-bold mb-3" style={{ fontSize: "1.75rem" }}>
          Praise & Worship
        </h2>
        <button
          className="music-team-reveal-btn"
          onClick={() => setIsVisible(!isVisible)}
        >
          <span className="music-note-icon">♪</span>
          {isVisible ? "Hide Music Team" : "Meet Our Music Team"}
        </button>

        <div className={`team-container ${isVisible ? "visible" : ""}`}>
          <div className="row g-3 justify-content-center">
            {musicians.map((musician, idx) => (
              <div
                key={idx}
                className="col-4 col-sm-6 col-md-4"
                style={{ maxWidth: "250px" }}
              >
                <div
                  className="card h-100  border-0 team-member-card"
                  style={{ backgroundColor: "#222222", color: "white" }}
                >
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      paddingTop: "100%",
                    }}
                  >
                    <img
                      src={musician.image}
                      alt={musician.name}
                      className="img-fluid rounded-top"
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center top",
                      }}
                    />
                  </div>
                  <div className="card-body p-2">
                    <h6
                      className="card-title mb-0"
                      style={{ fontSize: "0.85rem" }}
                    >
                      {musician.name}
                    </h6>
                    <p className="card-text">{musician.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MusicTeam;
