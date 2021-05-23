import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";

import { fieldsLabels } from "../../../constants/Labels";
import { StyledForm, StyledFormRow, StyledLabel } from "./index.style";

import { Input } from "../../common/Input";
import { Button } from "../../common/Button";
import { Select } from "../../common/Select";

const EmployeeForm = (props) => {
  const { activeEmployee, addEmployee, editEmployee } = props;
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
    if (activeEmployee) {
      editEmployee({ id: activeEmployee.id, ...formData });
    } else addEmployee(formData);
    history.push("/");
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <StyledFormRow>
        <StyledLabel>{fieldsLabels.name.label}</StyledLabel>
        <Input
          activeEmployee={activeEmployee}
          errors={errors}
          register={register}
          property="name"
        ></Input>
      </StyledFormRow>

      <StyledFormRow>
        <StyledLabel>{fieldsLabels.surname.label}</StyledLabel>
        <Input
          activeEmployee={activeEmployee}
          errors={errors}
          register={register}
          property="surname"
        ></Input>
      </StyledFormRow>

      <StyledFormRow>
        <StyledLabel>{fieldsLabels.phone.label}</StyledLabel>
        <Input
          activeEmployee={activeEmployee}
          errors={errors}
          register={register}
          property="phone"
        ></Input>
      </StyledFormRow>

      <StyledFormRow>
        <StyledLabel>{fieldsLabels.email.label}</StyledLabel>
        <Input
          activeEmployee={activeEmployee}
          errors={errors}
          register={register}
          property="email"
        ></Input>
      </StyledFormRow>

      <StyledFormRow>
        <StyledLabel>{fieldsLabels.position.label}</StyledLabel>
        <Select
          activeEmployee={activeEmployee}
          errors={errors}
          register={register}
          property="position"
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
        btnStyle
        primary={activeEmployee && true}
        success={!activeEmployee && true}
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
