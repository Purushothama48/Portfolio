import "../Styles/FeaturedProjectsSection.css";

import Hollas_Innovations from "../assets/Project1.png";
import Hollas_Global_tech from "../assets/Project2.png";
import PrepyourPhd from "../assets/Project3.png";
import knotsandmoments from "../assets/Project4.png";
import Nyla from "../assets/Project5.png";

const demoProjects = [
  {
    title: "Holla's Innovations",
    description: "Technology-driven digital product company.",
    category: "UX & UI Design",
    image: Hollas_Innovations,
    link: "https://www.hollasinnovations.com",
  },
  {
    title: "Holla's Global Tech",
    description: "Modern tech platform for innovation.",
    category: "UX & UI Design",
    image: Hollas_Global_tech,
    link: "https://www.hollasglobaltech.com",
  },
  {
    title: "PrepyourPhd",
    description: "Next-gen LMS platform.",
    category: "UX & UI Design",
    image: PrepyourPhd,
    link: "https://www.prepyourphd.com",
  },
  {
    title: "Knots & Moments",
    description: "Photography website.",
    category: "UX & UI Design",
    image: knotsandmoments,
    link: "https://knotsandmoments.in",
  },
  {
    title: "NYLA",
    description: "Financial website.",
    category: "UX & UI Design",
    image: Nyla,
    link: "https://www.nyla.co.in/",
  },
];

const FeaturedProjectsSection = () => {
  return (
    <section className="fp-wrapper">
      
      {/* TOP */}
      <div className="fp-top">
        <div className="fp-left">
          <div className="fp-pill">FEATURED PROJECTS</div>
          <p>
            Discover a selection of projects designed to inspire and deliver results.
          </p>
        </div>
      </div>

      {/* GRID */}
      <div className="fp-grid">
        {demoProjects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="fp-grid-card"
          >
            <img src={project.image} alt={project.title} />

            <div className="fp-grid-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <span>{project.category}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjectsSection;