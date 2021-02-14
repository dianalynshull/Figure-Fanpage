import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
  return (
    <div className='Footer-Wrapper'>
      <Navbar className='Footer-navbar'>
        <Nav.Link className='Footer-streaming-service-links' href='https://open.spotify.com/artist/5mADpqv2E8KIHDmEhH7wmr?si=AHREZn8yRveHVDKW4p6GYA' target='_blank'><i class='fab fa-spotify'></i></Nav.Link>
        <Nav.Link className='Footer-streaming-service-links' href='https://www.youtube.com/channel/UCr_EaO_b08W8I46F5n4u3eA' target='_blank'><i class='fab fa-youtube'></i></Nav.Link>
        <Nav.Link className='Footer-streaming-service-links' href='https://itunes.apple.com/us/artist/figure/321259709?ign-gact=3&ls=1' target='_blank'><i class='fab fa-itunes'></i></Nav.Link>
      </Navbar>
    </div>
  );
}

export default Footer;