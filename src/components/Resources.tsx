import React from "react";
import "./Resources.css";

const resources = [
  // {
  //   title: "Bible Study Guides",
  //   description: "Downloadable guides to help you dive deeper into the Word.",
  //   link: "#",
  // },
  {
    title: "Devotionals",
    description: "Daily and weekly devotionals for spiritual growth.",
    link: "#",
  },
  {
    title: "Podcasts",
    description: "Listen to inspiring messages and discussions.",
    link: "#",
  },
  // {
  //   title: "Downloadable Content",
  //   description: "Access printable resources and study materials.",
  //   link: "#",
  // },
];

const Resources: React.FC = () => (
  <section id="resources" className="resources-section">
    <div className="container">
      <h2 className="resources-title">Resources</h2>
      <p className="resources-desc">
        Explore our collection of Bible study guides, devotionals, podcasts, and
        downloadable content to support your spiritual journey.
      </p>
      <div className="row justify-content-center g-4">
        {resources.map((res, idx) => (
          <div key={idx} className="col-12 col-md-6 col-lg-3">
            <div className="resources-card h-100">
              <h5 className="resources-card-title">{res.title}</h5>
              <p className="resources-card-desc">{res.description}</p>
              <a href={res.link} className="resources-link ">
                Available soon
                {/* Soon {res.title} */}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Resources;
