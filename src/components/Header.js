import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            userId: null,
        };
    }

    componentDidMount() {
        // console.log(this.props);
        this.setState({
            isLoggedIn: localStorage.getItem('isLoggedIn'),
            userId: localStorage.getItem('id') 
        // },()=> {
        //     console.log(this.state);
        // });
    });
    }

    handleLogoutButton = () => {
        localStorage.clear();
        this.setState({
            isLoggedIn:false,
            userId: null
        });
    }

    render() {
      
        if (this.state.isLoggedIn) {
            return (
                <div className="ui secondary pointing menu">
                    <div className="left menu">
                        <Link className="item" to="/courses">
                            Courses
                        </Link>
                    </div>
                    
                    <h4 className="right menu item">
                      Instructor Name:  {localStorage.getItem('name')}
                    </h4>
                    
                    <div className="right menu">
                        <Link className="item" to="/login">
                            <button className="ui green button" onClick={this.handleLogoutButton} >
                                Logout
                            </button>
                        </Link>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="ui secondary pointing menu">
                    <Link className="item" to="/">
                        LMS Academy
                    </Link>
                    <div className="right menu">
                        <Link to="/signup">
                            <button className="ui button secondary" >
                                Sign Up
                            </button>

                        </Link>

                        <Link to="/login">
                            <button className="ui button primary" >
                                Login
                            </button>
                        </Link>
                    </div>
                </div>
            );
        }
    }

}

export default Header;