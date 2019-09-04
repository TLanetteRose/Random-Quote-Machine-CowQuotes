import React, { Component } from 'react';
import { random } from 'lodash';
import './App.css';
/*import  Navbar  from 'react-bootstrap/Navbar';
import  Container  from 'react-bootstrap/Container';
import  Row from 'react-bootstrap/Row';
import  Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';*/
import QuoteMachine from './component/QuoteMachine';



class App extends Component {
  constructor(props){
    super(props);
    this.state= {
      quotes: [],
      selectedQuoteIndex: null,
    }
    this.assignNewQuoteIndex = this.assignNewQuoteIndex.bind(this);
    this.generateNewQuoteIndex = this.generateNewQuoteIndex.bind(this);
    
  }

  //Using fetch to request JSON Gist with quotes

  componentDidMount() {
    fetch('https://gist.githubusercontent.com/TLanetteRose/cbb344a12b2586a070d1f3fa2fe02414/raw/bd6cdd24425bd0db124d05f6662dbe2a5e6fa0fc/cowquotes.json')
      .then(data => data.json())
      .then(quotes => this.setState({ quotes }, this.assignNewQuoteIndex));
  }

get selectedQuote() {
  if (!this.state.quotes.length || !Number.isInteger(this.state.selectedQuoteIndex)) {
    return undefined;
  }
  return this.state.quotes[this.state.selectedQuoteIndex];
}


//Use Lodash library for random function
/**
* Returns an integer representing an index in state.quotes
* If state.quotes is empty, returns undefined
*/
generateNewQuoteIndex() {
  if(!this.state.quotes.length){
    return undefined;
  }
  return random(0, this.state.quotes.length - 1);
}

//Method sets state to randomly quote index 
assignNewQuoteIndex() {
  this.setState({ selectedQuoteIndex: this.generateNewQuoteIndex() });
}

  render() {
    console.log(this.state.selectedQuoteIndex);
    return (
      <div id="quote-box">

        {
          this.selectedQuote ?
          <QuoteMachine selectedQuote= {this.selectedQuote} assignNewQuoteIndex= {this.assignNewQuoteIndex}/> :
          null
        }

      </div>
    );
  }

  
}

export default App;
