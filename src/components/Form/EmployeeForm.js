import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";

import { fieldsLabels } from "../../constants/Labels";

import Input from "./Input";
import Label from "./Label";
import FormItem from "./FormItem";
import Button from "./Button";
import Select from "./Select";

const StyledForm = styled.form`
  background-color: ${(props) => props.theme.colors.background};
  border-radius: ${(props) => props.theme.borderRadius};
  padding: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

function Employee(props) {
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
      <Input
        activeEmployee={activeEmployee}
        errors={errors}
        register={register}
        property="name"
      ></Input>
      <Input
        activeEmployee={activeEmployee}
        errors={errors}
        register={register}
        property="surname"
      ></Input>
      <Input
        activeEmployee={activeEmployee}
        errors={errors}
        register={register}
        property="phone"
      ></Input>
      <Input
        activeEmployee={activeEmployee}
        errors={errors}
        register={register}
        property="email"
      ></Input>

      <FormItem>
        <Label>{fieldsLabels.position.label}</Label>
        <Select
          activeEmployee={activeEmployee}
          errors={errors}
          register={register}
          property="position"
        ></Select>
      </FormItem>

      <FormItem>
        <Label>{fieldsLabels.photo.label}</Label>
        <input
          id="photo"
          type="file"
          accept="image/*"
          {...register("customPhoto")}
        ></input>
      </FormItem>

      <Button
        type="submit"
        text={activeEmployee ? "Save employee" : "Create employee"}
        btnStyle
        primary={activeEmployee && true}
        success={!activeEmployee && true}
      ></Button>
    </StyledForm>
  );
}

Employee.propTypes = {
  activeEmployee: PropTypes.object,
  addEmployee: PropTypes.func,
  editEmployee: PropTypes.func,
};

export default Employee;
