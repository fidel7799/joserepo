import React, { Component } from 'react';
import Form from './components/Form';
import PubSub from 'pubsub-js';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.onClick = this.onClick.bind(this);
  }
  onClick(event){
    //TODO
    PubSub.publish('GLOBAL_EVENT', true);
  }
  render() {
    return (
      <div className="App">
          <h4> Componente 1</h4>  
          <br/>
          <Form/>
          <button onClick={this.onClick}>Lanzar evento</button>
      </div>
    );
  }
}

export default App;
