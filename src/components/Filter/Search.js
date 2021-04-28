import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  margin-left: auto;
  width: 200px;
  padding: 2px 6px;
  outline: none;
  border: ${(props) => props.theme.borderWidth || "1px"} solid
    ${(props) => props.theme.colors.border || "#000000"};
`;

function Search({ changeSearch, search }) {
  const [searchTerm, setSearchTerm] = useState("");
  const searchTermRef = useRef("");

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
}

export default Search;
