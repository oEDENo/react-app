import React, { Component } from 'react';
import TOC from "./components/TOC"
import Content from "./components/content"
import Subject from "./components/Subject"
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        Hello, React~
        <Subject title="WEB!!" sub="world wide web~~"></Subject>
        <Subject title="REact" sub="UI!~~"></Subject>
        <TOC></TOC>
        <Content title="HTML" desc="HTML is HyperText Markup Language."></Content>
      </div>
    );
  }
}

export default App;
