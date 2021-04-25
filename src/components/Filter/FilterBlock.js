import React from "react";
import styled from "styled-components";

import Filter from "./Filter";
import Search from "./Search";
import Sotr from "./Sotr";

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

function FilterBlock(props) {
  return (
    <StyledDiv>
      <Search></Search>
      <Filter {...props}></Filter>
      <Sotr></Sotr>
    </StyledDiv>
  );
}

export default FilterBlock;
