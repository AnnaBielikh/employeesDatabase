import React from "react";

import { StyledFiltersBlock } from "./index.style";

import { Filter } from "./Filter";
import { Search } from "./Search";
import { Sort } from "./Sort";

const FiltersBlock = (props) => (
  <StyledFiltersBlock>
    <Filter {...props}></Filter>
    <Sort {...props}></Sort>
    <Search {...props}></Search>
  </StyledFiltersBlock>
);

export default FiltersBlock;
