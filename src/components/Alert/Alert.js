import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const StyledDiv = styled.div`
  padding: 20px 30px;
  border-radius: 4px;
  font-size: ${(props) => props.theme.fontSize.big.size};
  line-height: ${(props) => props.theme.fontSize.big.lineHeight};
  margin: 30px 0px;
  color: #155724;
  background-color: #d4edda;
  border-color: #c3e6cb;

  ${(props) =>
    props.danger &&
    css`
      color: #721c24;
      background-color: #f8d7da;
      border-color: #f5c6cb;
    `}
`;

function Alert({ children, ...props }) {
  return <StyledDiv {...props}>{children}</StyledDiv>;
}

Alert.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Alert;
