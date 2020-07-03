import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  text-decoration: none;
  width: 100%;
  height: 200px;
`;

const Navitem = styled.nav`

`;

function Header() {
  return (
    <div>
      <Navbar>
        <Navitem>
          <Link to="/bmical">BMI Calculator</Link>
        </Navitem>
        <Navitem>
          <Link to="/texttransform">Text Transform</Link>
        </Navitem>

        <Navitem>
        <Link to="/catage">Cat Age Conversion</Link>
        </Navitem>
        
      </Navbar>
    </div>
  );
}

export default Header;
