import { useState } from "react";
import { useDispatch } from "react-redux";
import { signUpStart } from "../../store/user/user.action";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import "./sign-up-form.styles.scss";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [errorMessage, setErrorMessage] = useState("");
  const { displayName, email, password, confirmPassword } = formFields;
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }
    try {
      dispatch(signUpStart(email, password, displayName));
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setErrorMessage("Cannot create user email already in use!");
        setTimeout(() => {
          setErrorMessage("");
        }, 3000);
      } else {
        setErrorMessage(
          "User encountered an error ",
          error.code,
          error.message
        );
        setTimeout(() => {
          setErrorMessage("");
        }, 3000);
      }
    }
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign Up with your Email and Password</span>
      <span className={`${errorMessage.length ? "error-message" : ""}`}>
        {errorMessage}
      </span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          name="displayName"
          type="text"
          required
          onChange={handleChange}
          value={displayName}
        />
        <FormInput
          label="Email"
          name="email"
          type="email"
          required
          onChange={handleChange}
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

        <FormInput
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          required
          onChange={handleChange}
          value={confirmPassword}
        />

        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
