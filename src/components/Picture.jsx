import React from "react";
import data from "../helper/data";

const Picture = ({ item }) => {
  return (
    <div className="picture">
      <div className="imageContainer">
        <img src={item.src.large} alt={`Image by ${item.photographer}`} />
        <div className="info">
          <p style={{ color: "steelblue" }}>{item.photographer}</p>
        </div>
      </div>
    </div>
  );
};
export default Picture;
