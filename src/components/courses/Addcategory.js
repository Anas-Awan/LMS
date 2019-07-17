import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Showaddcategory from './Showaddcategory';
import Header from '../Header';
import axios from 'axios';

class Addcategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newCategory: '',
            isCategoryAdded: false
        }
    }

    handleCategory = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onCategorySubmit = (e) => {
        e.preventDefault();

        const token = localStorage.getItem('token'); 
        const id = localStorage.getItem('id');

        axios({
            headers: 
                {
                    Authorization: `${token}`
                },
            method: 'Post',
            url: `https://infinite-plateau-65130.herokuapp.com/api/categories`,
            data: {
                name: this.state.newCategory,
                id: id
            }
        }).then(response => {
            console.log(response.date);
            this.setState({
                isCategoryAdded: true
            });
        }).catch(error => {
            console.log(error);
        });
    }

    render() {
        if(this.state.isCategoryAdded === true){
           return <Redirect to="/addcourses" />
        }
        return (
            <div>
                <Header/>
                <h1>Addcategory</h1>
                <Showaddcategory 
                handleCategory={this.handleCategory}
                onCategorySubmit={this.onCategorySubmit}
                />
            </div>
        );
    }
}

export default Addcategory;