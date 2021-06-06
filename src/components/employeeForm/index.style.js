import styled from "styled-components";

export const StyledForm = styled.form`
  background-color: ${(props) => props.theme.colors.background};
  border-radius: ${(props) => props.theme.borderRadius};
  padding: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const StyledFormRow = styled.div`
  width: 48%;
  margin-bottom: 45px;
  position: relative;

  @media ${(props) => props.theme.media.tablet} {
    width: 100%;
  }
`;

export const StyledLabel = styled.label`
  display: block;
  margin-bottom: 5px;
`;

export const StyledError = styled.div`
  font-size: ${(props) => props.theme.fontSize.small.size};
  line-height: ${(props) => props.theme.fontSize.small.lineHeight};
  color: ${(props) => props.theme.colors.danger};
  position: absolute;
  margin-top: 3px;
`;
