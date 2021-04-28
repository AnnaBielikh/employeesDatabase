import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const StyledButton = styled.button`
  display: block;
  margin: 0px auto;
  padding: 10px 20px;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.background};
  border: ${(props) => props.theme.borderWidth || "1px"} solid
    ${(props) => props.theme.colors.border || "#000000"};
  border-radius: ${(props) => props.theme.borderRadius};
  outline: none;

  &:hover {
    box-shadow: ${(props) => props.theme.boxShadow};
  }

  ${(props) =>
    props.primary &&
    css`
      color: #ffffff;
      background-color: #007bff;
      border-color: #007bff;
    `};

  ${(props) =>
    props.success &&
    css`
      color: #ffffff;
      background-color: #28a745;
      border-color: #28a745;
    `};
`;

function Button(props) {
  const { text } = props;

  return <StyledButton {...props}>{text ? text : "Save"}</StyledButton>;
}

Button.propTypes = {
  text: PropTypes.string,
};

export default Button;
