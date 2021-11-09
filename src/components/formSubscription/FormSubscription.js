import React, { useState, useEffect } from "react";
import "./FormSubscription.css";
import FormButton from "../formButton/FormButton";
import FormInput from "../formInput/FormInput";
import logo from "../../images/newsletter-icon.svg";
import { validate } from "../../helpers/dataValidation";
import { checkboxItem, inputsItems } from "../../inputsElements";

function FormSubscription({ setWelcomeModalOpen }) {
  const initValues = { name: "", company: "", email: "", accept: false };
  const [formErrors, setFormErrors] = useState({});
  const [formValues, setFormValues] = useState(initValues);
  const [isChecked, setIsChecked] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [disableButton, setDisableButton] = useState(false);

  useEffect(() => {
    //Check if the form is valid
    if (isFormValid()) {
      //disable button click when requesting to the server to prevent user from clicking many times
      setDisableButton(true);
      //take 0.8 sec, like a request to the server
      setTimeout(() => {
        setWelcomeModalOpen(true);
      }, 800);
      return () => {
        handleReset();
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formErrors]);

  const isFormValid = () => {
    return Object.keys(formErrors).length === 0 && isSubmit && isChecked;
  };

  //update form values
  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  // check and submit the form
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  //Reseting input values and errors messages
  const handleReset = (e) => {
    e?.preventDefault();
    setFormErrors({});
    setFormValues(initValues);
    setIsChecked(false);
  };

  return (
    <form>
      <div className="header-form">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div>
          <h1 className="title">Subscribe</h1>
          <p className="subtitle form-text">
            Keep you updated to our <span>Newsletter</span>
          </p>
        </div>
      </div>
      <div className="inputsSection">
        {inputsItems(formValues, formErrors, handleChange).map((input) => (
          <FormInput {...input} key={input.id} />
        ))}
        {checkboxItem(
          isChecked,
          setIsChecked,
          setFormValues,
          formValues,
          formErrors
        )}
      </div>
      <div className="form-buttons">
        <FormButton
          action={handleSubmit}
          title="Submit"
          type="submit"
          disableButton={disableButton}
        />
        <FormButton
          action={handleReset}
          title="clear"
          type="reset"
          disableButton={false}
        />
      </div>
    </form>
  );
}
export default FormSubscription;
