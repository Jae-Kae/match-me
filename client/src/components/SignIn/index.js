import styled from "styled-components";
import { useCurrentUserContext } from "../CurrentUserContext";
import Auth from "./Auth";



const SignIn = () =>{
    const {currentUser} = useCurrentUserContext()

    return(<>
    <Page>
      <div>
      <h3>Match yourself with people who like the same music as you.</h3>
      </div>
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


export default SignIn;