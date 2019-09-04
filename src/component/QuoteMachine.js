import React, {Fragment} from 'react';
import  Navbar  from 'react-bootstrap/Navbar';
import  Container  from 'react-bootstrap/Container';
import  Row from 'react-bootstrap/Row';
import  Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';


const QuoteMachine = ({ assignNewQuoteIndex, selectedQuote }) => (
	
	<Fragment>
		  <header id="header" className="mb-3">
        <Navbar bg="dark">
          <Container>
            <h1 id="title">Rebel-Cow Random Quote Machine</h1>
          </Container>
        </Navbar>
      </header>

      <Container id="quote-box">
          <Row className="justify-content-center">
            <Col sm={11} lg={8}>
              <div id="text">
                {selectedQuote.quote} - <span id="author"> {selectedQuote.author}</span>
                <div id="buttons">
                  <Button id="new-quote" variant="primary" size="lg" onClick={assignNewQuoteIndex}>New Quote</Button>
                  <Button id="tweet-quote"
                    target="_blank"
                    href={encodeURI(`https://twitter.com/intent/tweet?text=${selectedQuote.quote}&hashtags=rebel-cowquotes`)}>

                    <FontAwesomeIcon icon={faTwitter} size="1x"></FontAwesomeIcon>
                  </Button>
                </div>
              </div>
            </Col>
          </Row>    
      </Container>
  </Fragment>
);

export default QuoteMachine;