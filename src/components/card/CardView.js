import React from "react";
import { CardList } from "./Card";
import './CardView.css';

export function CardView() {
  return (
    <div id='div1' className="w-full max-w-xs m-auto">
      <div className="container">
        <h2 id="h2"> lista de personas</h2>
        <CardList />
      </div>
    </div>
  );
}
