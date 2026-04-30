import "../Styles/LogosSection.css";

// Import images
import Eventographer from "../assets/logo/Eventographer.png";
import Hollasperspective from "../assets/logo/Hollasperspective.png";
import HouseofMahaa from "../assets/logo/HouseofMahaa.png";
import KnotsandMoments from "../assets/logo/KnotsandMoments.png";
import Lavshi from "../assets/logo/Lavshi.png";
import PrepyourPhd from "../assets/logo/PrepyourPhd.png";

const logos = [
  { img: Eventographer },
  { img: Hollasperspective },
  { img: HouseofMahaa },
  { img: KnotsandMoments},
  { img: Lavshi },
  { img: PrepyourPhd },

];

const LogosSection = () => {
  return (
    <section className="logos-wrapper">
      <div className="logos-fade logos-fade-left"></div>

      <div className="logos-track">
        {[...logos, ...logos].map((logo, index) => (
          <div key={index} className="logo-item">
            <img src={logo.img} alt={logo.name} className="logo-icon" />
            <span className="logo-name">{logo.name}</span>
          </div>
        ))}
      </div>

      <div className="logos-fade logos-fade-right"></div>
    </section>
  );
};

export default LogosSection;