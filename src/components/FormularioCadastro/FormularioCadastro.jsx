import React, { Component } from "react";
import "./estilo.css"

export default class FormularioCadastro extends Component{
  render(){
    return(
      <form className="form-cadastro">
      <input type="text" className="form-cadastro_input" placeholder="Write the title"/>
      <textarea rows={15} className="form_cadastro_input" placeholder="Write your note..."/>
      <button className="form-cadastro_input form-cadastro_submit">Create Note</button>
    </form>
    );
  }
}