import React, { Component, useState } from "react";
import "../styles/App.css";

const App = () => {
  return (
    <div id="main">
      <h1>hello</h1>
      <form>
        <input data-testid="name">Name</input>
        <input data-testid = 'email'> Email address</input>
        <input data-testid = 'gender'>Gender</input>
        <input data-testid = 'phoneNumber'>Phone Number</input>
        <input data-testid = 'password' type="password">password</input>
        <button data-testid = 'submit'>submit</button>
      </form>
    </div>
  );
};

export default App;
