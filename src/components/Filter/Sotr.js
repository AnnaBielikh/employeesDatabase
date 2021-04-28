import React from "react";
import styled from "styled-components";

import { sortList } from "../../constants/Labels";

const StyledSelect = styled.select`
  width: 200px;
  height: 26px;
  padding: 2px 6px;
  outline: none;
  border: ${(props) => props.theme.borderWidth || "1px"} solid
    ${(props) => props.theme.colors.border || "#000000"};
`;

function Sort({ sorting, changeSorting }) {
  const onChange = (event) => {
    changeSorting(event.target.value);
  };

  return (
    <StyledSelect defaultValue={sorting} onChange={onChange}>
      {Object.keys(sortList).map((key, i) => {
        return (
          <option value={key} key={i}>
            {sortList[key]}
          </option>
        );
      })}
    </StyledSelect>
  );
}

export default Sort;
