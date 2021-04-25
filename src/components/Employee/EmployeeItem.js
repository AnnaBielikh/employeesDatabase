import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import { positionsList } from "../../constants/Labels";

const StyledDiv = styled.div`
  padding: 10px 15px;
  width: ${(props) => props.width || "48%"};
  border: ${(props) => props.borderWidth || props.theme.borderWidth}
    ${(props) => props.borderType || "solid"}
    ${(props) => props.borderColor || props.theme.colors.border};
  margin-bottom: 20px;
  border-radius: ${(props) => props.borderRadius || props.theme.borderRadius};
`;

function EmployeeItem({ item, removeEmployee, editEmployeeInit, ...props }) {
  const history = useHistory();

  const handleEditEmployee = (id) => {
    editEmployeeInit(id);
    history.push("/employee");
  };

  return (
    <StyledDiv {...props}>
      {item.name && (
        <div>
          <span>Name: </span>
          {item.name}
        </div>
      )}
      {item.surname && (
        <div>
          <span>Surname: </span>
          {item.surname}
        </div>
      )}
      {item.phone && (
        <div>
          <span>Phone: </span>
          {item.phone}
        </div>
      )}
      {item.email && (
        <div>
          <span>Email: </span>
          {item.email}
        </div>
      )}
      {item.position && positionsList && (
        <div>
          <span>Position: </span>
          {positionsList[item.position]}
        </div>
      )}
      <div>
        <div onClick={() => handleEditEmployee(item.id)}>edit</div>
        <div onClick={() => removeEmployee(item.id)}>remove</div>
      </div>
    </StyledDiv>
  );
}

export default EmployeeItem;
