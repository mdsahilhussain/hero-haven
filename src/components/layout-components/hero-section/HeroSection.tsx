import React, { useState, useEffect } from "react";
import "./hero.models.css";
import { Button, CommunityButton } from "../../ui-components/button/Button";
import FreeimageDataList from "./heroimage.data.json";
const HeroSection = () => {
  const [imageOne, setImageOne] = useState<object | unknown>(null);
  const [imageTwo, setImageTwo] = useState<object | unknown>(null);
  const [imageThree, setImageThree] = useState<object | unknown>(null);
  const [imageFour, setImageFour] = useState<object | unknown>(null);
  const [imageFive, setImageFive] = useState<object | unknown>(null);
  const [imageSix, setImageSix] = useState<object | unknown>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomNumber = Math.round(
        Math.random() * (FreeimageDataList.length - 1)
      );
      setImageOne(
        FreeimageDataList?.filter((data) => data?._id === randomNumber)
      );
    }, 5000);

    // Clean up the interval on unmount
    return () => clearInterval(interval);
  }, []);

  console.log(imageOne);
  return (
    <header className="hero">
      <div className="hero___headerImage">
        <img
          src={imageOne?.image_src}
          className="hero___headerImage--imagesOne"
          alt="imagesOne"
        />
        <img
          src={""}
          className="hero___headerImage--imagesTwo"
          alt="imagesTwo"
        />
        <div className="hero___headerImage--rectangleOne"></div>
        <div className="hero___headerImage--rectangleTwo"></div>
        <img
          src={""}
          className="hero___headerImage--imagesThree"
          alt="imagesThree"
        />
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
          <Button title="Explore" />
          <CommunityButton title="Community" />
        </div>
      </div>

      <div className="hero___headerImage">
        <img
          src={""}
          className="hero___headerImage--imagesFour"
          alt="imagesFour"
        />
        <img
          src={""}
          className="hero___headerImage--imagesFive"
          alt="imagesFive"
        />
        <div className="hero___headerImage--rectangleThree"></div>
        <div className="hero___headerImage--rectangleFour"></div>
        <img
          src={""}
          className="hero___headerImage--imagesSix"
          alt="imagesSix"
        />
      </div>
    </header>
  );
};

export default HeroSection;
