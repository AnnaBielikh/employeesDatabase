import React from "react";
import PropTypes from "prop-types";

import { StyledInput, StyledError } from "./index.style";
import { fieldsLabels } from "../../constants/Labels";

const Input = (props) => {
  const { errors, activeEmployee, register, property } = props;
  const propertyLabel = fieldsLabels[property];

  return (
    <>
      <StyledInput
        type={propertyLabel.type}
        placeholder={propertyLabel.placeholder}
        errorStyle={errors[property] && "true"}
        defaultValue={
          activeEmployee && activeEmployee[property]
            ? activeEmployee[property]
            : ""
        }
        {...register(property, {
          required: propertyLabel.required,
          minLength: propertyLabel.minLengthValue,
          maxLength: propertyLabel.maxLengthValue,
          pattern: propertyLabel.pattern,
        })}
      />
      {errors[property] && propertyLabel.errorMessage && (
        <StyledError>{propertyLabel.errorMessage}</StyledError>
      )}
    </>
  );
};

Input.propTypes = {
  errors: PropTypes.object,
  register: PropTypes.func,
  activeEmployee: PropTypes.object,
  property: PropTypes.string,
};

export { Input };
