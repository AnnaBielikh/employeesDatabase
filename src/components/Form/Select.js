import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { positionsList } from "../../constants/Labels";

const StyledSelect = styled.select`
  width: 100%;
  height: 26px;
  padding: 2px 6px;
  outline: none;
  border: ${(props) => props.theme.borderWidth || "1px"} solid
    ${(props) => props.theme.colors.border || "#000000"};
`;

function Select(props) {
  const { activeEmployee, property, register } = props;

  return (
    <StyledSelect
      {...register(property)}
      defaultValue={
        activeEmployee && activeEmployee.position ? activeEmployee.position : ""
      }
    >
      {Object.keys(positionsList).map((key, i) => {
        return (
          <option key={i} value={key}>
            {positionsList[key]}
          </option>
        );
      })}
    </StyledSelect>
  );
}

Select.propTypes = {
  register: PropTypes.func,
  activeEmployee: PropTypes.object,
  property: PropTypes.string,
};

export default Select;
