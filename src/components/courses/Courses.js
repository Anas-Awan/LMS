import React,{Component} from 'react';
import axios from 'axios';

import Header from '../Header';
import Showcourses from './Showcourses';

class Courses extends Component {
    constructor(props){
        super(props);
        this.state = {
            courses: []
        }
    }

    componentDidMount() {
        const token = localStorage.getItem('token');
        axios({
            headers: { Authorization: `${token}` }, 
            method: 'Get',
            url: 'https://infinite-plateau-65130.herokuapp.com/api/courses'
        }).then(response => {
            const courses = response.data.data;
            this.setState({ courses });
        }).catch(error => {
            console.log(error);
        });
    }

    render() {
        return (
            <div>
                <>
                <Header />
                <Showcourses courses={this.state.courses} />
                </>
            </div>
        );
    }
}

export default Courses;