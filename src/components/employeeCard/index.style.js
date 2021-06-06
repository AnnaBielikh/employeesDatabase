import styled from "styled-components";

export const StyledEmployeeCard = styled.div`
  padding: 10px 15px 10px 105px;
  width: 48%;
  min-height: 125px;
  border: ${(props) => props.theme.borderWidth || "1px"} solid
    ${(props) => props.theme.colors.border || "#000000"};
  margin-bottom: 20px;
  border-radius: ${(props) => props.theme.borderRadius};
  position: relative;
  background-color: ${(props) => props.theme.colors.background};

  &:hover {
    box-shadow: ${(props) => props.theme.boxShadow};
  }

  @media ${(props) => props.theme.media.tablet} {
    width: 100%;
  }
`;

export const StyledEmployeeCardLine = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 5px;

  span {
    color: ${(props) => props.theme.colors.border};
    font-size: 14px;
    width: 110px;
    display: inline-block;
  }
`;

export const StyledEmployeeCardImage = styled.div`
  width: 65px;
  height: 65px;
  position: absolute;
  left: 15px;

  img,
  svg {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 50% 50%;
    border-radius: 50%;
    border: 1px solid ${(props) => props.theme.colors.info};
  }
`;

export const StyledEditRemoveBtn = styled.div`
  display: flex;
  justify-content: space-around;
  width: 65px;
  margin-bottom: 5px;
  position: absolute;
  left: 15px;
  top: 85px;

  svg {
    height: 20px;
    width: 20px;
    cursor: pointer;
  }
`;
