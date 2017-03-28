import React, { Component } from 'react';
import './List.css';

class List extends Component {
   
   handleClick(itemName) {
        this.props.whenClicked(this.props.listName, itemName)
   }

    render() {

        var list = [];

        for(let i = 0; i < this.props.list.length; i++) {
            list.push(
                <li 
                onClick={this.handleClick.bind(this, this.props.list[i])} 
                key={i}>
                {this.props.list[i]}</li>
            )
        }

    return (
     <div>
        <h3>{this.props.title}</h3>
        <ul>
            {list}
        </ul>
     </div>
    )
    }
}




export default List;

//return must have ( around what you are returning if more than one line ) 

//have to have one parent element and everything else can be inside it. 

/*return (
    <div>
        everything else
    </div>
)*/