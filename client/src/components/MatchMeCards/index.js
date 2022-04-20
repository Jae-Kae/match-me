import styled from "styled-components";
import MatchCards from "./MatchCards";



const MatchMeCards = () => {
    return(<>
    
        <Container>
            <div>
            <h4>
                <i>Swipe up to see </i><span>profile</span>
            </h4>
            <br/>
            <h4>
            <i>Swipe down to </i><span>chat</span>
            </h4>
            </div>
        </Container>
            <MatchCards/>
        
        </>)

}

const Container = styled.div`
display: flex;
flex-direction: column;
align-self: center;
justify-content: center;
margin: 2rem 0rem 1rem 0rem;
div{
    text-align: center;
    h4{
        color: #f58277;
    }
    span{
        color: #02ADEF;

    }
}

`

export default MatchMeCards;