import React, { Component } from 'react';
import { random } from 'lodash';
import './App.css';
import Button from './component/Button';
import QuoteMachine from './component/QuoteMachine';






class App extends Component {
  constructor(props){
    super(props);
    this.state= {
      quotes: [],
      selectedQuoteIndex: null,
    }
    this.selectQuoteIndex = this.selectQuoteIndex.bind(this);
  }

  componentDidMount() {
    fetch('https://gist.githubusercontent.com/TLanetteRose/cbb344a12b2586a070d1f3fa2fe02414/raw/bd6cdd24425bd0db124d05f6662dbe2a5e6fa0fc/cowquotes.json')
      .then(data => data.json())
      .then(quotes => this.setState({ quotes }, () => {
        this.setState({ selectedQuoteIndex: this.selectQuoteIndex() })
      }));
  }

//Use Lodash library for random function
selectQuoteIndex() {
  if(!this.state.quotes.length){
    return;
  }
  return random(0, this.state.quotes.length - 1);
}



  render() {
    console.log(this.state.selectedQuoteIndex);
    return (
      <div className="App" id="quote-box">
        <Button buttonDisplayName="New Quote" clickHandler={this.nextQuoteClickHandler} />
      </div>
    );
  }

  
}

export default App;
