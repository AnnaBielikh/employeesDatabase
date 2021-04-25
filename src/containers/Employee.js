import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

import { positionsList } from "../constants/Labels";

function Employee({ activeEmployee, addEmployee, editEmployee, ...props }) {
  const history = useHistory();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    if (activeEmployee) {
      editEmployee({ id: activeEmployee.id, ...data });
    } else addEmployee(data);
    history.push("/");
    console.log("Form data is: ", data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Name</label>
          <input
            defaultValue={
              activeEmployee && activeEmployee.name ? activeEmployee.name : ""
            }
            {...register("name")}
          />
        </div>

        <div>
          <label>Surname</label>
          <input
            defaultValue={
              activeEmployee && activeEmployee.surname
                ? activeEmployee.surname
                : ""
            }
            {...register("surname")}
          />
        </div>

        <div>
          <label>Phone</label>
          <input
            defaultValue={
              activeEmployee && activeEmployee.phone ? activeEmployee.phone : ""
            }
            {...register("phone")}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            defaultValue={
              activeEmployee && activeEmployee.email ? activeEmployee.email : ""
            }
            {...register("email")}
          />
        </div>
        <div>
          <label>Position</label>
          <select
            {...register("position")}
            defaultValue={
              activeEmployee && activeEmployee.position
                ? activeEmployee.position
                : ""
            }
          >
            {Object.keys(positionsList).map((key, i) => {
              return (
                <option key={i} value={key}>
                  {positionsList[key]}
                </option>
              );
            })}
          </select>
        </div>
        <button type="submit">{activeEmployee ? "Edit" : "Add"}</button>
      </form>
    </div>
  );
}

export default Employee;
