import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import CustomButton from "./customButton/CustomButton";
import CustomInput from "./customInput/CustomInput";
import { validate } from "./dataValidation";
import "./FormSubscription.css";
import logo from "../images/newsletter-icon.svg";
import Welcome from "./Welcome";

Modal.setAppElement("#root");
function FormSubscription() {
  const initValues = { name: "", company: "", email: "", accept: false };
  const [formErrors, setFormErrors] = useState({});
  const [formValues, setFormValues] = useState(initValues);
  const [isChecked, setIsChecked] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit && isChecked) {
      console.log("thank you");
      setTimeout(() => {
        setModalIsOpen(true);
        handleReset();
      }, 500);
    }
  }, [formErrors]);

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

  // Array of our inputs contains all informations for the Costum input
  const inputsItems = [
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
      label: "Company",
      type: "text",
      placeholder: "company",
      value: formValues.company,
      errors: formErrors.company,
      onChange: handleChange
    },
    {
      id: "email",
      name: "email",
      label: "Email",
      type: "text",
      placeholder: "email",
      value: formValues.email,
      errors: formErrors.email,
      onChange: handleChange
    }
  ];

  return (
    <>
      {!modalIsOpen ? (
        <form>
          <div className="header-form">
            <div className="logo">
              <img src={logo} alt="" />
            </div>

            <div>
              <h1 className="title">Subscribe</h1>
              <p className="subtitle form-text">
                Keep you updated to our newsletter
              </p>
            </div>
          </div>

          <div className="inputsSection">
            {inputsItems.map((input) => (
              <CustomInput {...input} key={input.id} />
            ))}

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
                <p>Agree to subscribe to newsletter</p>
              </div>
              {formErrors.accept ? (
                <p className="message">{formErrors.accept}</p>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="form-buttons">
            <CustomButton action={handleSubmit} title="Submit" />

            <CustomButton action={handleReset} title="clear" />
          </div>
        </form>
      ) : (
        <Welcome open={modalIsOpen} setOpen={setModalIsOpen} />
      )}
    </>
  );
}

export default FormSubscription;
