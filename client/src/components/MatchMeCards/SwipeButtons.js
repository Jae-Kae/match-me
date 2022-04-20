import { FaArrowLeft } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import styled from "styled-components";



const SwipeButtons = () =>{

return(<>
<Container>
    <div>
    <IconNav to="/profile/:id">
    <FaArrowLeft className="headerIcon"/>
    </IconNav>
    <p>see last card</p>
    </div>
</Container>
</>)

}



const Container = styled.div`
position: fixed;
bottom: 2vh;
width: 100%;
display: flex;
justify-content: space-evenly;
margin-bottom: 8rem;

.headerIcon{
    font-size: 40px;
    margin: 20px 20px 10px 20px;
    color: #f58277;
    transition: all .5s;
    text-decoration: none;
    &:hover{
        color: gray;
        transform: scale(1.1);
    }
    
}
div{
    p{
        font-weight: bold;
    }
}
`

const IconNav = styled(NavLink)`
border: none;
background-size: 60px;
text-decoration: none;
background-color: transparent;
border-radius: 50%;
box-shadow: 0px 10px 53px 0px rgba(0, 0, 0, 0.3);

`

export default SwipeButtons;