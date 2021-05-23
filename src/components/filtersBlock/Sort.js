import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { sortList } from "../../constants/Labels";

const StyledSelect = styled.select`
  margin: 0px 20px 0px auto;
  width: 200px;
  height: 26px;
  outline: none;
  border: ${(props) => props.theme.borderWidth || "1px"} solid
    ${(props) => props.theme.colors.border || "#000000"};

  @media ${(props) => props.theme.media.tablet} {
    order: 2;
    width: 100%;
    margin: 0px 0px 20px;
  }
`;

const Sort = (props) => {
  const { sorting, changeSorting } = props;
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
};

Sort.propTypes = {
  sorting: PropTypes.string,
  changeSorting: PropTypes.func,
};

export { Sort };
