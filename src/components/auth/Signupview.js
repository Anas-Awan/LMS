import React from 'react';

const Signupview = (props) => {
    return (
        <div>
            <h1 className="ui heading"> Sign Up </h1>
            <form className="ui form" onSubmit={props.formSubmit}>
                <div className="field">
                    <label>Name</label>
                    <input type="text" name="name" placeholder="Your" onChange={props.handleInput} />
                </div>
                <div className="field">
                    <label>Email</label>
                    <input type="email" name="email" placeholder="Your email" onChange={props.handleInput} />
                </div>
                <div className="field">
                    <label>Password</label>
                    <input type="password" name="password" placeholder="Your password" onChange={props.handleInput} />
                </div>
                <button className="ui button" type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Signupview;