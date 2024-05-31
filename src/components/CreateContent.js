import React, { Component } from 'react';

class CreateContent extends Component {
  render(){
  console.log('Content', 'render');
    return (
      <article>
        <h2>Create</h2>
        <form action="/crete_process" methos="post"
          onSubmit={function(e){
            e.preventDefault();
            this.props.onSubmit(
              e.target.title.value,
              e.target.desc.value
            );
          }.bind(this)}
        >
          <p><input type='text' name='title' placeholder='title'></input></p>
          <p>
            <textarea name="desc" placeholder='description'></textarea>
          </p>
          <p>
            <input type='submit' className='btn-gradient cyan mini' value="작성"></input>
            <input type='button' className='btn-gradient purple mini' value='취소'
              onClick={function(){
                
              }.bind(this)}
            ></input>
          </p>
        </form>
      </article>
    );
  }
}

export default CreateContent;