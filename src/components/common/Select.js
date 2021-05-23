import React from "react";
import PropTypes from "prop-types";

import { positionsList } from "../../constants/Labels";
import { StyledSelect } from "./index.style";

const Select = (props) => {
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
};

Select.propTypes = {
  register: PropTypes.func,
  activeEmployee: PropTypes.object,
  property: PropTypes.string,
};

export { Select };
