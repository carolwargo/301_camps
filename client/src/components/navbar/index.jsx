import React from 'react';
import { Button, Container} from 'react-bootstrap';
import Logo from '../../assets/images/Logo.png';



import {NavLink} from 'react-router-dom';


export default function Navbar() {
  return (
    <div className='navbar' id='navbar'>
      <nav expand="lg" className="bg-black">
      <Container>
      <NavLink className="navbar-brand" to="/">
        <img
          src={Logo}
          alt="Logo"
          height="20"
          className="d-inline-block align-top mt-1"
        />
     </NavLink>
          <span>

            <Button variant="outline-light" className="mr-2">Sign Up
              </Button>
              <Button variant="outline-light" className="mr-2">Sign In 
              </Button>
          </span>
        </Container>
      </nav>

     </div>
  );
}

