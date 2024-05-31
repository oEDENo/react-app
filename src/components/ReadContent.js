import React, { Component } from 'react';

class ReadContent extends Component {
  render(){
  console.log('Content', 'render');
    return (
      // <article>
      //   <h2>{this.props.title}</h2>
      //   {this.props.desc}
      // </article>
      <table className='table'>
        <thead>
            <tr>
                <td className='header fix-45'>{this.props.title}</td>
                <td className='header fix-15'>조회수</td>
            </tr>
        </thead>
        <tbody>
          <tr className='cell table-pad'>
            <td className='fix-45'>{this.props.desc}</td>
            <td className='fix-15'>{this.props.view}</td>
          </tr>
          <tr>
            <td colSpan={2}>
              <button className="button">
                <span>🎉</span>
                <span>Like</span>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default ReadContent;