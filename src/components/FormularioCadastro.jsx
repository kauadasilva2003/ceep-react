import React, { Component } from "react";

export class FormularioCadastro extends Component{
  render(){
    return(
      <form>
      <input placeholder="Write the title"/>
      <textarea placeholder="Write your note..."/>
      <button>Create Note</button>
    </form>
    );
  }
}