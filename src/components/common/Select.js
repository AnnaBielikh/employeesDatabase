import React from "react";
import PropTypes from "prop-types";

import { StyledSelect } from "./index.style";

const Select = (props) => {
  const { defaultValue, register, optionsList } = props;

  return (
    <StyledSelect defaultValue={defaultValue} {...register}>
      {Object.keys(optionsList).map((key, i) => {
        return (
          <option key={i} value={key}>
            {optionsList[key]}
          </option>
        );
      })}
    </StyledSelect>
  );
};

Select.propTypes = {
  register: PropTypes.object,
  activeEmployee: PropTypes.object,
  property: PropTypes.string,
};

export { Select };
