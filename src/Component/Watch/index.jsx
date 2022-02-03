import React from "react";
import "./index.css";
import watchImage from "../../assets/01930-aku-q-1_2022-02-01/01930-aku-q-1@2x.png";

export const Watch = () => {
  return (
    <div className="container">
      <img src={watchImage} className="watchImage" alt="watch by InterSport" />
      <div className="infosContainer">
        <div className="promoContainer">
          <div id="promo">prix web&nbsp;</div>
          <div id="percent">-25€</div>
        </div>
        <span className="name">garmin</span>
        <span className="description">Montre GPS Forerunner 30</span>
        <div>
          <span className="oldPrice">119,99€</span>
          <span className="newPrice">&nbsp;94,99€</span>
        </div>
        <div className="button">Acheter</div>
      </div>
    </div>
  );
};
