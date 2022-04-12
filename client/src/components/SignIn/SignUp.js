import { useRef } from "react";
import styled from "styled-components";
import { useCurrentUserContext } from "../CurrentUserContext";

const SignupForm = () => {
  const emailRef = useRef();
  const nameRef = useRef();
  const psdRef = useRef();
  const { registerUser } = useCurrentUserContext();

  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const name = nameRef.current.value;
    const password = psdRef.current.value;
    if (email && password && name) registerUser(email, name, password);
  };

  return (
    <FormContainer className="form">
      <h2> New User</h2>
      <Form onSubmit={onSubmit}>
        <input placeholder="Email" type="email" ref={emailRef} />
        <input placeholder="Name" type="name" ref={nameRef} />
        <input placeholder="Password" type="password" ref={psdRef} />
        <button type="submit">Register</button>
      </Form>
    </FormContainer>
  );
};

const FormContainer = styled.div`
  width: 100%;
  h2 {
    text-align: center;
  }
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 45px;

  p {
    cursor: pointer;
  }
  input {
    padding: 12px;
    margin: 12px;
    font-size: 14px;
    border: 1px solid #ccc;
    box-shadow: 0 1px 4px #ccc;
    border-radius: 6px;
    font-size: 18px;
    width: 93%;
  }
  button {
    background-color: #02ADEF;
    border: none;
    color: white;
    padding: 12px;
    margin: 12px 0;
    box-shadow: 0 1px 6px #ccc;
    width: 100%;
    border-radius: 6px;
    font-size: 18px;
  }
`;

export default SignupForm;
