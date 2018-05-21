import React, { Component } from "react";

const Result = ({
  thankSelectedOption,
  whatForOption,
  whatForSecondOption,
  fromSelectedRadio,
    otherValue
}) => {
  return (
    <p className="container-title">
      Thank{thankSelectedOption} {whatForOption} {whatForSecondOption}{" "}
      from {fromSelectedRadio !== "Other" ?fromSelectedRadio : otherValue}
    </p>
  );
};

export default Result;
