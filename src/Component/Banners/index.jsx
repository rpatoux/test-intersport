import React from "react";
import Banner from "../Banner";
import "./index.css";
import resources from "../../json/resources.json";

export default function Banners(props) {
  //this component is the parent component of Banner, it allows to pass values ​​to its child component
  //we import a json and its possible to change a value, this is to recreate a mini back environment
  return (
    <>
      <Banner
        id="Electronic"
        titleSelection="Sélection Électronique"
        exclusivity="exclusivité web"
        buttonBanner="Voir tout"
        roosterDirection="roosterLeft"
        products={resources.electronics}
      />
      <Banner
        id="Man"
        titleSelection="Sélection Homme"
        exclusivity="exclusivité web"
        buttonBanner="Voir tout"
        roosterDirection="roosterRight"
        products={resources.man}
      />
      <Banner
        id="Woman"
        titleSelection="Sélection Femme"
        exclusivity="exclusivité web"
        buttonBanner="Voir tout"
        roosterDirection="roosterLeft"
        products={resources.woman}
      />
      <Banner
        id="Children"
        titleSelection="Sélection Enfant"
        exclusivity="exclusivité web"
        buttonBanner="Voir tout"
        roosterDirection="roosterRight"
        products={resources.children}
      />
    </>
  );
}
