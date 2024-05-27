import React, { Component } from 'react';
import TOC from "./components/TOC"
import Content from "./components/content"
import Subject from "./components/Subject"
import './App.css';

class App extends Component {
  // component 실행 시 제일 먼저 실행되어 초기화
  constructor(props){
    super(props);
    this.state = {
      Subject:{title:"WEB~!~!", sub:"World ! Wide! Web!"},
      contents:[
        {id:1, title:"HTML", desc:"HTML is for information"},
        {id:2, title:"CSS", desc:"CSS is for design"},
        {id:3, title:"JavaScript", desc:"JavaScript is for interactive"}
      ]
    }
  }

  render() {
    return (
      <div className="App">
        Hello, React~
        <Subject title={this.state.Subject.title} sub={this.state.Subject.sub}></Subject>
        <Subject title="REact" sub="UI!~~"></Subject>
        <TOC data={this.state.contents}></TOC>
        <Content title="HTML" desc="HTML is HyperText Markup Language."></Content>
      </div>
    );
  }
}

export default App;
