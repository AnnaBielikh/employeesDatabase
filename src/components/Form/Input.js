import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

import { fieldsLabels } from "../../constants/Labels";

import Label from "./Label";
import FormItem from "./FormItem";
import Error from "./Error";

const StyledInput = styled.input`
  width: 100%;
  padding: 2px 6px;
  outline: none;
  border: ${(props) => props.theme.borderWidth || "1px"} solid
    ${(props) => props.theme.colors.border || "#000000"};

  ${(props) =>
    props.errorStyle &&
    css`
      border: ${(props) => props.theme.borderWidth} solid
        ${(props) => props.theme.colors.danger};
    `};
`;

function Input(props) {
  const { errors, activeEmployee, register, property } = props;
  const propertyLabel = fieldsLabels[property];

  return (
    <FormItem>
      <Label>{propertyLabel.label}</Label>
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
        <Error>{propertyLabel.errorMessage}</Error>
      )}
    </FormItem>
  );
}

Input.propTypes = {
  errors: PropTypes.object,
  register: PropTypes.func,
  activeEmployee: PropTypes.object,
  property: PropTypes.string,
};

export default Input;
