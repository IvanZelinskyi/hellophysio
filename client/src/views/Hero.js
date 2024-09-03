import React from "react";
import { PiArrowCircleDownLight } from "react-icons/pi";
import MagneticElement from "../components/MagneticElement";
const Hero = ({ scrollToVideoRef }) => {
  return (
    <div className="hero">
      <div className="hero-content">
        {/* PRIMARY TEXT */}
        <div className="hero-primary-text">
          <h1>
            HELLO<span>PHYSIO</span>
          </h1>
          <h1>
            <span>Микита</span>Крупорушкiн
          </h1>
        </div>
        {/* SECONDARY TEXT  */}
        <div className="hero-secondary-text">
          <span>
            Моя мета – допомогти вам відновити здоров'я і впевненість у русі.{" "}
            <br />Я пропоную співпрацю як онлайн, так і офлайн у моему центрi
            фiзичноi терапii. <br />
            Запишіться на консультацію, і ми разом розпочнемо шлях до вашого
            відновлення!
          </span>
        </div>
        <div
          className="hero-arrow"
          onClick={() =>
            scrollToVideoRef.current.scrollIntoView({ behavior: "smooth" })
          }
        >
          <MagneticElement text={<PiArrowCircleDownLight />} />
        </div>
        <div className="hero-bottom">
          <MagneticElement text={"Instagram"} />
          <MagneticElement text={"Telegram"} />
        </div>
        {/* ARROW DOWN  */}
      </div>
    </div>
  );
};

export default Hero;
