import React from "react";
import PropTypes from "prop-types";

import { StyledCheckboxWrapper, StyledCheckboxLabel } from "./index.style";

const Checkbox = (props) => {
  const { id, name, defaultChecked, label, onClick } = props;

  return (
    <StyledCheckboxWrapper>
      <input
        type="checkbox"
        id={id && id}
        name={name && name}
        onClick={() => onClick(name)}
        defaultChecked={defaultChecked && defaultChecked}
      ></input>
      <StyledCheckboxLabel htmlFor={id && id}>
        {label && label}
      </StyledCheckboxLabel>
    </StyledCheckboxWrapper>
  );
};

Checkbox.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  defaultChecked: PropTypes.bool,
  label: PropTypes.string,
  onClick: PropTypes.func,
};

export { Checkbox };
