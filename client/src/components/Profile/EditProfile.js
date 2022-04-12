// import { useParams } from "react-router-dom";
import styled from "styled-components";
import { upload } from "../storage";
import { useCurrentUserContext } from "../CurrentUserContext";
import { useState } from "react";

const EditProfile = () => {
  //   const { profileId } = useParams();
  const { currentUser, logoutUser, setLoading, loading } =
    useCurrentUserContext();
  const [photo, setPhoto] = useState(null);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setPhoto(e.target.files[0]);
    }
  };

  const handleClick = () => {
    upload(photo, currentUser, setLoading).then(() => {
      window.location.reload(false);
    });
  };

  return (
    <>
      <Container>
        <PersonInfo>
          <PersonImage src={currentUser.photoURL} />
          <div>
            <input type="file" onChange={handleChange} />
            <button disabled={loading || !photo} onClick={handleClick}>
              Upload
            </button>
          </div>
          <h2>{currentUser.displayName}</h2>
          <br />
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
    cursor: pointer;
  }
  input {
    margin: 20px;
  }
  div{
    margin: 25px 0px;
  }
`;

const PersonImage = styled.img`
  height: 250px;
  border-radius: 20px;
  box-shadow: 0px 18px 53px 0px rgba(0, 0, 0, 0.3);
  margin-top: 120px;
`;

const Divider = styled.hr`
  width: 45%;
`;

export default EditProfile;
