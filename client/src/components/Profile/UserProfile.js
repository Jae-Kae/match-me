import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { AppContext } from "../AppContext";


const UserProfile = () => {
  const { id } = useParams();
  const [user, setUser] = useState();
  const { allUsers } = useContext(AppContext);


     useEffect(()=>{
  if (allUsers.length > 0) {
      const userArray = allUsers.filter((user) => {
        return user.id === id;
      })
    setUser(userArray[0]);
  }
     },[allUsers])

console.log("username", user?.displayName)
  return (
    <>
      <Container>
        <PersonInfo>
            <PersonImage src={user?.photoURL}/>
            <h2>{user?.displayName}</h2>
          <Divider />
          <br/>
            <h3>Bio</h3>
            <p>{user?.bio ?? `${user?.displayName} hasn't told us about themselves yet` }</p>
            <br/>
            <br/>
            <Divider />
        </PersonInfo>
      </Container>
    </>
  );
};

const Container = styled.div`
  height: 100%;
`;
const PersonInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70vw;
  text-align: center;

  button {
    background-color: #02adef;
    border: none;
    color: white;
    padding: 12px;
    margin: 12px 0;
    box-shadow: 0 1px 6px #ccc;
    width: 20%;
    border-radius: 6px;
    font-size: 18px;
  }
  input {
    margin: 20px;
  }
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }
  h2 {
    margin-top: 25px;
    margin-bottom: 15px;
  }
  h3{
    font-weight: bolder;
    color: #02adef;
  }
  p{
    margin-top: 15px;
    width: 50%;
    font-weight: bold;
    letter-spacing: 1px;
    line-height: 20px;
  }
  h4{
    margin: 15px;
  }
`;

const PersonImage = styled.img`
  height: 250px;
  border-radius: 20px;
  box-shadow: 0px 18px 53px 0px rgba(0, 0, 0, 0.3);
  margin: 25px 0px;
`;

const Divider = styled.hr`
  width: 45%;
`;

export default UserProfile;
