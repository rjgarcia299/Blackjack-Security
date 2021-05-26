import { Button, Jumbotron, Container } from 'react-bootstrap';
import React from 'react';
import Typewriter from 'typewriter-effect';

const Header = () => {
  return (
    <div className="header-wrapper">
      <Container  className="header-main">
      <Jumbotron >
        <div className="typed-text">
          <Typewriter
          onInit={(typewriter) =>{
            typewriter
            .typeString("Reduce the risk.     ")
            .stop()
            .typeString("   Protect your property.")
            .start();
          }}
          />
          <br />
        </div>
        <Button size="lg" variant="danger" id="contact-us-button" block flushed to="">Contact Us
        </Button>
        </Jumbotron>
        </Container>
    </div>
  );
};

export default Header;
