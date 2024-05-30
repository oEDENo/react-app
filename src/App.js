import React, { Component } from 'react';
import TOC from "./components/TOC"
import ReadContent from "./components/ReadContent"
import Subject from "./components/Subject"
import Control from "./components/control"
import './App.css';
import CreateContent from './components/CreateContent';
import UpdateContent from './components/UpdateContent';

class App extends Component {
  // component 실행 시 제일 먼저 실행되어 초기화
  constructor(props){
    super(props);
    this.max_content_id = 3;
    this.state = {
      mode: 'welcome',
      selected_content_id:1,
      welcome:{title:'welcome', desc:'Hi, Hello!!!'},
      Subject:{title:"React Study", sub:"📋 Board 📋"},
      contents:[
        {id:1, title:"HTML", desc:"HTML is for information", view:0},
        {id:2, title:"CSS", desc:"CSS is for design", view:0},
        {id:3, title:"JavaScript", desc:"JavaScript is for interactive", view:0}
      ]
    }
  }

  getReadContent(){
    for(var i = 0; i < this.state.contents.length; i++){
      if(this.state.contents[i].id === this.state.selected_content_id){
        return this.state.contents[i];
      }
    }
  }

  getContent(){
    var _title, _desc, _article = null;

    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>;

    } else if(this.state.mode === 'read'){
      var _content = this.getReadContent();
      _article = <ReadContent title={_content.title} desc={_content.desc}></ReadContent>;

    } else if(this.state.mode === 'create'){
      _article = <CreateContent onSubmit={function(_title, _desc){
        this.max_content_id = this.max_content_id + 1;
        // this.state.contents.push({id:this.max_content_id, title:_title, desc:_desc});
        // var _contents = this.state.contents.concat({id:this.max_content_id, title:_title, desc:_desc});
        var newContetns = Array.from(this.state.contents);
        newContetns.push({id:this.max_content_id, title:_title, desc:_desc, view:0});
        this.setState({
          // contents: this.state.contents
          // contents: _contents
          contents: newContetns,
          mode:'read',
          selected_content_id:this.max_content_id
        });
      }.bind(this)}></CreateContent>

    } else if(this.state.mode === 'update'){
      _content = this.getReadContent();
      _article = <UpdateContent data={_content} onSubmit={function(_id, _title, _desc){
        var _contents = Array.from(this.state.contents);

        for(var i = 0; i < _contents.length; i++){
          if(_contents[i].id === _id){
            _contents[i] = {id:_id, title:_title, desc: _desc, view: _contents[i].view};
            break;
          }
        }

        this.setState({
          contents: _contents,
          mode: 'read'
        });
      }.bind(this)}></UpdateContent>
    }
    return _article;
  }

  render() {
    console.log('App', 'render');

    return (
      <div className="App">
        <Subject 
          title={this.state.Subject.title} 
          sub={this.state.Subject.sub}
          count={this.state.contents.length}
          onChangePage={function(){
            this.setState({mode:'welcome'});
          }.bind(this)}
        >
        </Subject>

        <TOC 
          onChangePage={function(id){
            var _contents = Array.from(this.state.contents);
            
            for(var i = 0;  i < _contents.length; i++){
              if(_contents[i].id === Number(id)){
                _contents[i].view += 1;
                break;
              }
            }

            this.setState({mode:'read', selected_content_id:Number(id), contents: _contents});
          }.bind(this)} 
          data={this.state.contents}
        >
        </TOC>

        <Control 
          onChangeMode={function(_mode){
            if(_mode === 'delete'){
              if(window.confirm('삭제하시겠습니까?')){
                var _contents = Array.from(this.state.contents);

                for(var i = 0;  i < _contents.length; i++){
                  if(_contents[i].id === this.state.selected_content_id){
                    _contents.splice(i, 1);
                    break;
                  }
                }

                this.setState({
                  mode:'welcome',
                  contents:_contents
                });
                alert('success delete!!');
              }
            } else {
              this.setState({
                mode:_mode
              });
            }
            
          }.bind(this)}
        >
        </Control>
        {this.getContent()}
      </div>
    );
  }
}

export default App;
