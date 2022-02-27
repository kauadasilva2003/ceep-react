import React, { Component } from "react";
import "./estilo.css";

export default class FormularioCadastro extends Component {
  constructor(){
    super();
    this.titulo = "";
  }
  handleMudancaDeTitulo(evento) {
    this.titulo = evento.target.value
  }
  render() {
    return (
      <form className="form-cadastro">
        <input
          type="text"
          className="form-cadastro_input"
          placeholder="Write the title"
          onChange={this.handleMudancaDeTitulo.bind(this)}
        />
        <textarea
          rows={15}
          className="form_cadastro_input"
          placeholder="Write your note..."
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Create Note
        </button>
      </form>
    );
  }
}
