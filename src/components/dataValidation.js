export const validate = (values) => {
  const errors = {};
  const nameWithoutSpace = values.name?.replace(/\s/g, "");
  const companyWithoutSpace = values.company?.replace(/\s/g, "");

  if (!nameWithoutSpace) {
    errors.name = "name is required";
  } else if (nameWithoutSpace.length < 2) {
    errors.name = "name must be mor then 2 chars";
  } else if (!/^[a-z ]+$/i.test(nameWithoutSpace)) errors.name = "Invalid name";

  if (!companyWithoutSpace) errors.company = "company name is required";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
    errors.email = "Please enter a valid Email";

  if (!values.accept) {
    errors.accept = "please accept our terms";
  }

  console.log("errors : ", errors);

  return errors;
};
