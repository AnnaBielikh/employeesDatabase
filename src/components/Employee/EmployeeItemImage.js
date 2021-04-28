import React from "react";
import styled from "styled-components";

import * as Icons from "../../icons";

const StyledDiv = styled.div`
  width: 65px;
  height: 65px;
  position: absolute;
  left: 15px;

  img,
  svg {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 50% 50%;
    border-radius: 50%;
    border: 1px solid ${(props) => props.theme.colors.secondary};
  }
`;

function EmployeeItemImage({ item }) {
  return item.photo ? (
    <StyledDiv className="wrht">
      <img src={item.photo} alt={item.name} />
    </StyledDiv>
  ) : (
    <StyledDiv className="wrht">
      <Icons.User color="grey"></Icons.User>
    </StyledDiv>
  );
}

export default EmployeeItemImage;
