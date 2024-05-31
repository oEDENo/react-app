import React, { Component } from 'react';

class Control extends Component {
  render(){
    console.log('Control', 'render');
    return (
      <div className='pad-20'>
        <input type="button" className='btn-gradient yellow mini' onClick={function(e){
          e.preventDefault();
          this.props.onChangeMode('list');
        }.bind(this)} value="목록"></input>

        <input type="button" className='btn-gradient green mini' onClick={function(e){
          e.preventDefault();
          this.props.onChangeMode('create');
        }.bind(this)} value="글쓰기"></input>

        <input type="button" className='btn-gradient cyan mini' onClick={function(e){
          e.preventDefault();
          this.props.onChangeMode('update');
        }.bind(this)} value="수정"></input>

        <input className='btn-gradient red mini' onClick={function(e){
          e.preventDefault();
          this.props.onChangeMode('delete');
        }.bind(this)} type="button" value="삭제"></input>
      </div>
    );
  }
}
  
export default Control;