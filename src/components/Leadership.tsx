import React from "react";
import "./Leadership.css";

// Import leader images - replace these with actual photos
import randy from "../assets/images/leaders/randy.png";
import davis from "../assets/images/leaders/davis.png";
import rodrigo from "../assets/images/leaders/rodrigo.png";

const leaders = [
  {
    name: "Bro. Randy Fernandez",
    role: "Church Pastor",
    // image: pastor1,
    image: randy,
  },
  {
    name: "Bro. Rodrigo Coz",
    role: "Church Elder",
    // image: elder1,
    image: rodrigo,
  },
  {
    name: "Bro. Davis Yagin",
    role: "Church Elder",
    // image: elder2,
    image: davis,
  },
];

const Leadership: React.FC = () => (
  <section id="leadership" className="leadership-section">
    <div className="container text-center">
      <h2 className="leadership-title">Leadership</h2>
      <div className="row g-4 justify-content-center">
        {leaders.map((leader, idx) => (
          <div key={idx} className="col-6 col-md-3 leadership-col">
            <div
              className="card h-100 leadership-card"
              style={{ backgroundColor: "#DCC5B2", border: "none" }}
            >
              <div className="leadership-img-wrapper">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="img-fluid rounded-top leadership-img"
                />
              </div>
              <div className="card-body p-2">
                <h6 className="card-title mb-0 leadership-name">
                  {leader.name}
                </h6>
                <p className="leadership-role">{leader.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Leadership;
