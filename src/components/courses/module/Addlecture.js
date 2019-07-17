import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import Header from '../../Header';
import Addlectureview from './Addlectureview';
import axios from 'axios';

class Addlecture extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            videoUrl: '',
            quiz: '',
            html: '',

            isLectureAdded: false,
            isVideoAdded: false,
            isQuizAdded: false,
            isHtmlAdded: false,

            isAddQuizClicked: false,
            content: ''
        };
    }

    handleToggleButton = (e) => {
        this.setState({
            [e.target.name]: !JSON.parse(e.target.value)
        });
    }

    addNewLecture = () => {
        console.warn('aaa');
    }

    //user type input 
    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }


    addNewQuiz = () => {
        // const lecture = this.props.match.params.lectureId;
        this.setState({
            isAddQuizClicked: true
        });
    }

    ///CKEdito =========================
    
    onChange = (e) => {
      console.log("onChange fired with event info: ", e);
      let newContent = e.editor.getData();
      this.setState({
        content: newContent
      })
    console.log(newContent);
    }
    
    onBlur(e){
      console.log("onBlur event called with event info: ", e);
    }
    
    afterPaste(e){
      console.log("afterPaste event called with event info: ", e);
    }
    
    //=====================================


    handleSubmitHtml = () => {
        const token = localStorage.getItem('token');
        const lectureId = this.props.match.params.lectureId;

        const id = this.props.match.params.moduleId
    
        console.log(lectureId);
        axios({
            headers: { Authorization: `${token}` },
            method: 'Put',
            url: `https://infinite-plateau-65130.herokuapp.com/api/${id}/html`,
            data: {
                html: this.state.content
            }
        }).then(response => {
            console.log(response);
        }).catch(error => {
            console.log(error);
        });
    }

    handleSubmitLecture = (e) => {
        e.preventDefault();

        const token = localStorage.getItem('token');
        const lectureId = this.props.match.params.lectureId;

        const lectureData= {
            publish: '',
            pdf: '',
            title: 'chapter 12',
            url: this.state.videoUrl,
            quizId: this.state.quiz,
            htmlId: this.state.html
        }

        axios({
            headers: { Authorization: `${token}` },
            method: 'Put',
            url: `https://infinite-plateau-65130.herokuapp.com/api/lecture/${lectureId}`,
            data: { 
                lectureData
            }
        }).then(response => {
            console.log(response);

        }).catch(error => {
            console.log(error);
        });
    }

    render() {
        const lectureId = this.props.match.params.lectureId;
        console.log(lectureId);

        if(this.state.isAddQuizClicked === true){
            return <Redirect to={`/quiz/${lectureId}/quizblock`} />
        }
        return (
            <>
                <Header />
                    <div >
                        <Addlectureview 
                        lecture = {this.state.isLectureAdded}
                        video = {this.state.isVideoAdded}
                        quiz = {this.state.isQuizAdded}
                        html = {this.state.isHtmlAdded}


                        title = {this.state.title}

                        handleToggleButton ={this.handleToggleButton}  
                        handleInput={this.handleInput} 
                        handleSubmitLecture={this.handleSubmitLecture}  

                        addNewQuiz= {this.addNewQuiz}

                        content= {this.state.content}
                        onChange= {this.onChange}
                        onBlur = {this.onBlur}
                        afterPaste = {this.afterPaste}
                        handleSubmitHtml = {this.handleSubmitHtml}
                        />
                    </div>
            </>
        );
    }
}

export default Addlecture;