import React from "react";
import PropTypes from "prop-types";

import { StyledInput } from "./index.style";

const Input = (props) => {
  const { isError, register, type, placeholder, defaultValue } = props;

  return (
    <StyledInput
      type={type && type}
      placeholder={placeholder && placeholder}
      errorStyle={isError && "true"}
      defaultValue={defaultValue && defaultValue}
      {...register}
    />
  );
};

Input.propTypes = {
  isError: PropTypes.object,
  register: PropTypes.object,
  activeEmployee: PropTypes.object,
  property: PropTypes.string,
  type: PropTypes.string,
};

export { Input };
