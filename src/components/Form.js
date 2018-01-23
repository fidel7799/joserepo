import React, { Component } from 'react';
import FormInput from './FormInput';
import PubSub from 'pubsub-js';

class Form extends Component {
    constructor(){
        super();
        
    }
    // 
    componentWillMount(){
        this.globalEvent = PubSub.subscribe('GLOBAL_EVENT', (topic, value) => {
            console.log(topic, value);
        });
    }
    //
    componentWillUnmount(){
        PubSub.unsubscribe(this.globalEvent);
    }
    render(){
        return(
            <div>
                <FormInput/>
            </div>
        )
    }
} export default Form;