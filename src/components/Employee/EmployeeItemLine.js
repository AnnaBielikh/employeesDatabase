import React from "react";
import styled from "styled-components";

import { fieldsLabels, positionsList } from "../../constants/Labels";

const StyledDiv = styled.div`
  margin-bottom: 5px;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  span {
    color: #666666;
    font-size: 14px;
    width: 95px;
    display: inline-block;
  }
`;

function EmployeeItemLine(props) {
  const { item, property } = props;

  return item[property] ? (
    <StyledDiv>
      <span>{fieldsLabels[property].label}</span>
      {property === "position" ? positionsList[item[property]] : item[property]}
    </StyledDiv>
  ) : null;
}

export default EmployeeItemLine;
