import React, { Component } from 'react';
import './App.css';
import StockInfo from './components/StockInfo';
import StockError from './components/StockError';
import LoadLogo from './components/LoadLogo';
import {loadQuoteForStock, loadLogo} from './api/iex';


//import company logo for stock

class App extends Component {
  state = {
    symbol: "",
    logo: null,
    quote: null,
    error: null,
  }

  componentDidMount() {
    this.loadQuote();
  }

  loadQuote() {
    loadQuoteForStock(this.state.symbol)
      .then((quote) => {
        this.setState({ quote: quote, error: null})
      })
      .catch((err) => { this.setState({
        error: "quote not found"
        })
      })

    loadLogo(this.state.symbol)
      .then((logo) => {
        console.log("logo is: ", logo);
        this.setState({ logo: logo.url, error: null})
      })
      .catch((err) => { this.setState({
        error: "logo not found"
        })
      })

  }

  handleSymbolChange = (event) => {
    const target = event.target;
    const symbol = target.value;
    this.setState({ symbol: symbol});
  }

  handleButtonClick = (event) => {
    this.loadQuote();
  }

  render() {
    return (
      <div className="App">
        <h1>Wolf of React</h1>
      <input
        value={this.state.symbol}
        placeholder="Enter symbol"
        onChange={this.handleSymbolChange}
      />
    <button onClick={this.handleRollBack}>Roll Back
    </button>
    <button onClick={this.handleButtonClick}>Get Quote
    </button>
        <StockError error={this.state.error}/>
        <LoadLogo logo={this.state.logo}/>
        <StockInfo {...this.state.quote}/>
      </div>
    );
  }
}

export default App;
