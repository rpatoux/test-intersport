import React from "react";
import Product from "../Product";
import "./index.css";

export default function Products(props) {
  //Parent component of the product, with the possibility of passing it the information you want
  function handleClick(e) {
    e.preventDefault();
    console.log("Le lien a été cliqué mais il n'y à pas de direction.");
  }
  return (
    <div className="containerAll">
      <div className="containerProducts">
        {props.products.map((product) => (
          <Product
            key={product.id}
            name={product.name}
            brand={product.brand}
            kind={product.kind}
            oldprice={product.oldprice}
            newprice={product.newprice}
            promoProduct={product.promoProduct}
            percentPromoProduct={product.percentPromoProduct}
          />
        ))}
      </div>
      <div className="moreElements">
        <span className="cross">+</span>
        <span className="moreProducts">Plus de Produits</span>
        <span className="moreProducts">Retrouvez toute la sélection</span>
        <div className="buttonMoreProducts">
          <a href="/#" onClick={handleClick}>
            Voir tout
          </a>
        </div>
      </div>
    </div>
  );
}
