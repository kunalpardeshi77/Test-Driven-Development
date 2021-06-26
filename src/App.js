import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "./App.css";

class App extends Component{
    render(){
        return(
            <div data-test="component-app">
                <h1 data-test="counter-display">The counter is currently</h1>
                <button data-test="increment-button">Increment Counter</button>
            </div>
        );
    }
}

export default hot(module)(App);