import { useRef } from "react";
import styled from "styled-components";
import { useCurrentUserContext } from "../CurrentUserContext";


const SigninForm = () => {
  const emailRef = useRef();
  const psdRef = useRef();
  const { signInUser, forgotPassword, signInWithGoogle } = useCurrentUserContext()

  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = psdRef.current.value;
    if (email && password) signInUser(email, password);
  };

  const forgotPasswordHandler = () => {
    const email = emailRef.current.value;
    if (email)
      forgotPassword(email).then(() => {
        emailRef.current.value = "";
      });
  };

  return (
    <FormContainer className="form">
      <h2> Login </h2>
      <Form onSubmit={onSubmit}>
        <input placeholder="Email" type="email" ref={emailRef} />
        <input placeholder="Password" type="password" ref={psdRef} />
        <SignInBtn type="submit">Sign In</SignInBtn>
        <hr/>
        <GoogleButton onClick={signInWithGoogle}>Sign in with Google</GoogleButton>
        <p onClick={forgotPasswordHandler}>Forgot Password?</p>
      </Form>
    </FormContainer>
  );
};

const FormContainer = styled.div`
width: 100%;
h2{
    text-align: center;
}

`

const Form = styled.form`
display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 45px;
  
  p{
      cursor: pointer;
  }
  input{
    padding: 12px;
  margin: 12px;
  font-size: 14px;
  border: 1px solid #ccc;
  box-shadow: 0 1px 4px #ccc;
  border-radius: 6px;
  font-size: 18px;
  width: 93%;
  }
 
  hr{
    width: 75%;
  }
`
const SignInBtn = styled.button`
 background-color: #02ADEF;
    border: none;
    color: white;
    padding: 12px;
    margin: 12px 0;
    box-shadow: 0 1px 6px #ccc;
    width: 100%;
    border-radius: 6px;
    font-size: 18px;

`

const GoogleButton = styled.button`
    background-color: #2D9E5E;
    border: none;
    color: white;
    padding: 12px;
    margin: 12px 0;
    box-shadow: 0 1px 6px #ccc;
    width: 100%;
    border-radius: 6px;
    font-size: 18px;
`

export default SigninForm;