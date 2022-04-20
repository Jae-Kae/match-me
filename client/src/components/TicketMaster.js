import { useEffect } from "react";
import styled from "styled-components";
import { useCurrentUserContext } from "../components/CurrentUserContext";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion/dist/framer-motion";

const TicketMaster = () => {
  // const { genres } = useParams();
  const { currentGenre, eventInfo, setEventInfo } = useCurrentUserContext();

  useEffect(() => {
    if (currentGenre.length > 0) {
      const fetchData = async (name) => {
        const response = await fetch(`/discovery/v2/events/${name}`);
        const data = await response.json();
        setEventInfo(data.data);
        console.log(eventInfo, "TICKETS");
      };
      fetchData(currentGenre);
      console.log("CurrentG from Ticket:", currentGenre);
    } else {
      console.log("lol", currentGenre);
    }
  }, []);

  console.log("CurrentG from Ticket num 2:", currentGenre);

  return (
    <>
      <Container>
        {eventInfo && currentGenre ? (
          <Grid
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Divider />
            <h2>Select An Event</h2>
            <Divider />

            {eventInfo?._embedded?.events?.map((item) => {
              return (
                <Card key={item.id}>
                  <Link
                  className="link"
                    to={{pathname: item.url}}
                    target="_blank"
                  >
                    <img src={item.images[0].url} alt="" />
                    <h4>{item.name}</h4>
                  </Link>
                </Card>
              );
            })}
          </Grid>
        ) : (
          <>
            <h1>No Events For This Genre</h1>
          </>
        )}
      </Container>
    </>
  );
};

const Container = styled.div`
  height: 100%;
  width: 100%;
  margin: 10px 0px;
  display: flex;
  justify-content: center;
`;
const Grid = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
  padding-top: 50px; */
`;

const Card = styled.div`

.link{
  max-width: 60%;
}
  img {
    width: 500px;
    border-radius: 2rem;
    margin: 0 auto;
    display: block;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
    color: black;
    font-size: 1.5rem;
  }
`;
const Divider = styled.hr`
  width: 45%;
  margin: 20px 0px;
`;

export default TicketMaster;
