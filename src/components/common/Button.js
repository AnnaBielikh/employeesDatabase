import React from "react";
import PropTypes from "prop-types";

import { StyledButton } from "./index.style";

const Button = (props) => {
  const { text } = props;

  return <StyledButton {...props}>{text ? text : "Save"}</StyledButton>;
};

Button.propTypes = {
  text: PropTypes.string,
};

export { Button };
