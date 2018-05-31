import React, { Component } from 'react';
import './App.css';

import Header from './components/header/Header';
import Navigation from './components/navigation/Navigation';
import Blog from './components/blog/Blog';
import Portfolio from './components/portfolio/Portfolio';
import About from './components/about/About';

class App extends Component {
  constructor(Props){
    super(Props);
    this.state = {
      showPage: "blog"
    }
  }

  receiveNavigationValue = (value) => {
    this.setState({
      showPage: value
    });
  }

  render() {
    if (this.state.showPage === "blog") {
      return (
        <div className="Wrapper">
          <div className="App">
            <Header></Header>
            <Blog></Blog>
          </div>
        </div>
      );
    } else if (this.state.showPage === "portfolio") {
      return (
        <div>
          <div className="App">
            <Header></Header>
            <Portfolio></Portfolio>
          </div>
        </div>
      )
    }
    return (
      <div>
        <div className="App">
          <Header></Header>
          <About></About>
        </div>
      </div>
    )
  }
}

export default App;
