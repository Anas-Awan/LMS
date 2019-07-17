import React, { Component } from 'react';
import { Link,Redirect } from 'react-router-dom';
import Header from '../../Header';


import axios from 'axios';

class Lecture extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lectures: [],
            lectureId:null
        };
    }

    componentWillMount() {
        const token = localStorage.getItem('token');
        const id = this.props.match.params.moduleId;

        axios({
            headers: { Authorization: `${token}` },
            method: 'Get',
            url: `https://infinite-plateau-65130.herokuapp.com/api/module/${id}/lecture`
        }).then(response => {
            console.log(response.data.data);
            const lectures = response.data.data;
            this.setState({
                lectures
            });
        }).catch(error => {
            console.log(error);
        });
    }

    handleAddLecture = () => {
        const token = localStorage.getItem('token');
        const moduleId = this.props.match.params.moduleId;

        console.log('asdasdasda');
        axios({
            headers: { Authorization: `${token}` },
            method: 'Post',
            url: `https://infinite-plateau-65130.herokuapp.com/api/lectures`,
            data: { id: moduleId }
        }).then(response => {
            this.setState({
                lectureId:response.data.data.id
            })
        }).catch(error => {
            console.log(error);
        });
    }


    render() {
        const courseId = this.props.match.params.courseId;
        const moduleId = this.props.match.params.moduleId;
        if(this.state.lectureId){
            return <Redirect to= {`/course/${courseId}/module/${moduleId}/addlecture/${this.state.lectureId}`} />
        }

        return (
            <>
                <Header />
                <table className="ui table">
                    <thead>
                        <th>
                            <td>Lectures</td>
                        </th>
                    </thead>
                    <tbody>
                        {this.state.lectures.map(lecture =>
                            <tr key={lecture.id}>
                                <td>{lecture.title}</td>
                                <Link to={`/course/${courseId}/module/${moduleId}/lecture/${lecture.id}/content`}>
                                    <td> view </td>
                                </Link>
                            </tr>
                        )}
                    </tbody>
                    <tfoot>
                        <th>
                            <button className="ui right floated small primary button" onClick={this.handleAddLecture} >
                                Add New Lecture
                            </button>
                        </th>
                    </tfoot>
                </table>
            </>
        );
    }
}

export default Lecture;