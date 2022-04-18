import { useContext } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useEffect } from "react";
import { useCurrentUserContext } from "../CurrentUserContext";
import { AppContext } from "../AppContext";


const GenreArea = () => {
  const { currentUser, currentGenre, setCurrentGenre } =
    useCurrentUserContext();
  const { allUsers } = useContext(AppContext);
 
//
  useEffect(() => {
    if (allUsers && currentUser) {
  

      const CurrentUserData = allUsers.find((user) => {
        console.log("Current from GA", currentUser, user.id);
        if (currentUser.uid === user.id) {
          return user;
        }
      });
      if (CurrentUserData) {
        setCurrentGenre(CurrentUserData.genres);
      }
      console.log("Current User's Genre", CurrentUserData);
    }

    // allUsers.map((user) => {
    //   if (currentUser.uid === user.id) {
    //     setCurrentGenre(user.genres);
    //   }
    // });
  }, [currentUser, allUsers]);

  return (
    <>
      <Container>
        {currentGenre === [] ? (
          <></>
        ) : (
          <GenreBtn to="/matchMeCards">{currentGenre}</GenreBtn>
        )}
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* width: 50%; */
  /* min-height: 100vh; */
  /* flex-direction: column; */
  div {
    margin: 0px 10px;
    text-align: center;
  }
`;

const GenreBtn = styled(NavLink)`
  background-color: #f58277;
  border: none;
  color: white;
  padding: 12px;
  margin: 12px 0;
  box-shadow: 0 1px 6px #ccc;
  width: 80px;
  border-radius: 6px;
  font-size: 18px;
  text-decoration: none;
  font-weight: bold;
`;

export default GenreArea;

// useEffect(() => {
//   const getAllGenres = async (db) => {
//     const genres = collection(db, "genres");
//     const genresSnapshot = await getDocs(genres);
//     //create list of documents
//     const genresArray = genresSnapshot.docs.map((doc) => doc.data());

//     return setAllGenres(genresArray[0]);
//   }
//   getAllGenres(db);
// }, []);

// console.log("GENRES", allGenres)
// const genreArr = allGenres?.genres
// console.log("ARRAY2", genreArr)
