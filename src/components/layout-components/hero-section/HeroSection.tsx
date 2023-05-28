/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from "react";
import "./hero.models.css";
import { Button, CommunityButton } from "../../ui-components/button/Button";
import FreeimageDataList from "./heroImage.data.json";

interface ImageData {
  _id: number;
  image_src: string | null;
  image_alt: string;
}

const HeroSection = () => {
  const [imageOne, setImageOne] = useState<ImageData | any>(null);
  const [imageTwo, setImageTwo] = useState<ImageData | any>(null);
  const [imageThree, setImageThree] = useState<ImageData | any>(null);
  const [imageFour, setImageFour] = useState<ImageData | any>(null);
  const [imageFive, setImageFive] = useState<ImageData | any>(null);
  const [imageSix, setImageSix] = useState<ImageData | any>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const generatedNumbers: Array<number> = [];

      while (generatedNumbers.length < 6) {
        const randomNumber =
          Math.floor(Math.random() * (FreeimageDataList.length - 1)) + 1;

        if (!generatedNumbers.includes(randomNumber)) {
          generatedNumbers.push(randomNumber);
        }
      }

      const [
        randomNum1,
        randomNum2,
        randomNum3,
        randomNum4,
        randomNum5,
        randomNum6,
      ] = generatedNumbers;

      setImageOne(
        FreeimageDataList?.filter((data) => data?._id === randomNum1)[0]
      );

      setImageTwo(
        FreeimageDataList?.filter((data) => data?._id === randomNum2)[0]
      );
      setImageThree(
        FreeimageDataList?.filter((data) => data?._id === randomNum3)[0]
      );
      setImageFour(
        FreeimageDataList?.filter((data) => data?._id === randomNum4)[0]
      );
      setImageFive(
        FreeimageDataList?.filter((data) => data?._id === randomNum5)[0]
      );
      setImageSix(
        FreeimageDataList?.filter((data) => data?._id === randomNum6)[0]
      );
    }, 2000);

    // Clean up the interval on unmount
    return () => clearInterval(interval);
  }, []);

  console.log("imageOne", imageOne?.image_src);
  return (
    <header className="hero">
      <div className="hero___headerImage">
        <img
          src={`https://drive.google.com/uc?export=view&id=${imageOne?.image_src}`}
          className="hero___headerImage--imagesOne"
          alt={imageOne?.image_alt}
        />
        <img
          src={`https://drive.google.com/uc?export=view&id=${imageTwo?.image_src}`}
          className="hero___headerImage--imagesTwo"
          alt={imageTwo?.image_alt}
        />
        <div className="hero___headerImage--rectangleOne"></div>
        <div className="hero___headerImage--rectangleTwo"></div>
        <img
          src={`https://drive.google.com/uc?export=view&id=${imageThree?.image_src}`}
          className="hero___headerImage--imagesThree"
          alt={imageThree?.image_alt}
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
          src={`https://drive.google.com/uc?export=view&id=${imageFour?.image_src}`}
          className="hero___headerImage--imagesFour"
          alt={imageFour?.image_alt}
        />
        <img
          src={`https://drive.google.com/uc?export=view&id=${imageFive?.image_src}`}
          className="hero___headerImage--imagesFive"
          alt={imageFive?.image_alt}
        />
        <div className="hero___headerImage--rectangleThree"></div>
        <div className="hero___headerImage--rectangleFour"></div>
        <img
          src={`https://drive.google.com/uc?export=view&id=${imageSix?.image_src}`}
          className="hero___headerImage--imagesSix"
          alt={imageSix?.image_alt}
        />
      </div>
    </header>
  );
};

export default HeroSection;
