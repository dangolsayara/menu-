import React from 'react';
import './App.css';
import Menu from './components/menu.js' 
import {DISHES} from './shared/dishes'

class  App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      dishes:DISHES
    };
  }
            render(){

  return (
    <div className="App">
      <Menu dishes={this.state.dishes}></Menu>
    </div>
  );
}
}

export default App;
