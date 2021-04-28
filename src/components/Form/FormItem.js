import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 48%;
  margin-bottom: 45px;
  position: relative;

  @media ${(props) => props.theme.media.tablet} {
    width: 100%;
  }
`;

function FormItem({ children }) {
  return <StyledDiv>{children}</StyledDiv>;
}

export default FormItem;
