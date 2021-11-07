// Array of our inputs contains all informations for the reusable custom input
export const inputsItems = (formValues, formErrors, handleChange) => [
  {
    id: "name",
    name: "name",
    label: "name",
    type: "text",
    placeholder: "Name",
    value: formValues.name,
    errors: formErrors.name,
    onChange: handleChange
  },
  {
    id: "company",
    name: "company",
    label: "company",
    type: "text",
    placeholder: "Company name",
    value: formValues.company,
    errors: formErrors.company,
    onChange: handleChange
  },
  {
    id: "email",
    name: "email",
    label: "email",
    type: "text",
    placeholder: "Example@email.com",
    value: formValues.email,
    errors: formErrors.email,
    onChange: handleChange
  }
];

//this fucntion return a checkbox element of agree for newsletter
export const checkboxItem = (
  isChecked,
  setIsChecked,
  setFormValues,
  formValues,
  formErrors
) => {
  return (
    <div className="checkbox-container">
      <div>
        <input
          className="chk"
          type="checkbox"
          checked={isChecked}
          name="accept"
          onChange={() => {
            setIsChecked(!isChecked);
            setFormValues({ ...formValues, accept: !isChecked });
          }}
        />

        <div>
          <p>Agree to subscribe to newsletter</p>
        </div>
      </div>
      {formErrors.accept ? <p className="message">{formErrors.accept}</p> : ""}
    </div>
  );
};
