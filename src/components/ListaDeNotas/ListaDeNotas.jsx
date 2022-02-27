import React, { Component } from "react";
import  CardNota  from "../CardNota";
import "./estilo.css";

export default class ListaDeNotas extends Component{
  render() {
    return (
      <ul className="lista-notas">
        {Array.of("work", "work", "studies").map((categories, index) =>{
          return(
            <li className="lista-notas_item" key={index}>
              <div>{categories}</div>
              <CardNota/>     
            </li>
          )
        })}
      </ul>
    );
  }
}