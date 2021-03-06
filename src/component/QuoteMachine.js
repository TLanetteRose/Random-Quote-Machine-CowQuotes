import React, {Fragment} from 'react';
import  Navbar  from 'react-bootstrap/Navbar';
import  Container  from 'react-bootstrap/Container';
import  Row from 'react-bootstrap/Row';
import  Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
//import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import QuoteImage from './QuoteImage.js';



const QuoteMachine = ({ assignNewQuoteIndex, selectedQuote }) => (
  <Fragment>
    <header id="header" className="mb-3 mt-0">
      <Navbar bg="dark" fixed="top">
        <Container>
          <h1 id="title">Rebel-Cow Random Quote Machine</h1>
        </Container>
      </Navbar>
    </header>

    <Container id="quote-box">
      <Row className="justify-content-center mx-auto my-auto">
        <Col sm={11} lg={8}>
          <div id="text" className="p-3">
            {selectedQuote.quote} -{" "}
            <span id="author"> {selectedQuote.author}</span>
            <div
              id="buttons"
              className="p-4 d-flex justify-content-between mt-5"
            >
              <Button
                id="new-quote"
                variant="primary"
                size="lg"
                onClick={assignNewQuoteIndex}
              >
                New Quote
              </Button>
              <Button
                id="tweet-quote"
                target="_blank"
                href={encodeURI(
                  `https://twitter.com/intent/tweet?text=${selectedQuote.quote}&hashtags=rebel-cowquotes`
                )}
              >
                <FontAwesomeIcon icon={faTwitter} size="1x"></FontAwesomeIcon>
              </Button>
            </div>
          </div>
        </Col>
      </Row>
      <Row
        id="quote-image"
        className="d-flex justify-content-center align-content-center mx-auto my-auto"
      >
        <Col sm={11} lg={8} className="d-flex justify-content-center">
          <QuoteImage className="align-content-center" />
        </Col>
      </Row>
    </Container>
    
    <footer
      id="footer"
      className="d-flex justify-content-center align-items-center">
      <h5 id="designer">
        T.Lanette Pollard for{" "}
        <a href="http://www.rebel-cow.com">Rebel-Cow</a>
      </h5>
    </footer>
    
  </Fragment>
);

export default QuoteMachine;