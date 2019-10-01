import React, { Component } from "react";

import "./Main.css";
import Form from "./Form";

export default class Main extends Component {
  render() {
    return (
      <div className="main-form">
        <h1>Qual é o teu 'CEP'?</h1>
        <Form />
      </div>
    );
  }
}
