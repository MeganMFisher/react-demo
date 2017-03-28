import React, { Component } from 'react'; //every component needs to import react

class MyFirstComponent extends Component {
    render() { //must render for it to work. 
        return <h1>...{this.props.name}...</h1>
    }
}



export default MyFirstComponent; //must have this to export component. 

//surround in curly braces to tell JSX you want to escape it and use javascript. 

//this.props.name allows you to access data from the parent component. 

//you give data from parent to child by adding a name='Meganosaurus'. any javascript value or function can be passed through the parent to child components. 


