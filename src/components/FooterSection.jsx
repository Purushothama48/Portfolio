import { useState } from "react";
import "../Styles/footerSection.css";
import profile from "../assets/profile.jpg";

const FooterSection = () => {
  const [animateFooter, setAnimateFooter] = useState(false);

  return (
    <footer
      className={`footer-wrapper ${animateFooter ? "footer-animate" : ""}`}
      onMouseEnter={() => setAnimateFooter(true)}
    >
      {/* Gradient Glow Background */}
      <div className="footer-glow"></div>

      <div className="footer-content">
        {/* LEFT COLUMN */}
        <div className="footer-left">
          <div className="footer-profile">
            <img src={profile} alt="profile" />
            <div>
              <h4>Purushothama T S</h4>
              <span>UX/UI Designer</span>
            </div>
          </div>

          <div className="footer-contact">
            <p>Contact me</p>
            <h4 className="email" typeof="Email">
              purushothamats48@gmail.com
            </h4>
            <h4 className="Phonenumber" typeof="number">
              7624944536{" "}
            </h4>
          </div>

          <a href="#" className="footer-book">
            book a call →
          </a>
        </div>

        {/* RIGHT COLUMN */}
        <div className="footer-right">
          <h2>Get in touch and let’s turn concepts into stunning websites</h2>
          <p>Transforming ideas into reality</p>
        </div>
      </div>

      {/* BIG TEXT */}
      <div className="footer-big-text">Let’s talk</div>

      {/* BOTTOM ROW */}
      <div className="footer-bottom">
        <span>© Purushothama 2026 | All Rights Reserved</span>

        <div className="footer-links">
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Built in React</a>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
