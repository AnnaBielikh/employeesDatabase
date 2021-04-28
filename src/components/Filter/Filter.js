import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { positionsList } from "../../constants/Labels";

const StyledTitle = styled.div`
  border: ${(props) => props.theme.borderWidth || "1px"} solid
    ${(props) => props.theme.colors.border || "#000000"};
  background-color: ${(props) => props.theme.colors.background};
  height: 26px;
  padding: 2px 6px;
  cursor: pointer;
`;

const StyledListWrapper = styled.div`
  display: none;
  position: absolute;
  z-index: 5;
  width: 100%;
  padding-top: 10px;
`;

const StyledList = styled.div`
  background-color: ${(props) => props.theme.colors.link};
  padding: 15px;
  border-radius: ${(props) => props.theme.borderRadius};
  border: ${(props) => props.theme.borderWidth || "1px"} solid
    ${(props) => props.theme.colors.border || "#000000"};

  &:before {
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    top: 0px;
    left: calc(50% - 5px);
    border-style: solid;
    border-width: 10px 10px 0px 10px;
    border-color: ${(props) => props.theme.colors.border} transparent
      transparent transparent;
  }
`;

const StyledWrapper = styled.div`
  width: 200px;
  position: relative;

  &:hover ${StyledListWrapper} {
    display: block;
  }

  @media ${(props) => props.theme.media.tablet} {
    order: 3;
    width: 100%;
  }
`;

const StyledDiv = styled.div`
  margin-bottom: 5px;
`;

const StyledLabel = styled.label`
  padding-left: 5px;
  cursor: pointer;
  display: inline-block;
`;

function Filter(props) {
  const { filter, changeFilter } = props;

  return (
    <StyledWrapper>
      <StyledTitle>Filter by position</StyledTitle>
      <StyledListWrapper>
        <StyledList>
          {Object.keys(positionsList).map((key, i) => {
            return (
              <StyledDiv key={i}>
                <input
                  type="checkbox"
                  id={`position${key}`}
                  name={key}
                  onClick={() => changeFilter(key)}
                  defaultChecked={filter.includes(key)}
                ></input>
                <StyledLabel htmlFor={`position${key}`}>
                  {positionsList[key]}
                </StyledLabel>
              </StyledDiv>
            );
          })}
        </StyledList>
      </StyledListWrapper>
    </StyledWrapper>
  );
}

Filter.propTypes = {
  filter: PropTypes.array,
  changeFilter: PropTypes.func,
};

export default Filter;
