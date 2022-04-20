import { NavLink } from "react-router-dom";
import styled from "styled-components";
import GenreArea from "../ChooseGenrePage/GenreArea";
import { useCurrentUserContext } from "../CurrentUserContext";
import TicketMaster from "../TicketMaster";

const Profile = () => {
  const { currentUser, logoutUser } = useCurrentUserContext();

  return (
    <>
      <Container>
        <PersonInfo>
          <div>
            <button onClick={logoutUser}>Log Out</button>
            <EditBtn to="/edit">Edit</EditBtn>
          </div>
          <PersonImage
            src={
              currentUser?.photoURL ||
              "https://gravatar.com/avatar/af2c49f3efa689e44adec174490f22c7?s=400&d=robohash&r=x"
            }
          />
          <h2>{currentUser.displayName}</h2>
          <br />
          <Divider />
          <h3>My Top Genre</h3>
          <p>click to find your match</p>
        </PersonInfo>
        <GenreArea />
        <TicketMaster/>
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

  button {
    background-color: #02adef;
    border: none;
    color: white;
    padding: 12px;
    margin: 12px 0;
    box-shadow: 0 1px 6px #ccc;
    width: 15%;
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
    text-align: center;
  }
  h2 {
    margin-top: 25px;
  }
  h3 {
    margin: 25px 0px;
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
  margin: 20px 0px;
`;
const EditBtn = styled(NavLink)`
  background-color: #02adef;
  border: none;
  color: white;
  padding: 12px;
  margin: 12px 0;
  box-shadow: 0 1px 6px #ccc;
  width: 15%;
  border-radius: 6px;
  font-size: 18px;
  text-decoration: none;
`;

export default Profile;
