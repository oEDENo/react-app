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
      mode: 'read',
      selected_content_id:2,
      welcome:{title:'welcome', desc:'Hi, Hello!!!'},
      Subject:{title:"WEB~!~!", sub:"World ! Wide! Web!"},
      contents:[
        {id:1, title:"HTML", desc:"HTML is for information"},
        {id:2, title:"CSS", desc:"CSS is for design"},
        {id:3, title:"JavaScript", desc:"JavaScript is for interactive"}
      ]
    }
  }

  render() {
    console.log('App', 'render');
    var _title, _desc = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if(this.state.mode === 'read'){
      var i = 0;
      while(i < this.state.contents.length){
        var data = this.state.contents[i];
        if(data.id === this.state.selected_content_id){
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i = i + 1;
      }
      // _title = this.state.contents[0].title;
      // _desc = this.state.contents[0].desc;
    }
    return (
      <div className="App">
        Hello, React~
        <Subject 
        title={this.state.Subject.title} 
        sub={this.state.Subject.sub}
        onChangePage={function(){
          this.setState({mode:'welcome'});
        }.bind(this)}>
        </Subject>
        {/* <header>
            <h1><a href='/' onClick={function(e){
              console.log(e);
              e.preventDefault();
              // this.state.mode = 'welcome';
              this.setState({
                mode: 'welcome'
              });
            }.bind(this)}>{this.state.Subject.title}</a></h1>
            {this.state.Subject.sub}
        </header> */}
        <TOC onChangePage={function(id){
          this.setState({mode:'read', selected_content_id:Number(id)});
        }.bind(this)} 
        data={this.state.contents}>
        </TOC>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}

export default App;
