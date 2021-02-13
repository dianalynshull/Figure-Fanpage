import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Header.css';

const Header = () => {
  return (
    <>
      <Navbar className='Header-navbar' expand='md'>
        <Navbar.Brand className='Header-artist-name'>
          <img src='https://cdn.shopify.com/s/files/1/2037/5155/collections/83565e6341800807fcc12569f7d7d763.png?v=1503386060' alt='Figures Logo'></img> 
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' className="Header-navbar-toggle" />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='Header-nav-links'>
            <Nav.Link className='Header-streaming-service-links' href='#Home' target="blank">Home</Nav.Link>
            <Nav.Link className='Header-streaming-service-links' href="#Events" target="blank">Events</Nav.Link>
            <Nav.Link className='Header-streaming-service-links' href="#music" target="blank">Music</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Header;