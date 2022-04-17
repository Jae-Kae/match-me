import { useContext, useState } from "react";
import styled from "styled-components";
import { AppContext } from "../AppContext";
import { v4 as uuidv4 } from "uuid";
import { useCurrentUserContext } from "../CurrentUserContext";

const ChooseGenreForm = () => {
  const { currentUser, setCurrentGenre } = useCurrentUserContext();
  const { allGenres } = useContext(AppContext);
  const [choicesArray, setChoicesArray] = useState([]);
  const [selectState, setSelectState] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    let choicesCopy = [];
    choicesCopy = [e.target.value, ...choicesArray];
    setChoicesArray(choicesCopy);
    setSelectState(e.target.value);
    console.log("Copy:", choicesCopy);

    fetch("/api/update-genres", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        choicesCopy,
        currentuser: currentUser.uid,
      }),
    }).then(() => {
      setCurrentGenre(choicesCopy);
    });
  };

  console.log("choice", currentUser.uid);
  console.log("choice", choicesArray);

  return (
    <FormContainer className="form">
      <h2> Choose Your Top Genre </h2>
      <Form>
        <select value={selectState} onChange={handleChange}>
          
          <option>Select One</option>

          {allGenres.map((genre) => {
            return (
              <option value={genre} key={uuidv4()}>
                {genre}
              </option>
            );
          })}
        </select>
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

  select {
    padding: 12px;
    margin: 12px;
    font-size: 14px;
    border: 1px solid #ccc;
    box-shadow: 0 1px 4px #ccc;
    border-radius: 6px;
    font-size: 18px;
    width: 70%;
  }

  hr {
    width: 75%;
  }
`;

export default ChooseGenreForm;
