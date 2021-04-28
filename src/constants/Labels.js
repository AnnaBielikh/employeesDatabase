export const positionsList = {
  1: "Java developer",
  2: "PHP developer",
  3: "HR",
  4: "Front-end Developer",
  5: "Project Manager",
  6: "UI/UX Designer",
  7: "DevOps",
};

export const sortList = {
  relevance: "Relevance",
  nameAsc: "Name (ascending)",
  nameDesc: "Name (descending)",
};
export const initSortValue = "relevance";

export const fieldsLabels = {
  name: {
    label: "Name: ",
    required: true,
    errorMessage:
      "Name is required. The minimum length is 3 characters. The maximum length is 20 characters",
    placeholder: "John",
    type: "text",
    minLengthValue: 3,
    maxLengthValue: 20,
  },
  surname: {
    label: "Surname: ",
    required: false,
    errorMessage: "The maximum length is 20 characters",
    maxLengthValue: 20,
    placeholder: "Smith",
    type: "text",
  },
  phone: {
    label: "Phone number: ",
    required: true,
    errorMessage:
      "Phone number is required. The minimum length is 5 characters. The maximum length is 20 characters",
    pattern: /^[0-9]{5,20}$/i,
    minLengthValue: 5,
    maxLengthValue: 20,
    placeholder: "123456789",
    type: "tel",
  },
  email: {
    label: "Email address: ",
    required: true,
    errorMessage:
      "Email address number is required. Please, input correct Email address",
    pattern: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
    placeholder: "john@example.com",
    type: "email",
  },
  position: { label: "Position: " },
  photo: { label: "Photo: " },
};
