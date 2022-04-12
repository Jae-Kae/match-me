import React from "react"; 
import styled from "styled-components";
import { FaBomb } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const PageNotFound = ()=> {
    return (
        <div>
        <Wrapper>
            <div><FaBomb size={100}/></div>
            <br/>
            <h1>PAGE NOT FOUND!</h1>
            <br/>
            <HomepageButton exact to="/">HOMEPAGE</HomepageButton>
        </Wrapper>
        </div>
    );
}; 

const Wrapper = styled.div`
width: 100%; 
height:100vh; 
display:flex; 
flex-direction:column; 
justify-content:center;
align-items:center; 
padding: 10px;
div {
    margin: 10px;
    width:50%;
    text-align:center;
};
`;

const HomepageButton = styled(NavLink)`
padding: 10px 30px;
color: #000;
box-shadow: 0px 0px 0px 2px #000, 2px 2px 0px 2px #00ffc0;
text-decoration: none;
transition: 0.2s all;
box-sizing: border-box;
cursor: pointer;
`

export default PageNotFound; 