import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Header';
import axios from 'axios';

class Module extends Component {
    constructor(props) {
        super(props);
        this.state = {
            courseModule: []
        };
    }

    componentWillMount() {
        const token = localStorage.getItem('token');
        const id = this.props.match.params.courseId;

        axios({
            headers: {
                Authorization: `${token}`
            },
            method: 'Get',
            url: `https://infinite-plateau-65130.herokuapp.com/api/courses/${id}/modules`
        }).then(response => {
            const courseModule = response.data.data;
            this.setState({
                courseModule 
            });
        }).catch(error => {
            console.log(error);
        });
    }

    render() {
        const courseId = this.props.match.params.courseId;
                
        return (
            <>
                <Header />
                <table className="ui table">
                    <thead>
                        <th>
                            <td>Modules</td>
                        </th>
                    </thead>
                    <tbody>
                    { this.state.courseModule.map(m=> 
                        <tr key={m.id}>
                            <td>
                                {m.name}
                            </td>
                            <Link to={`/course/${courseId}/module/${m.id}/lecture`}>
                                <td>
                                    view
                                </td> 
                            </Link>     
                        </tr>
                         )}
                    </tbody>
                    <tfoot>
                        <th>
                            <Link to="/addmodule">
                                <button className="ui right floated small primary button">
                                    Add New Module
                                </button>
                            </Link>
                        </th>
                    </tfoot>

                </table>
            </>
        );
    }
}

export default Module;