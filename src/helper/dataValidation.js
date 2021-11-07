export const validate = (values) => {
  const errors = {};
  //Remove spaces: maybe the user enter only spaces..
  const nameWithoutSpace = values.name?.replace(/\s/g, "");
  const companyWithoutSpace = values.company?.replace(/\s/g, "");

  if (!nameWithoutSpace) {
    errors.name = "Name is required";
  } else if (nameWithoutSpace.length < 2) {
    errors.name = "Name must be more then 2 chars";
  } else if (!/^[a-z ]+$/i.test(nameWithoutSpace)) errors.name = "Invalid name";

  if (!companyWithoutSpace) errors.company = "Company name is required";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
    errors.email = "Email is required, please enter a valid email";

  if (!values.accept) {
    errors.accept = "Please accept to subscribe";
  }
  return errors;
};
