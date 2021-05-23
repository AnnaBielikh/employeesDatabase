import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledInput = styled.input`
  width: 200px;
  padding: 2px 6px;
  outline: none;
  border: ${(props) => props.theme.borderWidth || "1px"} solid
    ${(props) => props.theme.colors.border || "#000000"};

  @media ${(props) => props.theme.media.tablet} {
    order: 1;
    width: 100%;
    margin-bottom: 20px;
  }
`;

const Search = (props) => {
  const { changeSearch, search } = props;
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
    <StyledInput
      defaultValue={search}
      autoComplete="off"
      placeholder="Search..."
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
};

Search.propTypes = {
  search: PropTypes.string,
  changeSearch: PropTypes.func,
};

export { Search };
