import React, { Component } from 'react';
import TOC from "./components/TOC"
import ReadContent from "./components/ReadContent"
import Subject from "./components/Subject"
import Control from "./components/control"
import './App.css';
import CreateContent from './components/CreateContent';

class App extends Component {
  // component 실행 시 제일 먼저 실행되어 초기화
  constructor(props){
    super(props);
    this.max_content_id = 3;
    this.state = {
      mode: 'create',
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
    var _title, _desc, _article = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
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
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
      // _title = this.state.contents[0].title;
      // _desc = this.state.contents[0].desc;
    } else if(this.state.mode === 'create'){
      _article = <CreateContent onSubmit={function(_title, _desc){
        this.max_content_id = this.max_content_id + 1;
        // this.state.contents.push({id:this.max_content_id, title:_title, desc:_desc});
        // var _contents = this.state.contents.concat({id:this.max_content_id, title:_title, desc:_desc});
        var newContetns = Array.from(this.state.contents);
        newContetns.push({id:this.max_content_id, title:_title, desc:_desc});
        this.setState({
          // contents: this.state.contents
          // contents: _contents
          contents: newContetns
        });
      }.bind(this)}></CreateContent>
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
        <Control onChangeMode={function(_mode){
          this.setState({
            mode:_mode
          });
        }.bind(this)}></Control>
        {_article}
      </div>
    );
  }
}

export default App;
