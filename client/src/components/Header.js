import styled from "styled-components";
import { FaComment, FaUser } from "react-icons/fa";
import logo from "../components/matchLogo.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <HeaderDiv>
        <Nav to="/">
          <FaUser className="headerIcon" />
        </Nav>
        <img src={logo} alt="match me logo" />
        <Nav to="/profile">
        <FaComment className="headerIcon" />
        </Nav>
      </HeaderDiv>
    </>
  );
};

const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f9f9f9;
  img {
    height: 45px;
  }
`;

const Nav = styled(NavLink)`
cursor: pointer;
.headerIcon {
    font-size: 25px;
    margin: 20px;
    color: lightgray;
    transition: all .5s;
    &:hover{
        color: gray;
        transform: scale(1.1);
    }
}
`

export default Header;
