import React, { Component } from "react";
import { CardNota } from "./CardNota";

export class ListaDeNotas extends Component{
  render() {
    return (
      <ul>
        {Array.of("work", "work", "studies").map(categories =>{
          return(
            <li>
              <div>{categories}</div>
              <CardNota/>     
            </li>
          )
        })}
      </ul>
    );
  }
}