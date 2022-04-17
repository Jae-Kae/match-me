import Profile from "./Profile";
import styled from "styled-components";
import { useCurrentUserContext } from "../CurrentUserContext";


const ProfilePage = () => {
  const { error } = useCurrentUserContext();
  return (
    <>
      <Page>
        {error && <Error>{error}</Error>}
        <Profile />
      </Page>
    </>
  );
};

const Page = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  min-height: 100vh;
  flex-direction: column;
`;
const Error = styled.p`
  background-color: tomato;
  color: white;
  border-radius: 6px;
  padding: 6px 12px;
  font-weight: bold;
  max-width: 400px;
  margin-bottom: 18px;
`;

export default ProfilePage;
