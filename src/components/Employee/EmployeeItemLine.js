import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { fieldsLabels, positionsList } from "../../constants/Labels";

const StyledDiv = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 5px;

  span {
    color: ${(props) => props.theme.colors.border};
    font-size: 14px;
    width: 110px;
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

EmployeeItemLine.propTypes = {
  item: PropTypes.object,
  property: PropTypes.string,
};

export default EmployeeItemLine;
