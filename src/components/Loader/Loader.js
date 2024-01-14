import React from "react";
import "./Loader.scss";
import { loader } from "../../utlis/images";
const Loader = () => {
  return (
    <div className="container">
      <div className="loader flex justify-center align-center">
        <img src={loader} alt="imgNotFound" />
      </div>
    </div>
  );
};

export default Loader;
