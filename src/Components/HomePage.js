import React, { Component } from 'react';
import logo from '../homepage.jpeg';
import axios from "axios";

class HomePage extends Component {

    constructor(props) {
        super(props);
    }
    render(){
        let backgroundImage = '../public/logo192.png';
        return(
            <div>
                Your one-stop guide to staying, living and working in the vibrant Brighton
                <img alt='abc' src={logo} />
                </div>
        )
    }
}

export default HomePage;

    