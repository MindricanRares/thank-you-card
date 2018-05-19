import React, { Component } from "react";

const Result = ({
  thankSelectedOption,
  whatForOption,
  whatForSecondOption,
  fromSelectedRadio,
    otherValue
}) => {
  return (
    <p>
      Thank{thankSelectedOption} {whatForOption} {whatForSecondOption}{" "}
      from {fromSelectedRadio !== "Other" ?fromSelectedRadio : otherValue}
    </p>
  );
};

export default Result;
