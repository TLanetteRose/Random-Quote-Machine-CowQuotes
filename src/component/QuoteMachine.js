import React, {Fragment} from 'react';
import  Navbar  from 'react-bootstrap/Navbar';
import  Container  from 'react-bootstrap/Container';
import  Row from 'react-bootstrap/Row';
import  Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


const QuoteMachine = ({ assignNewQuoteIndex, selectedQuote }) => (
	
	<Fragment> 
		  <header id="header" className="mb-3">
          <Navbar bg="dark">
            <Container>
              <h1 id="title">Rebel-Cow Random Quote Machine</h1>
            </Container>
          </Navbar>
      </header>

      <Container>
          <Row className="justify-content-center">
            <Col sm={11} lg={8}>
              <div id="text">
                {selectedQuote.quote} - <span id="author"> {selectedQuote.author}</span>
             
                <Button id="new-quote" variant="primary" size="lg" onClick={assignNewQuoteIndex}>New Quote</Button>
              </div>
            </Col>
          </Row>    
      </Container>
  </Fragment>
);

export default QuoteMachine;