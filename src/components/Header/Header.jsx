import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  text-decoration:none;
  width: 100%;
  height:200px;
`;

function Header() {
  return (
    <div>
      <Navbar>
      
          <Link to="/bmical">BMI Calculator</Link>
          <Link to="/texttransform">Text Transform</Link>
          <Link to="/catage">Cat Age Conversion</Link>
      
      </Navbar>
    </div>
  );
}

export default Header;
