import "../Styles/hero.css";
import { FaLinkedinIn } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import { useState } from "react";

const Hero = () => {
  const [animateText, setAnimateText] = useState(false);
  return (
    <section className="hero-section" onMouseEnter={() => setAnimateText(true)}>
      {/* Orbital Circle Animation */}
      <div className="hero-orbital">
        <h2 className="hero-orbital-text">HELLO</h2>

        <div className="hero-ring hero-ring-thin">
          <div className="hero-ring hero-orbit"></div>
        </div>

        <div className="hero-ring hero-ring-thick"></div>
      </div>

      <div className="hero-glow"></div>
      <div className="hero-grid"></div>

      <div className="hero-socials">
        <a
          href="https://www.linkedin.com/in/purushothama-t-s-871601253/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FaLinkedinIn />
        </a>

        <a
          href="https://www.figma.com/@your-figma-username"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FiFigma />
        </a>
      </div>

      <div className="hero-svg-wrapper">
        <svg
          viewBox="0 0 900 300"
          className={`hero-svg-text ${animateText ? "animate" : ""}`}
        >
          <text x="0" y="100" className="hero-svg-main">
            <tspan x="0" dy="0">
              UIUX
            </tspan>
            <tspan x="0" dy="120">
              Designer
            </tspan>
          </text>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
