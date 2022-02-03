import React from "react";
import "./index.css";

export default function Menu() {
  //Menu component, separate between multiple categories that use the same child component
  return (
    <div className="modifyMenu">
      <div className="menu">
        <Categorie subtitle="Electronique" id="#Electronic" />
        <Categorie subtitle="Homme" id="#Man" />
        <Categorie subtitle="Femme" id="#Woman" />
        <Categorie subtitle="Enfant" id="#Children" />
      </div>
    </div>
  );
}

export const Categorie = ({ subtitle, id }) => {
  return (
    <div className="categorie">
      <a href={id} className="redirection">
        {subtitle}
      </a>
    </div>
  );
};
