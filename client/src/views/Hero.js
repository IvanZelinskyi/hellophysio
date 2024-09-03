import React from "react";
import { PiArrowCircleDownLight } from "react-icons/pi";
import MagneticElement from "../components/MagneticElement";
import useWindowDimensions from "../useWindowDimensions";
import { CiInstagram } from "react-icons/ci";
import { PiTelegramLogoThin } from "react-icons/pi";

const Hero = ({ scrollToVideoRef }) => {
  let { width } = useWindowDimensions();
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
            Моя ціль – ваше відновлення. <br />
            Пропоную онлайн і офлайн сесії в центрі. <br />
            Почнімо відновлення разом – запишіться на консультацію!
          </span>
        </div>
        <div
          className="hero-arrow"
          onClick={() =>
            scrollToVideoRef.current.scrollIntoView({ behavior: "smooth" })
          }
        >
          {width > 768 ? (
            <MagneticElement text={<PiArrowCircleDownLight />} />
          ) : (
            <span>
              <PiArrowCircleDownLight />
            </span>
          )}
        </div>
        <div className="hero-bottom">
          {width > 768 ? (
            <MagneticElement text={"Instagram"} />
          ) : width > 500 ? (
            <span>Instagram</span>
          ) : (
            <span>
              <CiInstagram className="hero-socials-icon" />
            </span>
          )}
          {width > 768 ? (
            <MagneticElement text={"Telegram"} />
          ) : width > 500 ? (
            <span>Telegram</span>
          ) : (
            <span>
              <PiTelegramLogoThin className="hero-socials-icon" />
            </span>
          )}
        </div>
        {/* ARROW DOWN  */}
      </div>
    </div>
  );
};

export default Hero;
