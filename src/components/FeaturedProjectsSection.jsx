import { useEffect, useRef, useState } from "react";
import "../Styles/FeaturedProjectsSection.css";
import Hollas_Innovations from "../assets/Project1.png";
import Hollas_Global_tech from "../assets/Project2.png";
import PrepyourPhd from "../assets/Project3.png";
import knotsandmoments from "../assets/Project4.png";

const demoProjects = [
  {
    title: "Holla's Innovations",
    description:
      "Holla’s Innovations is a technology-driven company focused exclusively on building and operating digital products. ",
    category: "UX & UI Design",
    image: Hollas_Innovations,
    link: "https://https://www.hollasinnovations.com",
  },
  {
    title: "Holla's Global Tech",
    description:
      "Modern Tech platform for Digital solutions and Strategic Innovations.",
    category: "UX & UI Design",
    image: Hollas_Global_tech,
    link: "https://www.hollasglobaltech.com",
  },
  {
    title: "PrepyourPhd",
    description: "Next-gen LMS platform for Phd training.",
    category: "UX & UI Design",
    image: PrepyourPhd,
    link: "https://www.prepyourphd.com",
  },
  {
    title: "knots and moments",
    description: "Phtotography website",
    category: "UX & UI Design",
    image: knotsandmoments,
    link: "https://knotsandmoments.in",
  },
];

const FeaturedProjectsSection = () => {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Start only when section top hits viewport top
      if (rect.top > 0) {
        setProgress(0);
        return;
      }

      const totalScroll = section.offsetHeight - windowHeight;
      const scrolled = Math.abs(rect.top);

      let p = scrolled / totalScroll;
      p = Math.max(0, Math.min(1, p));

      setProgress(p);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const translateY = progress * (demoProjects.length - 1) * 100;

  return (
    <section
      ref={sectionRef}
      className="fp-wrapper"
      style={{ height: `${demoProjects.length * 100}vh` }}
    >
      <div className="fp-sticky">
        {/* Top Row */}
        <div className="fp-top">
          <div className="fp-left">
            <div className="fp-pill">FEATURED PROJECTS</div>
            <p>
              Discover a selection of projects designed to inspire, engage,and
              deliver results across multiple industries.
            </p>
          </div>

          <div className="fp-right">
            <a href="#">see all works →</a>
          </div>
        </div>

        {/* Big Background Text */}
        <div className="fp-bg-text">Portfolio</div>

        {/* Scroll Cards */}
        <div
          className="fp-track"
          style={{
            transform: `translateY(-${translateY}vh)`,
          }}
        >
          {demoProjects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="fp-card"
            >
              <img src={project.image} alt={project.title} />

              <div className="fp-view">view</div>

              <div className="fp-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <span>{project.category}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjectsSection;
