import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  font-size: ${(props) => props.theme.fontSize.small.size};
  line-height: ${(props) => props.theme.fontSize.small.lineHeight};
  color: ${(props) => props.theme.colors.danger};
  position: absolute;
  margin-top: 3px;
`;

function Error({ children }) {
  return <StyledDiv>{children}</StyledDiv>;
}

export default Error;
