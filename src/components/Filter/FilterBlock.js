import React from "react";
import styled from "styled-components";

import Filter from "./Filter";
import Search from "./Search";
import Sotr from "./Sotr";

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

const FilterBlock = (props) => (
  <StyledDiv>
    <Filter {...props}></Filter>
    <Sotr {...props}></Sotr>
    <Search {...props}></Search>
  </StyledDiv>
);

export default FilterBlock;
