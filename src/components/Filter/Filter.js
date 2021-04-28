import React from "react";
import styled from "styled-components";

import { positionsList } from "../../constants/Labels";

const StyledTitle = styled.div`
  color: red;
`;

const StyledList = styled.div`
  display: none;
  position: absolute;
`;

const StyledWrapper = styled.div`
  width: 200px;
  position: relative;
  margin: 0px 20px;

  &:hover ${StyledList} {
    display: block;
  }
`;

function Filter({ filter, changeFilter }) {
  return (
    <StyledWrapper>
      <StyledTitle>Filter by position</StyledTitle>
      <StyledList>
        {Object.keys(positionsList).map((key, i) => {
          return (
            <div key={i}>
              <input
                type="checkbox"
                id={`position${key}`}
                name={key}
                onClick={() => changeFilter(key)}
                defaultChecked={filter.includes(key)}
              ></input>
              <label htmlFor={`position${key}`}>{positionsList[key]}</label>
            </div>
          );
        })}
      </StyledList>
    </StyledWrapper>
  );
}

export default Filter;
