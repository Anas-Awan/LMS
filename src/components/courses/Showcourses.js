import React from 'react';
import { Link } from 'react-router-dom';

const Showcourses = (props) => {
    
    return (
        <div>
            <h1 className="ui heading"> Courses </h1>
            <table className="ui compact celled table">
                <thead>
                    <tr>
                        <th>Course Id</th>
                        <th>Course Code</th>
                        <th>Course Name</th>
                    </tr>
                </thead>
                <tbody>
                    {props.courses.map(course =>
                        <tr key={course.id}>
                            <td> {course.id}</td>
                            <td> {course.code}</td>
                            <Link className="item" to={`/course/${course.id}/module`}>
                                <td> {course.name}</td>
                            </Link>
                        </tr>
                    )}
                </tbody>
                <tfoot>
                    <tr>
                        <th colSpan="3">
                            <Link to="/addcourses">
                                <button className="ui right floated small primary labeled icon button" >
                                    <i className="book icon"></i> Add New Course
                        </button>
                            </Link>
                        </th>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
}

export default Showcourses;

