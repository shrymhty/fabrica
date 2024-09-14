import { useState} from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../Utilities/Firebase/firebase.utilities";

import FormInput from "../form-input/form-input.component";
import "./sign-up.styles.scss";
import Button  from "../buttons/button.component";
// object for storing all the FormInput element values in the form
const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields); //usestate htmlFor the object fields
  const { displayName, email, password, confirmPassword } = formFields; //destructuring the object fields

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
     
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      } else {
        console.log("user creation encountered an error", error);
      }
    }
  };

  // change handler function for all the inputs
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
      <div className="sign-up-container">
      <h2>Don't have an account?</h2>
          <div
        className="alert text-dark bg-warning bg-opacity-25 alert-outline"
        role="alert"
      >
        <i className="bi bi-exclamation-triangle-fill text-warning"></i>&nbsp;
        Sign up with your email and password
      </div>
      {/* <span className="badge rounded-pill text-bg-success">Sign up with your email and password</span> */}
      <form className="was-validated" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          label="Display Name"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />
        <FormInput
          type="email"
          label="Email Id"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          type="password"
          label="Password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <FormInput
          type="password"
          label="Confirm Password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button type="submit">
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default SignUpForm;
