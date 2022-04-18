import styled from "styled-components";
import { useCurrentUserContext } from "../CurrentUserContext";
import Auth from "./Auth";



const SignIn = () =>{
const { error } = useCurrentUserContext()
    return(<>
    <Page>
      <div>
      <h3>Match yourself with people who like the same music as you.</h3>
      </div>
      {error && <Error>{error}</Error>}
    <Auth/>
    </Page>
    </>)


}

const Page = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  flex-direction: column;
  div{
    margin: 25px;
  }
`

const Error = styled.p`
  background-color: tomato;
  color: white;
  border-radius: 6px;
  padding: 6px 12px;
  font-weight: bold;
  max-width: 400px;
  margin-bottom: 18px;
`;


export default SignIn;