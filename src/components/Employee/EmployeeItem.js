import React from "react";
import styled from "styled-components";

import { positionsList } from "../../constants/Labels";

import EmployeeItemImage from "./EmployeeItemImage";
import EmployeeItemControl from "./EmployeeItemControl";
import EmployeeItemLine from "./EmployeeItemLine";

const StyledDiv = styled.div`
  padding: 10px 15px 10px 105px;
  width: 48%;
  min-height: 125px;
  border: ${(props) => props.theme.borderWidth || "1px"} solid
    ${(props) => props.theme.colors.border || "#000000"};
  margin-bottom: 20px;
  border-radius: ${(props) => props.theme.borderRadius};
  position: relative;

  &:hover {
    box-shadow: ${(props) => props.theme.boxShadow};
  }
`;

function EmployeeItem(props) {
  const { item } = props;

  return (
    <StyledDiv>
      <EmployeeItemImage item={item}></EmployeeItemImage>

      <EmployeeItemLine item={item} property="name"></EmployeeItemLine>
      <EmployeeItemLine item={item} property="surname"></EmployeeItemLine>
      <EmployeeItemLine item={item} property="phone"></EmployeeItemLine>
      <EmployeeItemLine item={item} property="email"></EmployeeItemLine>
      <EmployeeItemLine item={item} property="position"></EmployeeItemLine>

      <EmployeeItemControl {...props}></EmployeeItemControl>
    </StyledDiv>
  );
}

export default EmployeeItem;
