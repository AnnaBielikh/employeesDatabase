import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  display: block;
  margin: 0px auto;
  padding: 10px 20px;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.background};
  border: ${(props) => props.theme.borderWidth || "1px"} solid
    ${(props) => props.theme.colors.border || "#000000"};
  border-radius: ${(props) => props.theme.borderRadius};
  outline: none;

  &:hover {
    box-shadow: ${(props) => props.theme.boxShadow};
  }

  ${(props) =>
    props.primary &&
    css`
      color: #ffffff;
      background-color: #007bff;
      border-color: #007bff;
    `};

  ${(props) =>
    props.success &&
    css`
      color: #ffffff;
      background-color: #28a745;
      border-color: #28a745;
    `};
`;

export const StyledSelect = styled.select`
  width: 100%;
  height: 26px;
  padding: 2px 6px;
  outline: none;
  border: ${(props) => props.theme.borderWidth || "1px"} solid
    ${(props) => props.theme.colors.border || "#000000"};
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 2px 6px;
  outline: none;
  border: ${(props) => props.theme.borderWidth || "1px"} solid
    ${(props) => props.theme.colors.border || "#000000"};

  ${(props) =>
    props.errorStyle &&
    css`
      border: ${(props) => props.theme.borderWidth} solid
        ${(props) => props.theme.colors.danger};
    `};
`;

export const StyledPopupTitle = styled.div`
  border: ${(props) => props.theme.borderWidth || "1px"} solid
    ${(props) => props.theme.colors.border || "#000000"};
  background-color: ${(props) => props.theme.colors.background};
  height: 26px;
  padding: 2px 6px;
  cursor: pointer;
`;

export const StyledPopupBody = styled.div`
  display: none;
  position: absolute;
  z-index: 5;
  width: 100%;
  padding-top: 10px;
`;

export const StyledPopupWrapper = styled.div`
  width: 200px;
  position: relative;

  &:hover ${StyledPopupBody} {
    display: block;
  }

  @media ${(props) => props.theme.media.tablet} {
    order: 3;
    width: 100%;
  }
`;

export const StyledCheckboxWrapper = styled.div`
  margin-bottom: 5px;
`;

export const StyledCheckboxLabel = styled.label`
  padding-left: 5px;
  cursor: pointer;
  display: inline-block;
`;
