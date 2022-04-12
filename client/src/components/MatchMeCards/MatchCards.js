import TinderCard from "react-tinder-card"
import {useContext } from "react"
import styled from "styled-components"
import { AppContext } from "../AppContext"


const MatchCards = () => {
    const {users} = useContext(AppContext);
    console.log("USERS MATCHCARD:", users)

    return(
        <CardsContainer>
            {users.map((user)=>{
                return (
                <TinderCard 
                className="swipe"
                key={user.name}
                preventSwipe={['up', 'down']}
                >
                    
                    <TinderDiv style={{backgroundImage: `url(${user.url})`}}>
                        <h3>{user.name}</h3>
                    </TinderDiv>
                </TinderCard>
                )
            })}

        </CardsContainer>
    )
}

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
h3{
    position: absolute;
    bottom: 10px;
    color: white;
}
`

const CardsContainer = styled.div`
display: flex;
justify-content: center;
margin-top: 5vh;


.swipe{
    position: absolute;
}
`

export default MatchCards;