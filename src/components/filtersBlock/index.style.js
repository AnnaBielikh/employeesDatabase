import styled from "styled-components";

export const StyledFiltersBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

export const StyledSearchForm = styled.form`
  width: 200px;

  @media ${(props) => props.theme.media.tablet} {
    order: 1;
    width: 100%;
    margin-bottom: 20px;
  }
`;

export const StyledSortForm = styled.form`
  margin: 0px 20px 0px auto;
  width: 200px;

  @media ${(props) => props.theme.media.tablet} {
    order: 2;
    width: 100%;
    margin: 0px 0px 20px;
  }
`;

export const StyledFiltersList = styled.div`
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
