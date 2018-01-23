import React, { Component } from 'react';
import PubSub from 'pubsub-js';
class FormInput extends React.Component {
    constructor(){
        super();
        this.state = {
            inputValue: ''
        }
    }

    componentWillMount(){
        this.globalEvent = PubSub.subscribe('GLOBAL_EVENT', (topic, value) => {
            //console.log(topic, value);
            this.setState({
                inputValue: value
            });
        });
    }

    render(){
        return(
            <div>
                <input type="text" 
                    value={this.state.inputValue}
                    onChange={ (event) => {this.setState({inputValue: event.target.value})} }
                />
            </div>
        )
    }
} export default FormInput;