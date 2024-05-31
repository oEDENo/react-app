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

        for(var i = 0; i < data.length; i++){
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
                </tr>
            );
        }

        return (
            <table className='table'>
                <thead>
                    <tr>
                        <td className='header fix-45'>목록</td>
                        <td className='header fix-15'>조회수</td>
                    </tr>
                </thead>
                <tbody>
                    {lists}
                </tbody>
            </table>
        );
    }
}

export default TOC;