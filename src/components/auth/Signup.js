import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';

import Signupview from './Signupview';
import Header from '../Header';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            email: '',
            password: '',
            role: '',
            isSignedUp: false
        }
    }

    handleInput = (e) => {

        this.setState({
            [e.target.name]: e.target.value
        });
    }

    formSubmit = (e) => {
        e.preventDefault();
        const instructor = {
            first_name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            role: 'instructor'
        }
        axios({
            method: 'post',
            url: 'https://infinite-plateau-65130.herokuapp.com/api/signup',
            data: instructor, 
          }).then(response => {
            console.log(response);
            this.setState({
                isSignedUp: true
             }) 
          }).catch(error => {
            console.log(error);
          });
    }

    render() {
        if(this.state.isSignedUp === true){
            return <Redirect to="/login" />
        }

        return (
            <>
            <Header />
            <Signupview formSubmit={this.formSubmit} handleInput={this.handleInput} />
            </>
        );
    }
}

export default Signup;