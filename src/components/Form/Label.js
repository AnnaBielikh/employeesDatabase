import React from "react";
import styled from "styled-components";

const StyledLabel = styled.label`
  display: block;
  margin-bottom: 5px;
`;

function Label({ children }) {
  return <StyledLabel>{children}</StyledLabel>;
}

export default Label;
