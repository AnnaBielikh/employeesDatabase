import React from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";

import { fieldsLabels, positionsList } from "../../constants/Labels";
import {
  StyledEmployeeCard,
  StyledEmployeeCardLine,
  StyledEmployeeCardImage,
  StyledEditRemoveBtn,
} from "./index.style";

import { User, Edit, Remove } from "../../icons";

const EmployeeCard = (props) => {
  const { item, removeEmployee, setActiveEmployee } = props;
  const history = useHistory();

  const handleEditEmployee = (item) => {
    setActiveEmployee(item);
    history.push("/employee");
  };

  return (
    <StyledEmployeeCard>
      {item.photo ? (
        <StyledEmployeeCardImage>
          <img src={item.photo} alt={item.name} />
        </StyledEmployeeCardImage>
      ) : (
        <StyledEmployeeCardImage>
          <User color="#999999"></User>
        </StyledEmployeeCardImage>
      )}

      {item.name && (
        <StyledEmployeeCardLine>
          <span>{fieldsLabels.name.label}</span>
          {item.name}
        </StyledEmployeeCardLine>
      )}

      {item.surname && (
        <StyledEmployeeCardLine>
          <span>{fieldsLabels.surname.label}</span>
          {item.surname}
        </StyledEmployeeCardLine>
      )}

      {item.phone && (
        <StyledEmployeeCardLine>
          <span>{fieldsLabels.phone.label}</span>
          {item.phone}
        </StyledEmployeeCardLine>
      )}

      {item.email && (
        <StyledEmployeeCardLine>
          <span>{fieldsLabels.email.label}</span>
          {item.email}
        </StyledEmployeeCardLine>
      )}

      {item.position && (
        <StyledEmployeeCardLine>
          <span>{fieldsLabels.position.label}</span>
          {positionsList[item.position]}
        </StyledEmployeeCardLine>
      )}

      <StyledEditRemoveBtn>
        <span onClick={() => handleEditEmployee(item)}>
          <Edit color="#026670"></Edit>
        </span>
        <span onClick={() => removeEmployee(item.id)}>
          <Remove color="#dc3545"></Remove>
        </span>
      </StyledEditRemoveBtn>
    </StyledEmployeeCard>
  );
};

EmployeeCard.propTypes = {
  item: PropTypes.object,
};

export { EmployeeCard };
