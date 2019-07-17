import React,{Component} from 'react';

import Header from '../../Header';
import CkEditor from './Ckeditor';
import axios from 'axios';

class Content extends Component {
    constructor(props){
        super(props);
        this.state = {
            contents: [],
            html: ''
        };
    }

    componentWillMount() {
        const token = localStorage.getItem('token');
        const lectureId = this.props.match.params.lectureId;

        axios({
            headers: { Authorization: `${token}`},
            method: 'Get',
            url: `https://infinite-plateau-65130.herokuapp.com/api/lecture/${lectureId}/content`
        })
        .then(response => {
            const contents= response.data.data;
            console.log(contents);
            this.setState({
                contents,
                html: response.data.data
            },()=>{
                console.log(this.state.html);
            });
        })
        .catch(error => 
            console.log( error)
        );
    }

    render () {
        return (
            <>
                <Header /> 
                <div>
                    {this.state.contents.map(content => 
                        <ul key={content.id}>
                            <li>{content.id}</li>
                            <li>{content.title}</li>
                            <li>{content.video_url}</li>
                        </ul>
                        
                    )}
                    
                </div>
                
                    <CkEditor data ={this.state.contents} />
                
            </>
        );
    }
}

export default Content;