import React from "react";
import "./Events.css";

// Example event images (replace with your actual image paths)
import music_workshop from "/src/assets/images/events/music_workshop.jpg";
// import DEFAULT_PIC from "/src/assets/images/default_img.jpg";
import pastors from "/src/assets/images/events/pastors.jpg";
import convention from "/src/assets/images/events/church_convention.jpg";
import nyc from "/src/assets/images/events/nyc.png";
const events = [
  {
    date: "September 13, 2025",
    title: "NSPKKK Music Workshop 2.0",
    time: "",
    image: music_workshop,
  },
  {
    date: "October 2025",
    title: "Pastor's Day (Provincial)",
    time: "",
    image: pastors,
  },
  {
    date: "November 22, 2025",
    title: "National Youth Convention",
    time: "",
    image: nyc,
  },
  {
    date: "December 6, 2025",
    title: "Provincial Convention",
    time: "",
    image: convention,
  },
];

const Events: React.FC = () => (
  <section className="events" id="events">
    <div className="container position-relative events-container">
      <div className="text-center mb-5">
        <h2 className="events-title display-6 fw-bold">Upcoming Events</h2>
      </div>
      <div className="row events-list-vertical">
        {events.map((event, idx) => (
          <div key={idx} className="col-12 col-md-3 events-col">
            <div className="card events-card shadow-sm border-0 h-100 w-100">
              {event.image && (
                <img
                  src={event.image}
                  alt={event.title}
                  className="events-card-img"
                />
              )}
              <div className="card-body text-center py-4">
                <div className="events-date">{event.date}</div>
                <h5 className="card-title events-card-title mb-2">
                  {event.title}
                </h5>
                {event.time && <div className="events-time">{event.time}</div>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Events;
