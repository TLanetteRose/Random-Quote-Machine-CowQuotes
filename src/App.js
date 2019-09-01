import React, { Component } from 'react';
import './App.css';
import  Navbar  from 'react-bootstrap/Navbar';
import  Container  from 'react-bootstrap/Container';
import  Row from 'react-bootstrap/Row';
import  Col from 'react-bootstrap/Col'
import Button from './component/Button';





class App extends Component {
  render() {
    return (
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
                  <Button buttonDisplayName="New Quote" />
                </div>
              </Col>
            </Row>    
          </Container>
       
      </React.Fragment>
     
    );
  }
}

export default App;
