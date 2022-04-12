import { useCurrentUserContext } from "../CurrentUserContext"
import styled from "styled-components"
import { NavLink } from "react-router-dom"
import { FaComment, FaUser, FaHome } from "react-icons/fa";
import { COLORS } from "../GlobalStyles";


const Sidebar = () => {

    const {currentUser} = useCurrentUserContext()

    return(
        <SidebarContainer>

  
          {/* <Logo src={logo} /> */}
      

   
          <StyledNavLink exact  to="/">
            <span className='icon'><FaHome /></span> Home
          </StyledNavLink>
        
          <StyledNavLink exact to={currentUser.profile.handle}>
            <span className='icon'><FaUser/></span> Profile
          </StyledNavLink>
        
       
          <Button>Meow</Button>
      
    </SidebarContainer>
  
    )
}

const Button = styled.button`
color: white;
background-color: ${COLORS.primary};
border-radius: 35px;
width: 150px;
padding: 6px;
font-size: 25px;
margin-right: 10px;

&:hover{
  cursor: pointer;
}


`


const Logo = styled.img`
height: 70px;
width: 70px;
margin: 15px 0px 15px 0px;
`

const StyledNavLink = styled(NavLink)`
padding: 15px;
font-size: 20px;
font-weight: bold;
text-decoration: none;
color: black;

.span{
  margin: 15px;
}

.icon{
  margin-right: 20px;
  font-size: 30px;
}

&:hover{
  color: ${COLORS.primary};
  background-color: rgb(76, 0, 255, 0.1);
  border-radius: 22px;
  cursor: pointer;
}
&.active {
    color: ${COLORS.primary};
  }

`

const SidebarContainer = styled.div`
width: 200px;
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: flex-end;
margin: 15px;
`


export default Sidebar;