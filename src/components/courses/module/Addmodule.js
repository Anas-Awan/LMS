import React,{Component} from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../../Header';

import axios from 'axios';

class Addmodule extends Component {
    constructor(props){
        super(props);
        this.state = {
            moduleName: '',
            id: [],
            courses: [],
            isModuleAdded: false,
            course:null
        }
    }

    componentWillMount(){
        const token = localStorage.getItem('token');

        axios({
            headers: { Authorization: `${token}` },
            method: 'Get',
            url: 'https://infinite-plateau-65130.herokuapp.com/api/courses'
        }).then(response => {
            const courses = response.data.data;
            this.setState({
                courses
            })
        }).catch(error => {
            console.log(error);
        });
    }

    handleNewModule = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    addNewModule = (e) => {
        e.preventDefault();

        const token = localStorage.getItem('token');
        
        axios({
            headers: { Authorization: `${token}`},
            method: 'Post',
            url: 'https://infinite-plateau-65130.herokuapp.com/api/modules',
            data: {
                name: this.state.moduleName,
                id: this.state.course
            }
        }).then(response => {
            console.log(response);
                this.setState({
                    isModuleAdded: true
                });
        }).catch(error => {
            console.log(error);
        });
    }

    render(){
        const id = this.state.course;
        if(this.state.isModuleAdded === true){
            return <Redirect to={`/${id}/module`}/>;
        }else{
            return(
                <>
                    <Header/>
                    <h3>Add New Module</h3>
                    <form className="ui form">
                        <input type="text" name="moduleName" placeholder="Type new module" onChange={this.handleNewModule} />
                        <select name='course' value={this.state.course} onChange={ this.handleNewModule} >
                            <option> Choose Course </option>
                            {this.state.courses && this.state.courses.map((course) => < option key={course.id} value={course.id} > {course.name}</option>)}
                        </select>
                        <button className="ui button primary" onClick={this.addNewModule}>
                        <i className="book icon"></i> Add New Module
                        </button>
                    </form>
                </>
            ); 
        }
    }
}

export default Addmodule;