import React from 'react';
import { Link } from 'react-router-dom';

const Showaddcourses = (props) => {
    return (
        <div>
            <form className="ui form" onSubmit={props.AddCourse}>
                <h4 className="ui dividing header">Add New Course</h4>
                <input type="text" name="name" placeholder="Course name" onChange={props.handleInput} />
                <input type="text" name="code" placeholder="Course code" onChange={props.handleInput} />

                <input type="text" name="expiration_date" placeholder="Expiration reminder in days" onChange={props.handleInput} />
                <input type="text" name="percentage" placeholder="Passing percentage" onChange={props.handleInput} />


                <select className="ui fluid dropdown" name='validation_period' onChange={(value) => props.handleInput(value)}>
                    <option>Choose validation period</option>
                    {props.validation_period.data && props.validation_period.data.map((validateData) => (
                        <option key={validateData.id} value={validateData.id}> {validateData.name} </option>
                    ))}

                </select>


                <input type="text" name="course_duration" placeholder="Course expected duration" onChange={props.handleInput} />
                <input type="text" name="description" onChange={props.handleInput} />

                <select className="ui fluid dropdown" name='status' onChange={(value) => props.handleInput(value)}>
                    <option value="">Choose status</option>
                    {props.status.data && props.status.data.map(status => (
                        <option key={status.id} value={status.id}> {status.name} </option>
                    ))}
                </select>

                <select className="ui fluid dropdown" name='category' onChange={(value) => props.handleInput(value)}>
                    <option value="">Choose category</option>
                    {props.category.data && props.category.data.map(category => (
                        <option key={category.id} value={category.id}> {category.name} </option>
                    ))}
                </select>

                <Link to="/Addcategory">
                    <button className="ui left floated small primary button" >
                        Add Category
                    </button>
                </Link>

                <button className="ui right floated small primary labeled icon button" >
                    <i className="book icon"></i> Add Course
                </button>
            </form>
        </div>
    );
};

export default Showaddcourses;