import React from "react";
import { hot } from "react-hot-loader";
import "./App.scss";

const HelloWorld = () => {
  return (
    <div>
      <h1>Hellow World</h1>
    </div>
  );
};

export default hot(module)(HelloWorld); //untuk mengaktifkan hot-reload
