const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const namePattern = /^[a-z ]+$/i;

const isInputValid = (input, pattern) => {
  return pattern.test(input);
};

const valueWithoutSpaces = (value) => {
  return value.replace(/\s/g, "");
};

export const validate = (values) => {
  const errors = {};

  //Check Name
  if (!valueWithoutSpaces(values.name)) {
    errors.name = "Name is required";
  } else if (valueWithoutSpaces(values.name).length < 2) {
    errors.name = "Name must be at least 2 chars";
  } else if (!isInputValid(values.name, namePattern))
    errors.name = "Invalid name";

  //Check Company name
  if (!valueWithoutSpaces(values.company))
    errors.company = "Company name is required";

  //Check Email
  if (!isInputValid(values.email, emailPattern))
    errors.email = "Email is required, please enter a valid email";

  //Check agree checkbox
  if (!values.accept) {
    errors.accept = "Please accept to subscribe";
  }
  return errors;
};
