import React from "react";
import "./index.css";

export const Countdown = ({ subtitle }) => {
  //Child component of the count, create in css
  return (
    <div className="date">
      <div className="number">
        <div className="horizontal-line" />
        <div className="all-lines">
          <div className="vertical-line" />
          <span>00</span>
          <div className="vertical-line" />
        </div>
        <span className="subtitle">{subtitle}</span>
      </div>
    </div>
  );
};
