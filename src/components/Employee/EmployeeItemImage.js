import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import * as Icons from "../../icons";

const StyledDiv = styled.div`
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

function EmployeeItemImage(props) {
  const { item } = props;

  return item.photo ? (
    <StyledDiv>
      <img src={item.photo} alt={item.name} />
    </StyledDiv>
  ) : (
    <StyledDiv>
      <Icons.User color="#999999"></Icons.User>
    </StyledDiv>
  );
}

EmployeeItemImage.propTypes = {
  item: PropTypes.object,
};

export default EmployeeItemImage;
