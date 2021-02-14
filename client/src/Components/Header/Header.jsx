import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Header.css';

const Header = () => {
  return (
    <div className='Header-wrapper'>
      <Navbar className='Header-navbar' expand='sm'>
        <Navbar.Brand className='Header-artist-name'>
          <img src='https://cdn.shopify.com/s/files/1/2037/5155/collections/83565e6341800807fcc12569f7d7d763.png?v=1503386060' alt='Figures Logo'></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' className="Header-navbar-toggle" />
        <Navbar.Collapse id='basic-navbar-nav' className='Header-nav-container'>
          <Nav className='Header-nav-links'>
            <Nav.Link className='Header-nav-link' href='#Home'>Home</Nav.Link>
            <Nav.Link className='Header-nav-link' href='#Events'>Events</Nav.Link>
            <Nav.Link className='Header-nav-link' href='#music'>Music</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;