import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

import { sortList, positionsList } from "../../constants/Labels";
import {
  StyledFiltersBlock,
  StyledSortForm,
  StyledSearchForm,
  StyledFiltersList,
} from "./index.style";

import { Popup } from "../common/Popup";
import { Input } from "../common/Input";
import { Select } from "../common/Select";
import { Checkbox } from "../common/Checkbox";

const FiltersBlock = (props) => {
  const {
    changeSearch,
    search,
    changeSorting,
    sorting,
    changeFilters,
    filtersList,
  } = props;
  const [searchTerm, setSearchTerm] = useState(search);
  const searchTermRef = useRef(search);

  useEffect(() => {
    if (searchTerm !== searchTermRef.current) {
      const delayDebounceFn = setTimeout(() => {
        searchTermRef.current = searchTerm;
        changeSearch(searchTerm);
      }, 1000);

      return () => clearTimeout(delayDebounceFn);
    }
  }, [searchTerm, changeSearch]);

  return (
    <StyledFiltersBlock>
      <Popup title="Filter by position">
        <StyledFiltersList>
          {Object.keys(positionsList).map((key, i) => (
            <Checkbox
              key={i}
              name={key}
              id={`position${key}`}
              defaultChecked={filtersList.includes(key)}
              label={positionsList[key]}
              onClick={changeFilters}
            ></Checkbox>
          ))}
        </StyledFiltersList>
      </Popup>

      <StyledSortForm onChange={(e) => changeSorting(e.target.value)}>
        <Select defaultValue={sorting} optionsList={sortList}></Select>
      </StyledSortForm>

      <StyledSearchForm onChange={(e) => setSearchTerm(e.target.value)}>
        <Input
          type="text"
          placeholder="Search..."
          defaultValue={search}
          autoComplete="off"
        />
      </StyledSearchForm>
    </StyledFiltersBlock>
  );
};

FiltersBlock.propTypes = {
  changeSearch: PropTypes.func,
  search: PropTypes.string,
  changeSorting: PropTypes.func,
  sorting: PropTypes.string,
  changeFilters: PropTypes.func,
  filtersList: PropTypes.arrayOf(PropTypes.shape),
};

export { FiltersBlock };
