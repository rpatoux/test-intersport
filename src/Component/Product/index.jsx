import React from "react";
import "./index.css";
import sneakersImage from "../../assets/fake_packshot@x2.png";

export default function Product(props) {
  return (
    <div className="backgroundProduct">
      <div className="groupItemProduct">
        <div className="promoContainerProduct">
          <div className="promoProduct">{props.promoProduct}</div>
          <div className="percentPromoProduct">
            -{props.percentPromoProduct}%
          </div>
        </div>
        <div className="sneakers">
          <img
            src={sneakersImage}
            className="sneakersImage"
            alt="looking a sneakers"
          />
        </div>
        <div>
          <span className="typeOfProduct">
            {props.brand} | {props.kind}
          </span>
        </div>
        <div>
          <span className="nameOfProduct">{props.name} </span>
        </div>
        <div>
          <span className="oldPriceProduct">{props.oldprice}€</span>
          <span className="newPriceProduct">&nbsp;{props.newprice}€ </span>
        </div>
      </div>
    </div>
  );
}
