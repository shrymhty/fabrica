import { useState } from "react";
import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../Utilities/Firebase/firebase.utilities";
import FormInput from "../form-input/form-input.component";
import "./sign-in.styles.scss";
import Button from "../buttons/button.component";

// object for storing all the FormInput element values in the form
const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  
  const [formFields, setFormFields] = useState(defaultFormFields); //usestate htmlFor the object fields
  const { email, password } = formFields; //destructuring the object fields

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
   await signInWithGooglePopup();
    
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password");
          break;
        case "auth/user-not-found":
          alert("no user associated with this email");
          break;
        default:
          console.log(error);
      }
    }
   
  };
  
  // change handler function for all the inputs
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };


  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <div
        className="alert text-dark bg-info bg-opacity-25 alert-outline"
        role="alert"
      >
        <i className="bi bi-info-circle-fill text-info"></i>&nbsp;
        Sign in with your email and password or use your google account
      </div>
      {/* <h6> Sign in with your email and password or use your google account</h6> */}
      <form onSubmit={handleSubmit}>
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
        <div className="buttons-container">
          <Button type="submit" onClick={handleSubmit}>Sign in</Button>
          <Button buttonType="google" type="submit" onClick={signInWithGoogle}>
            <i className="bi bi-google"></i>&nbsp;Google sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
