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
        <div className="contributor___container___left"></div>
        <div className="contributor___container___right">
          <div className="contributor___container___right--collage">
            <div className="contributor___container___right--collage__fistLine">
              <div className="collage___3rdPerson_Card">
                <img src={profileImage} alt="profileImage" />
                <h1>
                  <span>3</span>rd rank
                </h1>
              </div>
              <div className="collage__1stPerson_Card">
                <img src={profileImage} alt="profileImage" />
                <h1>
                  <span>1</span>st rank
                </h1>
              </div>
              <div className="collage___2ndPerson_Card">
                <img src={profileImage} alt="profileImage" />
                <h1>
                  <span>2</span>nd rank
                </h1>
              </div>
            </div>
            <div className="contributor___container___right--collage__secondLine">
              <div className="collage___4thPerson_Card">
                <img src={profileImage} alt="profileImage" />
                <h1>
                  <span>4</span>th rank
                </h1>
              </div>
              <div className="collage___5thPerson_Card">
                <img src={profileImage} alt="profileImage" />
                <h1>
                  <span>5</span>th rank
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopContributor;
