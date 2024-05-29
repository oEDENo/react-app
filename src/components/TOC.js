import React, { Component } from 'react';

class TOC extends Component {
    shouldComponentUpdate(newProps){
        if(this.props.data === newProps.data){
            return false;
        }
        return true;
    }
    render(){
    console.log('TOC', 'render');
        var lists = [];
        var data = this.props.data;
        var i = 0;
        while (i < data.length){
            lists.push(
            <tr key={data[i].id} className='cell'>
                <td className='fix-45'>
                    <a 
                        href={'/content/'+data[i].id}
                        data-id={data[i].id}
                        onClick={function(e){
                            e.preventDefault();
                            this.props.onChangePage(e.target.dataset.id);
                        }.bind(this)}
                    >
                        {data[i].title}
                    </a>
                </td>
                <td className='fix-15'>{data[i].view}</td>
            </tr>);
            i = i + 1;
        }
      return (
        // <nav>
        //       <ul>
        //           {lists}
        //       </ul>
        //   </nav>
        <table className='table'>
            <th className='header'>
                <td className='fix-45'>목록</td>
                <td className='fix-15'>조회수</td>
            </th>
            {lists}
        </table>
      );
    }
  }

  export default TOC;