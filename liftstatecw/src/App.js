import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Players from "./Players";

//creating parent component
class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            amount: 1,
        }
    }
    goUpBy1 = (e)=>{
        this.setState({amount: 1});
    };

    clickFunction = (name)=>{
        console.log(name);
    };



  render() {
    return (
        <div>

      <div className="App">
          {/*calling child component twice in parent*/}
          <Players name={1} amount={this.state.amount}/>

          <h1>The winner is: <Players name={this.state.name}/></h1>

          <Players name={2} amount={this.state.amount}/>


      </div>
        </div>
    );
  }
}

export default App;
