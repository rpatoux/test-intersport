import React from "react";
import rooster from "../../assets/logo-frenchdays-septembre-20_2022-02-01/logo-frenchdays-septembre-20.png";
import { Countdown } from "../Countdown";
import "./index.css";

export default function Header() {
  //Header and parent component of the count, it allows information to be passed to its child component
  return (
    <div className="containerHeader">
      <img src={rooster} className="rooster" alt="rooster logo promo" />
      <span className="dateFrom">JUSQU’AU 28 SEPTEMBRE</span>
      <span className="spanFrom">PLUS QUE</span>
      <div>
        <Countdown subtitle="Semaines" />
        <Countdown subtitle="Jours" />
        <Countdown subtitle="Heures" />
        <Countdown subtitle="Minutes" />
      </div>
    </div>
  );
}
