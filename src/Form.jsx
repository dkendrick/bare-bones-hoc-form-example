import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ""
    };
  }

  handleSubmit(e) {
    const { formComplete } = this.props;
    const { name } = this.state;

    e.preventDefault();
    formComplete({
      name
    });
  }

  handleNameChange(e) {
    this.setState({
      name: e.target.value
    });
  }

  render() {
    const { name } = this.state;
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={e => this.handleNameChange(e)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Form;
