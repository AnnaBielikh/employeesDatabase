import React from "react";
import PropTypes from "prop-types";

import { StyledButton } from "./index.style";

const Button = (props) => {
  const { text, style, onClick } = props;

  return (
    <StyledButton
      primary={style === "primary" && true}
      success={style === "success" && true}
      onClick={onClick}
    >
      {text ? text : "Save"}
    </StyledButton>
  );
};

Button.propTypes = {
  text: PropTypes.string,
};

export { Button };
