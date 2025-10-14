import React from "react";
import "./PhotoMarquee.css";
import marquee1 from "../assets/images/marquee/marquee-square1.jpg";
import marquee2 from "../assets/images/marquee/marquee-square2.jpg";
import marquee3 from "../assets/images/marquee/marquee-square3.jpg";
import marquee4 from "../assets/images/marquee/marquee1-5x4.jpg";
import marquee5 from "../assets/images/marquee/marquee2-5x4.jpg";
import marquee6 from "../assets/images/marquee/marquee3-5x4.jpg";

const images = [
  { src: marquee1, shape: "square" },
  { src: marquee4, shape: "vertical" },
  { src: marquee2, shape: "square" },
  { src: marquee5, shape: "vertical" },
  { src: marquee3, shape: "square" },
  { src: marquee6, shape: "vertical" },
];

const PhotoMarquee: React.FC = () => (
  <section className="photo-marquee-section">
    <div className="photo-marquee-marquee-container">
      <div className="photo-marquee-marquee">
        {/* Repeat images enough times for a seamless loop */}
        {Array(3)
          .fill(images)
          .flat()
          .map((img, idx) => (
            <span
              className={`photo-marquee-img-wrapper ${
                img.shape === "square"
                  ? "photo-marquee-square"
                  : "photo-marquee-vertical"
              }`}
              key={idx}
            >
              <img
                src={img.src}
                alt={`Church Gallery ${idx + 1}`}
                className="photo-marquee-img"
              />
            </span>
          ))}
      </div>
    </div>
  </section>
);

export default PhotoMarquee;
