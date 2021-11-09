const { validate } = require("./dataValidation");
test("Should output Errors for all inputs if they are empty", () => {
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
  const formErrors = validate({
    name: "c",
    company: "tesla",
    email: "aissamihi@gmail.com",
    accept: true
  });
  expect(formErrors).toEqual({
    name: "Name must be at least 2 chars"
  });
});

test("Should output Errors for name with non alphabetic chars", () => {
  const formErrors = validate({
    name: "csd4",
    company: "tesla",
    email: "aissamihi@gmail.com",
    accept: true
  });
  expect(formErrors).toEqual({
    name: "Invalid name"
  });
});

test("Should output Errors for email that is not respecting the email pattern", () => {
  const formErrors = validate({
    name: "elon",
    company: "tesla",
    email: "aissamihigmail.com",
    accept: true
  });
  expect(formErrors).toEqual({
    email: "Email is required, please enter a valid email"
  });
});

test("Should output Errors for accept checkbox if it is not checked", () => {
  const formErrors = validate({
    name: "elon",
    company: "tesla",
    email: "aissamihi@gmail.com",
    accept: false
  });
  expect(formErrors).toEqual({
    accept: "Please accept to subscribe"
  });
});

test("Should output empty errors object if it is all well validated", () => {
  const formErrors = validate({
    name: "elon",
    company: "tesla",
    email: "aissamihi@gmail.com",
    accept: true
  });
  expect(formErrors).toEqual({});
});
