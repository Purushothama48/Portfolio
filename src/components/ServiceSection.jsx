import { useState } from "react";
import "../Styles/ServiceSection.css";
import uiux_service from "../assets/service1.jpg";

const services = [
  {
    id: "01",
    title: "UI / UX Design",
    description:
      "I design user-first interfaces for mobile apps, SaaS platforms, and dashboards — balancing usability with aesthetics.",
    image: uiux_service,
  },
  {
    id: "02",
    title: "Web Design",
    description:
      "From landing pages to full websites — I craft sleek, high-converting designs that capture attention.",
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "03",
    title: "Branding",
    description:
      "I help shape bold, cohesive identities that speak clearly and look sharp across every touchpoint.",
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=900&q=80",
  },
];

const ServicesSection = () => {
  const [activeImage, setActiveImage] = useState(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  return (
    <section className="services-wrapper" onMouseMove={handleMouseMove}>
      <div className="services-header">
        <div className="services-pill">SERVICES</div>
        <p>
          Explore a range of creative services made to grow your brand and reach
          more people.
        </p>
      </div>

      <div className="services-list">
        {services.map((service, index) => (
          <div
            key={index}
            className="services-item"
            onMouseEnter={() => setActiveImage(service.image)}
            onMouseLeave={() => setActiveImage(null)}
          >
            <div className="services-left">
              <h2>
                {service.title}
                <span>{service.id}</span>
              </h2>
            </div>

            <div className="services-right">
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>

      {activeImage && (
        <div
          className="services-hover-image"
          style={{
            top: position.y - 200,
            left: position.x - 200,
          }}
        >
          <img src={activeImage} alt="" />
        </div>
      )}
    </section>
  );
};

export default ServicesSection;
