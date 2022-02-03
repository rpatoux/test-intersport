import React from "react";
import "./index.css";
import roosterLogo from "../../assets/coq_2022-02-02/coq.png";
import Products from "../Products";

export default function Banner(props) {
  //Child component, here the banner is defined with the props we pass to it
  return (
    <>
      <div className="background">
        <div id={props.id} className="groupItems">
          <title className="titleSelection">{props.titleSelection}</title>
          <div id="exclusivity">{props.exclusivity}</div>
          <div className="buttonBanner">{props.buttonBanner}</div>
        </div>
        <img
          src={roosterLogo}
          className={props.roosterDirection}
          alt="rooster logo for intersport"
        />
      </div>
      <Products products={props.products} />
    </>
  );
}
