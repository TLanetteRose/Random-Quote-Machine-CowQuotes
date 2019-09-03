import React from 'react';
import  Navbar  from 'react-bootstrap/Navbar';
import  Container  from 'react-bootstrap/Container';
import  Row from 'react-bootstrap/Row';
import  Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';


const QuoteMachine = ({ assignNewQuoteIndex, selectedQuote }) => (
	
	<React.Fragment> 
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
                <div className="App mt-2 mx-auto py-3" id="quote-box">
                	{this.selectedQuote.quote ? `"${this.selectedQuote.quote}" - ${this.selectedQuote.author}` : ''}
             
                	
                  	<Button id="new-quote" variant="primary" size="lg" buttonDisplayName="New Quote" onClick={this.assignNewQuoteIndex}/>
                </div>
              </Col>
            </Row>    
        </Container>
    </React.Fragment>
);

export default QuoteMachine;