import React, { useState } from "react";
import styled from "styled-components";
import SigninForm from "./SignIn";
import SignupForm from "./SignUp";

const Auth = () => {
  const [state, setState] = useState(false);
  const toggleState = () => {
    setState((prevState) => !prevState);
  };
  return (
    <Container>
      {!state ? <SigninForm /> : <SignupForm />}
      <p onClick={toggleState}>
        {!state ? "New user? Click here " : "Already have an acount?"}
      </p>
    </Container>
  );
};

const Container = styled.div`
  box-shadow: 0 1px 6px #ccc;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 400px;
  padding: 22px;
  p {
    cursor: pointer;
    margin: 12px;
  }
`;

export default Auth;
