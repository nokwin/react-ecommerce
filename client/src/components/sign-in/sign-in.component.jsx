import React, { useState, useContext } from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer
} from "./sign-in.styles";
import { UserContext } from "../../providers/user/user.provider";

const SignIn = props => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: ""
  });
  const { signInWithGoogle, signInWithCredentials } = useContext(UserContext);

  const handleSubmit = async event => {
    event.preventDefault();

    signInWithCredentials(userCredentials);
  };

  const handleChange = event => {
    const { value, name } = event.target;

    setUserCredentials({
      ...userCredentials,
      [name]: value
    });
  };

  return (
    <SignInContainer>
      <SignInTitle>I already have an account</SignInTitle>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          handleChange={handleChange}
          value={userCredentials.email}
          label="email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={userCredentials.password}
          handleChange={handleChange}
          label="password"
          required
        />
        <ButtonsBarContainer>
          <CustomButton type="submit"> Sign in </CustomButton>
          <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>
            Sign in with Google
          </CustomButton>
        </ButtonsBarContainer>
      </form>
    </SignInContainer>
  );
};

export default SignIn;
