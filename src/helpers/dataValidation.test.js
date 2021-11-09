const { validate } = require("./dataValidation");

const validValues = {
  name: "elon",
  company: "tesla",
  email: "elon@tesla.com",
  accept: true
};

test("Should output Errors for input if it is empty", () => {
  const formErrors = validate({
    name: "",
    company: "",
    email: "",
    accept: false
  });
  expect(formErrors).toEqual({
    name: "Name is required",
    company: "Company name is required",
    email: "Email is required, please enter a valid email",
    accept: "Please accept to subscribe"
  });
});

test("Should output Errors for name if it is less then 2 chars", () => {
  const formErrors = validate({ ...validValues, name: "c" });
  expect(formErrors).toEqual({ name: "Name must be at least 2 chars" });
});

test("Should output Errors for name with non alphabetic chars", () => {
  const formErrors = validate({ ...validValues, name: "csd4" });
  expect(formErrors).toEqual({ name: "Invalid name" });
});

test("Should output Errors for email that is not respecting the email pattern", () => {
  const formErrors = validate({ ...validValues, email: "aissamihigmail.com" });
  expect(formErrors).toEqual({
    email: "Email is required, please enter a valid email"
  });
});

test("Should output Errors for accept checkbox if it is not checked", () => {
  const formErrors = validate({ ...validValues, accept: false });
  expect(formErrors).toEqual({ accept: "Please accept to subscribe" });
});

test("Should output empty errors object if it is all well validated", () => {
  const formErrors = validate({ ...validValues });
  expect(formErrors).toEqual({});
});
