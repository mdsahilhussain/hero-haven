import React from "react";
import "./topContributor.models.css";
import profileImage from "../../../assets/contributer_profileImage.jpg";
const TopContributor = () => {
  return (
    <section className="contributor">
      <h1>
        <span>Top</span> Contributors
      </h1>
      <div className="contributor___container">
        <div className="contributor___container___left"></div>
        <div className="contributor___container___right">
          <div className="contributor___container___right--collage">
            <div className="contributor___container___right--collage__fistLine">
              <div className="collage___3rdPerson_Card">
                <img src={profileImage} alt="profileImage" />
              </div>
              <div className="collage__1stPerson_Card">
                <img src={profileImage} alt="profileImage" />
              </div>
              <div className="collage___2ndPerson_Card">
                <img src={profileImage} alt="profileImage" />
              </div>
            </div>
            <div className="contributor___container___right--collage__secondLine">
              <div className="collage___4thPerson_Card">
                <img src={profileImage} alt="profileImage" />
              </div>
              <div className="collage___5thPerson_Card">
                <img src={profileImage} alt="profileImage" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopContributor;
