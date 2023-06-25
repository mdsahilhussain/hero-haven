import React, { useEffect, useState } from "react";
import "./topContributor.models.css";
import profileImage from "../../../assets/contributer_profileImage.jpg";
import contributorData from "./contributers.data.json";
const TopContributor = () => {
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <section className="contributor">
      <h3>
        Our Top <span>5</span> Contributors
      </h3>
      <div className="contributor___container">
        <div className="contributor___container___ranker">
          <div
            className="contributor___container___ranker--card card_line3"
            style={{ alignItems: "flex-start" }}
          >
            <div
              className="contributor___container___ranker--card__image image_line3"
              style={{ marginLeft: "2em" }}
            >
              <img src={profileImage} alt="profile_image" />
              <span>4</span>
              <h5>Sahil Hussain</h5>
            </div>
            <div className="contributor___container___ranker--card__stage">
              <div className="top"></div>
              <div className="front front4"></div>
            </div>
          </div>
          <div
            className="contributor___container___ranker--card card_line2"
            style={{ alignItems: "flex-start", marginLeft: "-3.5em" }}
          >
            <div
              className="contributor___container___ranker--card__image image_line2"
              style={{ marginLeft: "2em" }}
            >
              <img src={profileImage} alt="profile_image" />
              <span>2</span>
              <h5>Sahil Hussain</h5>
            </div>
            <div className="contributor___container___ranker--card__stage">
              <div className="top"></div>
              <div className="front front2"></div>
            </div>
          </div>
          <div className="contributor___container___ranker--card card1">
            <div className="contributor___container___ranker--card__image image1">
              <img src={profileImage} alt="profile_image" />
              <span>1</span>
              <h5>Sahil Hussain</h5>
            </div>
            <div className="contributor___container___ranker--card__stage">
              <div className="top"></div>
              <div className="front front1"></div>
            </div>
          </div>
          <div
            className="contributor___container___ranker--card card_line2"
            style={{ alignItems: "flex-end", marginRight: "-3.5em" }}
          >
            <div
              className="contributor___container___ranker--card__image image_line2"
              style={{ marginRight: "2em" }}
            >
              <img src={profileImage} alt="profile_image" />
              <span>3</span>
              <h5>Sahil Hussain</h5>
            </div>
            <div className="contributor___container___ranker--card__stage">
              <div className="top"></div>
              <div className="front front3"></div>
            </div>
          </div>
          <div
            className="contributor___container___ranker--card card_line3"
            style={{ alignItems: "flex-end" }}
          >
            <div
              className="contributor___container___ranker--card__image image_line3"
              style={{ marginRight: "2em" }}
            >
              <img src={profileImage} alt="profile_image" />
              <span>5</span>
              <h5>Sahil Hussain</h5>
            </div>
            <div className="contributor___container___ranker--card__stage">
                
              <div className="top"></div>
              <div className="front front5">
                sahil husa
              </div>
            </div>
          </div>
        </div>
        <div >
        <h1>sahil</h1>
      </div>
      </div>
      
    </section>
  );
};

export default TopContributor;
