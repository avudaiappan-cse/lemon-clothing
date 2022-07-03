import { useState } from "react";
import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopUp,
} from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import "./sign-in-form.styles.scss";

const defaultFormFields = {
  email: "",
  password: "",
};
const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [errorMessage, setErrorMessage] = useState("");
  const { email, password } = formFields;

  const signInWithGoogle = async () => {
    await signInWithGooglePopUp();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!email || !password) return;
    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/user-not-found":
          setErrorMessage("No user associated with this email!");
          setTimeout(() => {
            setErrorMessage("");
          }, 3000);
          break;
        case "auth/wrong-password":
          setErrorMessage("Invalid credentials, Please try again!");
          setTimeout(() => {
            setErrorMessage("");
          }, 3000);
          break;
        default:
          setErrorMessage(
            "Problem with authenticate user ",
            error.code,
            error.message
          );
          setTimeout(() => {
            setErrorMessage("");
          }, 3000);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  return (
    <div className="sign-in-container">
      <h2>Already have an account</h2>
      <span>Sign In with your email and password</span>
      <span className={`${errorMessage.length ? "error-message" : ""}`}>
        {errorMessage}
      </span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          name="email"
          type="email"
          onChange={handleChange}
          required
          value={email}
        />
        <FormInput
          label="Password"
          name="password"
          type="password"
          required
          onChange={handleChange}
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" onClick={signInWithGoogle} buttonType="google">
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
