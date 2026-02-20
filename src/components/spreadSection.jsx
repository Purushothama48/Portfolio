import { useState } from "react";
import "../Styles/spreadSection.css";

import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";

const SpreadSection = () => {
  const [isSpread, setIsSpread] = useState(false);

  return (
    <section
      className="spread-cursor-wrapper"
      onMouseEnter={() => setIsSpread(true)}
      onMouseLeave={() => setIsSpread(false)}
    >
      <div className="spread-cursor-container">
        <div
          className="spread-cursor-card spread-cursor-top-left"
          style={{
            transform: isSpread
              ? "translate(-380px, -120px) rotate(-15deg)"
              : "translate(0px, 0px) rotate(-15deg)",
          }}
        >
          <img src={img1} alt="spread-1" />
        </div>

        <div
          className="spread-cursor-card spread-cursor-top-right"
          style={{
            transform: isSpread
              ? "translate(380px, -120px) rotate(15deg)"
              : "translate(0px, 0px) rotate(15deg)",
          }}
        >
          <img src={img2} alt="spread-2" />
        </div>

        <div
          className="spread-cursor-card spread-cursor-bottom-left"
          style={{
            transform: isSpread
              ? "translate(-320px, 150px) rotate(-20deg)"
              : "translate(0px, 0px) rotate(-20deg)",
          }}
        >
          <img src={img3} alt="spread-3" />
        </div>

        <div
          className="spread-cursor-card spread-cursor-bottom-right"
          style={{
            transform: isSpread
              ? "translate(320px, 150px) rotate(20deg)"
              : "translate(0px, 0px) rotate(20deg)",
          }}
        >
          <img src={img4} alt="spread-4" />
        </div>
        <div
          className="spread-cursor-card spread-cursor-bottom-right"
          style={{
            transform: isSpread
              ? "translate(-20px, 150px) rotate(20deg)"
              : "translate(0px, 0px) rotate(-25deg)",
          }}
        >
          <img src={img5} alt="spread-5" />
        </div>

        <div
          className="spread-cursor-card spread-cursor-bottom-right"
          style={{
            transform: isSpread
              ? "translate(-40px, -360px) rotate(20deg)"
              : "translate(0px, 0px) rotate(25deg)",
          }}
        >
          <img src={img6} alt="spread-6" />
        </div>

        <div className="spread-cursor-center">
          <h2>
            UI/UX Designer and Frontend Developer crafting seamless, responsive,
            and user-centered web applications using Figma and React.
          </h2>
        </div>
      </div>
    </section>
  );
};

export default SpreadSection;
