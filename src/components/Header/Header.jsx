import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


const Navbar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  text-decoration: none;
  width: 100%;
  height: 100px;
`;

const Navitem = styled.div`
  a {
    text-decoration: none;
    color: black;
  }
  a:hover{
      
      padding: 10px;
      border-radius: 4px;
      background-color: #C2CAD0;
  }
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
      <hr />
    </div>
  );
}

export default Header;
