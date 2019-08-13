import React, { Component } from "react";
import Input from "../Input/Input.jsx";

class Form extends Component {
  constructor() {
    super();

    this.state = {
      my_name: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  render() {
    const { my_name } = this.state;
    return (
      <form>
        <Input
          text="Meu nome"
          label="my_name"
          id="my_name"
          type="text"
          value={my_name}
          handleChange={this.handleChange}
        />
        <label>{my_name}</label>
      </form>
    );
  }
}

export default Form;