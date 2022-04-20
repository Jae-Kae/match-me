import TinderCard from "react-tinder-card";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { AppContext } from "../AppContext";
import { v4 as uuidv4 } from "uuid";
import { useCurrentUserContext } from "../CurrentUserContext";

const MatchCards = () => {
  const { allUsers } = useContext(AppContext);
  const { currentUser, currentGenre } = useCurrentUserContext();
  const [genreMatched, setGenreMatched] = useState([]);

  useEffect(() => {
    let usersWithoutCurrentUser;
    //filter the list to remove currentUser
    if (allUsers.length > 0 && currentUser) {
      usersWithoutCurrentUser = allUsers.filter((user) => {
        if (user.displayName !== currentUser.displayName) {
          return user;
        }
      });

      console.log("USERS NO CURRENT:", usersWithoutCurrentUser, allUsers);
    }

    //filter to find the users with the same genre array feilds
    if (usersWithoutCurrentUser && currentGenre.length > 0) {
      const result = usersWithoutCurrentUser.filter((user) => {
        if (user.genres[0] === currentGenre[0]) {
          return user;
        }
      });
      console.log("RESULT:", result);
      setGenreMatched(result);
    }
  }, []);

  return (
    <CardsContainer>
      {genreMatched.length > 0 ? (
        genreMatched.map((user) => {
          return (
            <TinderCard
              onSwipe={(swipe) => {
                if (swipe === "up") {
                  window.location.href = `http://localhost:3000/profile/${user.id}`;
                } else if (swipe === "down") {
                  window.location.href = "http://localhost:3000/chat";
                }
              }}
              className="swipe"
              key={uuidv4()}
              // preventSwipe={["up", "down"]}
            >
              <TinderDiv style={{ backgroundImage: `url(${user.photoURL})` }}>
                <h3>{user.displayName}</h3>
              </TinderDiv>
            </TinderCard>
          );
        })
      ) : (
        <>
          {" "}
          <h1>Uh Oh! No Matches Here.</h1>
        </>
      )}
    </CardsContainer>
  );
};

const TinderDiv = styled.div`
  position: relative;
  width: 600px;
  padding: 20px;
  max-width: 85vw;
  height: 50vh;
  border-radius: 20px;
  background-position: center;
  background-size: cover;
  box-shadow: 0px 18px 53px 0px rgba(0, 0, 0, 0.3);
  h3 {
    position: absolute;
    bottom: 10px;
    color: white;
  }
`;

const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5vh;

  .swipe {
    position: absolute;
  }
`;

export default MatchCards;
