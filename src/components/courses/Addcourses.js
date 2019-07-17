import React,{Component} from 'react';
import {Redirect} from 'react-router-dom';
import Header from '../Header';
import Showaddcourses from './Showaddcourses';

import axios from 'axios';

class Addcourses extends Component  {
    constructor(props){
        super(props);
        this.state = {
            validation_period: [],
            status: [],
            category: [],

            name: '',
            code: '',
            expiration_date: '',
            percentage: '',
            course_duration: '',
            description: '',
            isUserLogged: false

        };
    }

    componentDidMount() {
        this.getValidationPeriod();
        this.getStatus();
        this.getCategories();
    }

    getValidationPeriod = () => {
        const token = localStorage.getItem('token');
            axios({
                headers: { Authorization: `${token}` },
                method: 'get',
                url: 'https://infinite-plateau-65130.herokuapp.com/api/validationPeriod'
            }).then(response => 
                {
                    const validation_period = response.data;       
                    this.setState({
                        validation_period
                    });
                }  
            ).catch(error => 
                console.log(error)
        );
    }
    
    getStatus = () => {
        const token = localStorage.getItem('token');
            axios({
                headers: { Authorization: `${token}` },
                method: 'get',
                url: 'https://infinite-plateau-65130.herokuapp.com/api/status'
            }).then(response => 
                {
                    const status = response.data;  
                    this.setState({
                        status
                    });
                }  
            ).catch(error => 
                console.log(error)
        );
    }
    
    getCategories = () => {
        const token = localStorage.getItem('token');
            axios({
                headers: { Authorization: `${token}` },
                method: 'get',
                url: 'https://infinite-plateau-65130.herokuapp.com/api/categories'
            }).then(response => {
                    const category = response.data; 
                    this.setState({
                        category
                    });
                }  
            ).catch(error => 
                console.log(error)
        );
    }
    
 
    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    AddCourse = (e) => {
        e.preventDefault();
        
        const newCourse = {
            name: this.state.name,
            code: this.state.code,
            expiration_date: this.state.expiration_date,
            percentage: this.state.percentage,
            course_duration: this.state.course_duration,
            description: this.state.description,
            validation_period: this.state.validation_period,
            status: this.state.status,
            category: this.state.category

        }

        console.log(newCourse)

        axios({
            headers: {Authorization: localStorage.getItem('token')},
            method: 'Post',
            url: 'https://infinite-plateau-65130.herokuapp.com/api/courses',
            data: newCourse
        }).then(response => {
            console.log(response);
             this.setState({
                isUserLogged: true
            });
        }).catch(error => console.log(error));
    }

    render() {
        if( this.state.isUserLogged === true){
            return <Redirect to="/courses" />
        }
        return (
            <div>
                <Header />
                <Showaddcourses
                validation_period={this.state.validation_period}
                status={this.state.status} category={this.state.category}
                handleInput={this.handleInput}
                AddCourse={this.AddCourse} 
                handleOptionValidation={this.handleOptionValidation}
                   />
            </div>
        );
    }
}

export default Addcourses;