import React from 'react';

const Loginview = (props) => {
    return(
        <div>
            <h1 className="ui heading"> Login </h1>
            <form className="ui form" onSubmit={props.formSubmit}>
                <div className="field">
                    <label>Email</label>
                    <input type="email" name="email" placeholder="Type your email" onChange={props.handleInput} />
                 </div>
                
                <div className="field">
                    <label>Password</label>
                    <input type="password" name="password" placeholder="Type your password" onChange={props.handleInput} />
                </div>
                
                <button className="ui button" type="submit" >Submit</button>
            </form>
        </div>
        
    );
}

export default Loginview;