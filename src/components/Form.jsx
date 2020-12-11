import React, { Component, useState } from "react";

import "../styles/App.css";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      gender: "male",
      number: "",
      password: "",
      errorsMessage: "",
      userName: ""
    };
  }

  handleChange = (event) => {
    if (event.target.name === "gender") {
      this.setState({ [event.target.name]: event.target.value.toLowerCase() });
      return;
    } else {
      this.setState({ [event.target.name]: event.target.value });
      return;
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const myRegEx = /^([a-zA-Z0-9 _-]+)$/;
    const myRegExPh = /^\d+$/;

    if (
      this.state.name === "" ||
      this.state.email === "" ||
      this.state.gender === "" ||
      this.state.number === "" ||
      this.state.password === ""
    ) {
      this.setState({ errorMessage: "All fields are mandatory", userName: "" });
      return;
    }
    if (!myRegEx.test(this.state.name)) {
      this.setState({ errorMessage: "Name is not alphanumeric", userName: "" });
      return;
    }
    if (this.state.email.indexOf("@") < 1) {
      this.setState({ errorMessage: "Email must contain @", userName: "" });
      return;
    }
    if (
      !(
        this.state.gender === "male" ||
        this.state.gender === "female" ||
        this.state.gender === "others"
      )
    ) {
      this.setState({
        errorMessage: "Please identify as male, female or others",
        userName: ""
      });
      return;
    }

    if (!myRegExPh.test(this.state.number)) {
      this.setState({
        errorMessage: "Phone Number must contain only numbers",
        userName: ""
      });
      return;
    }
    if (this.state.password.length < 6) {
      this.setState({
        errorMessage: "Password must contain atleast 6 letters",
        userName: ""
      });
      return;
    }

    const user = this.state.email.substring(0, this.state.email.indexOf("@"));
    this.setState({
      userName: user,
      errorMessage: "",
      name: "",
      email: "",
      gender: "male",
      number: "",
      password: ""
    });
  };

  render() {
    return (
      <>
        <h1>Fill the Form</h1>
        {this.state.errorMessage && <div>{this.state.errorMessage}</div>}
        {this.state.userName && <div>Hello {this.state.userName}</div>}
        <div>
          <input
            type="text"
            data-testid="name"
            name="name"
            placeholder="name"
            value={this.state.name}
            onChange={this.handleChange}
          />

          <input
            type="text"
            data-testid="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
          />

          <input
            data-testid="gender"
            type="text"
            name="gender"
            placeholder="genger"
            value={this.state.gender}
            onChange={this.handleChange}
          />

          <input
            type="text"
            data-testid="phoneNumber"
            name="number"
            placeholder="PhoneNumber"
            value={this.state.number}
            onChange={this.handleChange}
          />

          <input
            data-testid="password"
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <button data-testid="submit" onClick={this.handleSubmit}>
            Submit
          </button>
        </div>
      </>
    );
  }
}
