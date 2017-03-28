import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyFirstComponent from './MyFirstComponent';
//.js is implied. How you import Component.
import List from './List';

class App extends Component {
  constructor(props) {
    super(props)

      this.state = {
        groceries: ['ostrich eggs', 'pumpkins', 'potatoes'],
        chores: ['feed ostrich', 'vacuum', 'sweep']
      }
      this.removeItem = this.removeItem.bind(this)

    //   this.state = {
    //     divStyle: {
    //        color: 'purple'
    //     }
    //   }
    // this.handleClick = this.handleClick.bind(this);
  }

  removeItem(listName, itemName) {
    let targetList = this.state[listName]

    let index = targetList.indexOf(itemName);
    targetList.splice(index, 1);

    let newState = {}; 
    newState[listName] = targetList;

    this.setState(newState);
  }

  // handleClick() {

  //   this.setState({
  //     divStyle: {
  //       color: 'blue'
  //     }
  //   }) 
  // }


  render() {

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <MyFirstComponent name='Meganosaurus'/> 
        <MyFirstComponent name='Rexie'/> 
        
        {/*<div onClick={this.handleClick} style={this.state.divStyle}>
          Click me!
        </div>*/}
        
        
        
        <List 
        listName='groceries' 
        whenClicked={this.removeItem} 
        title='Groceries' 
        list={this.state.groceries} 
        />
        <List 
        listName='chores' 
        whenClicked={this.removeItem} 
        title='Chores' 
        list={this.state.chores} 
        />

      </div>
    );
  }
}

export default App;


{/*kinda like a directive, how you call Component-self closing tags <List />. if you want it twice you just call it twice*/}
//app Component is first and is the parent of the MyFirstComponent which is the child. Hierarchial relationship between Components. You break down a full website and break it down into chunks. One component creating other Components which create other componenets. 
//every file is a modular. different from component. Modular is everything else inside the file outside the component. 
//if you import somthing create-react-app will bring it in. 
//you are only really allowed to put methods in the classes.  

//how does react keep track of changes?


//how does react respond to changes?

//background-color is backgroundColor: 'blue'

//every component has props from parent component and state from component itself. user click, data from database-keep track of in state.

//constructor is a method that is called the first time the class is created. Used to set up your class and preconfigure some things. we can create our state within it. 

//state: part of component, data that could change and we need to keep track of it. The only place you can create state is inside of a constructor function.

//state: the only way to change state is to call function this.setState() . react will take object and merge it into state. 

//onClick={this.handleClick} basically like ng-click. have to pass function definition.

