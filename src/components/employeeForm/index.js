import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";

import { fieldsLabels, positionsList } from "../../constants/Labels";
import {
  StyledForm,
  StyledFormRow,
  StyledLabel,
  StyledError,
} from "./index.style";

import { Input } from "../common/Input";
import { Button } from "../common/Button";
import { Select } from "../common/Select";

const EmployeeForm = (props) => {
  const { activeEmployee, saveEmployee } = props;
  const history = useHistory();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    let formData = { ...data };

    if (data.customPhoto.length) {
      formData.photo = `/images/${data.customPhoto[0].name}`;
    }
    saveEmployee(formData);
    history.push("/");
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <StyledFormRow>
        <StyledLabel>{fieldsLabels.name.label}</StyledLabel>
        <Input
          type={fieldsLabels.name.type}
          placeholder={fieldsLabels.name.placeholder}
          defaultValue={
            activeEmployee && activeEmployee.name ? activeEmployee.name : ""
          }
          isError={errors.name}
          register={register("name", {
            required: fieldsLabels.name.required,
            minLength: fieldsLabels.name.minLengthValue,
            maxLength: fieldsLabels.name.maxLengthValue,
            pattern: fieldsLabels.name.pattern,
          })}
        ></Input>
        {errors.name && fieldsLabels.name.errorMessage && (
          <StyledError>{fieldsLabels.name.errorMessage}</StyledError>
        )}
      </StyledFormRow>

      <StyledFormRow>
        <StyledLabel>{fieldsLabels.surname.label}</StyledLabel>
        <Input
          type={fieldsLabels.surname.type}
          placeholder={fieldsLabels.surname.placeholder}
          defaultValue={
            activeEmployee && activeEmployee.surname
              ? activeEmployee.surname
              : ""
          }
          isError={errors.surname}
          register={register("surname", {
            required: fieldsLabels.surname.required,
            minLength: fieldsLabels.surname.minLengthValue,
            maxLength: fieldsLabels.surname.maxLengthValue,
            pattern: fieldsLabels.surname.pattern,
          })}
        ></Input>
        {errors.surname && fieldsLabels.surname.errorMessage && (
          <StyledError>{fieldsLabels.surname.errorMessage}</StyledError>
        )}
      </StyledFormRow>

      <StyledFormRow>
        <StyledLabel>{fieldsLabels.phone.label}</StyledLabel>
        <Input
          type={fieldsLabels.phone.type}
          placeholder={fieldsLabels.phone.placeholder}
          defaultValue={
            activeEmployee && activeEmployee.phone ? activeEmployee.phone : ""
          }
          isError={errors.phone}
          register={register("phone", {
            required: fieldsLabels.phone.required,
            minLength: fieldsLabels.phone.minLengthValue,
            maxLength: fieldsLabels.phone.maxLengthValue,
            pattern: fieldsLabels.phone.pattern,
          })}
        ></Input>
        {errors.phone && fieldsLabels.phone.errorMessage && (
          <StyledError>{fieldsLabels.phone.errorMessage}</StyledError>
        )}
      </StyledFormRow>

      <StyledFormRow>
        <StyledLabel>{fieldsLabels.email.label}</StyledLabel>
        <Input
          type={fieldsLabels.email.type}
          placeholder={fieldsLabels.email.placeholder}
          defaultValue={
            activeEmployee && activeEmployee.email ? activeEmployee.email : ""
          }
          isError={errors.email}
          register={register("email", {
            required: fieldsLabels.email.required,
            minLength: fieldsLabels.email.minLengthValue,
            maxLength: fieldsLabels.email.maxLengthValue,
            pattern: fieldsLabels.email.pattern,
          })}
        ></Input>
        {errors.email && fieldsLabels.email.errorMessage && (
          <StyledError>{fieldsLabels.email.errorMessage}</StyledError>
        )}
      </StyledFormRow>

      <StyledFormRow>
        <StyledLabel>{fieldsLabels.position.label}</StyledLabel>
        <Select
          defaultValue={
            activeEmployee && activeEmployee.position
              ? activeEmployee.position
              : ""
          }
          register={register("position")}
          optionsList={positionsList}
        ></Select>
      </StyledFormRow>

      <StyledFormRow>
        <StyledLabel>{fieldsLabels.photo.label}</StyledLabel>
        <input
          id="photo"
          type="file"
          accept="image/*"
          {...register("customPhoto")}
        ></input>
      </StyledFormRow>

      <Button
        type="submit"
        text={activeEmployee ? "Save employee" : "Create employee"}
        style={activeEmployee ? "primary" : "success"}
      ></Button>
    </StyledForm>
  );
};

EmployeeForm.propTypes = {
  activeEmployee: PropTypes.object,
  addEmployee: PropTypes.func,
  editEmployee: PropTypes.func,
};

export { EmployeeForm };
