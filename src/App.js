import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Form from "./Form.jsx";
import Summary from "./Summary.jsx";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFormComplete: false,
      name: ""
    };
  }

  formComplete(r) {
    const { name } = r;

    this.setState({
      isFormComplete: true,
      name
    });
  }

  renderSection() {
    const { isFormComplete, name } = this.state;

    if (isFormComplete) {
      return <Summary name={name} />;
    }

    return <Form formComplete={r => this.formComplete(r)} />;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Higher or component form example</h1>
        </header>
        <p className="App-intro">{this.renderSection()}</p>
      </div>
    );
  }
}

export default App;
