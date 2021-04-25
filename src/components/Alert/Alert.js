import React from "react";
import styled, { css } from "styled-components";

const StyledDiv = styled.div`
  padding: 20px 30px;
  border-radius: 4px;
  font-size: 18px;
  margin: 20px 0px;
  color: #155724;
  background-color: #d4edda;
  border-color: #c3e6cb;
  a {
    color: #155724;
  }

  ${(props) =>
    props.danger &&
    css`
      color: #721c24;
      background-color: #f8d7da;
      border-color: #f5c6cb;
      a {
        color: #721c24;
      }
    `}
`;

function Alert({ children, ...props }) {
  return <StyledDiv {...props}>{children}</StyledDiv>;
}

export default Alert;
