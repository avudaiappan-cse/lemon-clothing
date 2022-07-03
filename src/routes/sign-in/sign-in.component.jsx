import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import {
  signInWithGooglePopUp,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopUp();
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log(userDocRef);
  };

  return (
    <div>
      <h1>I'm Sign in!</h1>
      <button onClick={logGoogleUser}>Sign In With Google!</button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
