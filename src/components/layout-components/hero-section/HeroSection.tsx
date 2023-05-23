import React from "react";
import "./hero.models.css";
import { Button, CommunityButton } from "../../ui-components/button/Button";
const HeroSection = () => {
  return (
    <header className="hero">
      <div className="hero___headerImage">
        <img />
        <img />
        <div className="hero___headerImage--rectangleOne"></div>
        <div className="hero___headerImage--rectangleTwo"></div>
        <img />
      </div>

      <div className="hero___headerTitle">
        <h1>
          Unlock <span>Stunning </span> Hero <span>Sections </span> for Your
          Website
        </h1>
        <h6>
          Hero Haven offers captivating and free hero sections for websites.
          Choose from a diverse collection of high-quality designs to enhance
          visual appeal, engage users, and increase conversions. Elevate your
          online experience now!
        </h6>
        <div className="hero___headerTitle--buttonController">
          <Button title="Explore"/>
          <CommunityButton title="Community" />
        </div>
      </div>

      <div className="hero___headerImage">
        <img />
        <img />
        <div className="hero___headerImage--rectangleThree"></div>
        <div className="hero___headerImage--rectangleFour"></div>
        <img />
      </div>
    </header>
  );
};

export default HeroSection;
