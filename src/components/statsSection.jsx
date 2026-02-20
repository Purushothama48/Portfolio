import { useEffect, useRef, useState } from "react";
import "../Styles/statsSection.css";
import {
  SiFigma,
  SiFramer,
  SiMural,
  SiNotion,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiBootstrap,
} from "react-icons/si";

const statsData = [
  { label: "Projects Delivered", value: 6 },
  { label: "Years Professional Experience", value: 2 },
  { label: "Live Production Deployments", value: 4 },
  { label: "Tools Known", value: 9 },
];
const toolsIcons = [
  { icon: <SiFigma />, name: "Figma" },
  { icon: <SiFramer />, name: "Framer" },
  { icon: <SiMural />, name: "Mural" },
  { icon: <SiNotion />, name: "Notion" },
  { icon: <SiHtml5 />, name: "HTML" },
  { icon: <SiCss3 />, name: "CSS" },
  { icon: <SiJavascript />, name: "JavaScript" },
  { icon: <SiReact />, name: "React" },
  { icon: <SiBootstrap />, name: "Bootstrap" },
];

const StatsSection = () => {
  const sectionRef = useRef(null);
  const [startAnimation, setStartAnimation] = useState(false);
  const [counts, setCounts] = useState(statsData.map(() => 0));

  // Trigger animation when section enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAnimation(true);
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Count up animation
  useEffect(() => {
    if (!startAnimation) return;

    statsData.forEach((stat, index) => {
      let start = 0;
      const duration = 1500;
      const increment = stat.value / (duration / 16);

      const counter = setInterval(() => {
        start += increment;
        setCounts((prev) => {
          const updated = [...prev];
          updated[index] = Math.min(Math.floor(start), stat.value);
          return updated;
        });

        if (start >= stat.value) clearInterval(counter);
      }, 16);
    });
  }, [startAnimation]);

  return (
    <section ref={sectionRef} className="stats-section-wrapper">
      <div className="stats-left-text">
        <p>
          I operate at the intersection of design and development — transforming
          complex ideas into intuitive, high-performing digital products.
        </p>
        <p>
          With hands-on experience , I design structured UI systems and build
          scalable React applications that align business goals with user needs.
        </p>
        <p>
          My work blends design thinking, usability principles, and clean
          frontend architecture to deliver seamless, production-ready solutions.
        </p>
      </div>

      <div className="stats-right-container">
        {statsData.map((stat, index) => (
          <div
            key={index}
            className={`stats-item ${startAnimation ? "stats-animate" : ""}`}
          >
            <h2
              className={`stats-heading ${
                startAnimation ? "stats-animate" : ""
              }`}
            >
              {stat.label}
            </h2>

            <div className="stats-badge">{counts[index]}</div>

            {/* Show tools icons only under Tools Known */}
            {stat.label === "Tools Known" && (
              <div className="tools-icons-container">
                {toolsIcons.map((tool, i) => (
                  <div key={i} className="tool-icon">
                    {tool.icon}
                    <span>{tool.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
