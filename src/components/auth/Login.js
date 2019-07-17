import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Loginview from './Loginview';
import Header from '../Header';
import axios from 'axios';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            isLoggedIn: null,
            // loginState: localStorage.getItem('id')
        };
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    // onClickLoginButton= () => {
    //     'login'
    // }

    formSubmit = (e) => {
        e.preventDefault();
        const instructorLogin = {
            email: this.state.email,
            password: this.state.password
        }

        axios({
            method: 'Post',
            url: 'https://infinite-plateau-65130.herokuapp.com/api/login',
            data: instructorLogin
        }).then(response => {
            const responseData = JSON.stringify(response.data);
            localStorage.setItem('isLoggedIn', true);
            localStorage.setItem('response', responseData);
            localStorage.setItem('name', response.data.data.first_name);
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('id', response.data.data.id);
            this.setState({
                isLoggedIn: true
            })

        }).catch(error => {
            console.log(error);
        });     
    }


    changeLoginButton = () => {

    }

    render() {
        if(this.state.isLoggedIn === true){
            return <Redirect to="/courses" />
        }

        return (
            <>
            <Header />
            <Loginview formSubmit={this.formSubmit} handleInput={this.handleInput} isLoggedIn={this.state.isLoggedIn}  />
            </>
            
        );
    }
}
            
export default Login;