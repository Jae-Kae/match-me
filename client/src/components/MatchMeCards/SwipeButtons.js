import { FaComment, FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import styled from "styled-components";



const SwipeButtons = () =>{

return(<>
<Container>
    <IconNav to="/profile/:id">
    <FaUser className="headerIcon"/>
    </IconNav>
    <IconNav to="/chat/:id">
    <FaComment className="headerIcon"/>
    </IconNav>
</Container>
</>)

}



const Container = styled.div`
position: fixed;
bottom: 10vh;
width: 100%;
display: flex;
justify-content: space-evenly;
margin-bottom: 8rem;

.headerIcon{
    font-size: 40px;
    margin: 20px 20px 10px 20px;
    color: #f58277;
    transition: all .5s;
    &:hover{
        color: gray;
        transform: scale(1.1);
    }
    
}
`

const IconNav = styled(NavLink)`
border: none;
background-size: 60px;
background-color: transparent;
border-radius: 50%;
box-shadow: 0px 10px 53px 0px rgba(0, 0, 0, 0.3)

`

export default SwipeButtons;