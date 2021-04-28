import React from "react";
import styled from "styled-components";

import Filter from "./Filter";
import Search from "./Search";
import Sotr from "./Sotr";

const StyledDiv = styled.div`
  display: ${(props) => props.display || "flex"};
  flex-wrap: ${(props) => props.flexWrap || "wrap"};
  justify-content: ${(props) => props.justifyContent || "space-between"};
  align-items: ${(props) => props.alignItems || "center"};
`;

function FilterBlock(props) {
  return (
    <StyledDiv {...props}>
      <Sotr {...props}></Sotr>
      <Filter {...props}></Filter>
      <Search {...props}></Search>
    </StyledDiv>
  );
}

export default FilterBlock;
