import { useRef, useState } from "react";
import { db } from "../../firebase/firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import {
  collection,
  query,
  orderBy,
  limit,
  serverTimestamp,
  addDoc,
} from "firebase/firestore";
import { useCurrentUserContext } from "../CurrentUserContext";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { NavLink } from "react-router-dom";

const ChatRoom = () => {
  const { currentUser } = useCurrentUserContext();
  const [formValue, setFormValue] = useState("");
  const dummy = useRef();
  const messagesRef = collection(db, "messages");

  const q = query(messagesRef, orderBy("createdAt"), limit(25));

  const [messages] = useCollectionData(q, { idField: "id" });

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = currentUser;

    await addDoc(messagesRef, {
      text: formValue,
      createdAt: serverTimestamp(),
      uid,
      photoURL,
    });

    setFormValue("");

    dummy.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <TopDiv>
        <TicketBtn to="/events">See a Show Together</TicketBtn>
      </TopDiv>
      <Main>
        {messages &&
          messages.map((msg) => <ChatMessage key={uuidv4()} message={msg} />)}

        <span ref={dummy}></span>
      </Main>

      <Form onSubmit={sendMessage}>
        <input
          value={formValue ?? ""}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="say something nice"
        />

        <button type="submit" disabled={!formValue}>
          🕊️
        </button>
      </Form>
    </>
  );
};

const ChatMessage = (props) => {
  const { currentUser } = useCurrentUserContext();
  const { text, uid, photoURL, createdAt } = props.message;
  const messageClass = uid === currentUser.uid ? "sent" : "received";

  return (
    <>
      <MsgDiv>
        <div className={`message ${messageClass}`}>
          <h6>{currentUser.displayName}</h6>
          <img
            src={
              photoURL ||
              "https://api.adorable.io/avatars/23/abott@adorable.png"
            }
          />
          <p className="main-text">{text}</p>
          {/* <h6>{createdAt.seconds.toDate()}</h6> */}
        </div>
      </MsgDiv>
    </>
  );
};

const TopDiv = styled.div`
  margin-top: 2rem;
`;

const TicketBtn = styled(NavLink)`
  background-color: #f58276;
  border: none;
  color: white;
  padding: 12px;
  margin: 12px 0;
  box-shadow: 0 1px 6px #ccc;
  width: 60%;
  border-radius: 10px;
  font-size: 18px;
  text-decoration: none;
  font-weight: bold;
`;

const Main = styled.div`
  padding: 10px;
  height: 80vh;
  margin: 10vh 0 10vh;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
`;

const Form = styled.form`
  height: 10vh;
  position: fixed;
  bottom: 0;
  width: 60%;
  max-width: 728px;
  display: flex;
  font-size: 1.5rem;
  width: 20%;

  button {
    background-color: #02adef;
    border: none;
    color: white;
    padding: 12px;
    margin: 12px 0;
    box-shadow: 0 1px 6px #ccc;
    width: 100%;
    border-radius: 6px;
    font-size: 18px;
  }
  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  input {
    padding: 12px;
    margin: 12px;
    font-size: 14px;
    border: 1px solid #ccc;
    box-shadow: 0 1px 4px #ccc;
    border-radius: 6px;
    font-size: 18px;
  }
`;

const MsgDiv = styled.div`
  display: flex;
  align-items: center;


  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: 2px 5px;
  }
  .sent {
    flex-direction: row-reverse;
  }

  .sent .main-text {
    color: white;
    background: #0b93f6;
    align-self: flex-start;
  }
  .received .main-text {
    background: #e5e5ea;
    color: black;
  }

  .main-text {
    max-width: 500px;
    margin-bottom: 12px;
    line-height: 24px;
    padding: 10px 20px;
    border-radius: 25px;
    position: relative;
    color: white;
    text-align: center;
  }
`;

export default ChatRoom;
