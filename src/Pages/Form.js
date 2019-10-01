import React, { Component } from "react";

import api from "../services/api";

import "./Form.css";

export default class Form extends Component {
  state = {
    dados: []
  };

  componentDidMount() {
    this.carregaDados();
  }

  carregaDados = () => {
    const cep = document.querySelector(".box-form form .form-element #cep");

    cep.addEventListener("focusout", async () => {
      if (cep.value === "") {
        // alert("Você precisa preencher o Cep");
      } else {
        const response = await api.get(`/${cep.value.replace("-", "")}/json/`);
        this.setState({ dados: response.data });
      }
    });
  };

  render() {
    const cep = this.state.dados;

    return (
      <div className="box-form">
        <form autoComplete="off">
          <div className="form-element">
            <span className="content-label">Cep</span>
            <input type="text" id="cep" required autoFocus />
          </div>
          <div className="form-element">
            <span className="content-label">Logradouro</span>
            <input
              id="logradouro"
              type="text"
              value={cep.logradouro}
              required
            />
          </div>
          <div className="form-element">
            <span className="content-label">Complemento</span>
            <input type="text" value={cep.complemento} required />
          </div>
          <div className="form-element">
            <span className="content-label">Bairro</span>
            <input type="text" value={cep.bairro} required />
          </div>
          <div className="form-element">
            <span className="content-label">Localidae</span>
            <input type="text" value={cep.localidade} required />
          </div>
          <div className="form-element">
            <span className="content-label">Estado</span>
            <input type="text" value={cep.uf} required />
          </div>
        </form>
      </div>
    );
  }
}
