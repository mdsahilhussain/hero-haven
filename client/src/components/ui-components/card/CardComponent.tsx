import React from "react";
import { BsBookmarkFill, BsBookmark, BsCodeSlash } from "react-icons/bs";
import cardImage from "../../../assets/image_13.jpg";
import "./card.models.css";

const CardComponent = () => {
  return (
    <div className="card">
      <div className="card___img">
        <img src={cardImage} alt="cover_image" />
        <span className="card___getCode--button">
          <BsCodeSlash /> Get Code
        </span>
      </div>
      <div className="card___detail">
        <div className="card___detail--title">
          <h4>Sahil huusain</h4>
          <p>This property was renamed</p>
        </div>
        <div className="card___detail--action">
          <h5>200K view</h5>
          <h5>
            <BsBookmark />
            202
          </h5>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
