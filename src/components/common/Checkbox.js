import React from "react";
import PropTypes from "prop-types";

import { StyledCheckboxWrapper, StyledCheckboxLabel } from "./index.style";

const Checkbox = (props) => {
  const { id, name, label, onChange, checked } = props;

  return (
    <StyledCheckboxWrapper>
      <input
        type="checkbox"
        id={id && id}
        name={name && name}
        onChange={() => onChange(name)}
        checked={checked && checked}
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
  checked: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func,
};

export { Checkbox };
