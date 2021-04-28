import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import * as Icons from "../../icons";

const StyledDiv = styled.div`
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

function EmployeeItemControl(props) {
  const { item, removeEmployee, editEmployeeInit } = props;
  const history = useHistory();

  const handleEditEmployee = (id) => {
    editEmployeeInit(id);
    history.push("/employee");
  };

  return (
    <StyledDiv>
      <span onClick={() => handleEditEmployee(item.id)}>
        <Icons.Edit color="#28a745"></Icons.Edit>
      </span>
      <span onClick={() => removeEmployee(item.id)}>
        <Icons.Remove color="#dc3545"></Icons.Remove>
      </span>
    </StyledDiv>
  );
}

export default EmployeeItemControl;
