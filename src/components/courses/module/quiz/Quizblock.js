import React, { Component } from 'react';
import { MDBInput, Button, MDBCard, MDBCardBody, MDBContainer } from 'mdbreact';
// import { Link } from 'react-router-dom';
import Select from 'react-select';

import Header from '../../../Header';


class Quizblock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: {},
            noOfQuestions: [],

            // multipleChoice: false,
            // text: false,
            // code: false,

            selectedOption: null,
            showMcq: false,
            showText: null,
            showCode: false
        }
    }

    options = [
        { value:'mcq', label: 'Multiple Choice' },
        { value:'text', label: 'Text' },
        { value:'code', label: 'Code' }
    ]


    handleChange = (e) => {
        let item = e.value;
        console.log(item)
        if(item === 'mcq'){
            this.setState({
                showMcq: !JSON.parse(this.state.showMcq)
            })
        }
        if(item === 'text'){
            this.setState({
                showText: !JSON.parse(this.state.showtext)
            })
        }else {
            this.setState({
                showCode: !JSON.parse(this.state.showCode)
            })
        }
    }; 

    //adding multiple question by clicking add button
    handleAddQuestion = (e) => {
        var questions = this.state.noOfQuestions;
        questions.push({})
        this.setState({
            noOfQuestions: questions
        })
    }


    // handling question Input fields for quesiton title
    handleQuestionInput = (e) => {
        let key = e.target.name;
        let value = e.target.value;
        let prevValue = this.state.questions[key];
        let currValue = this.state.questions;
        this.setState({
            questions: {
                ...currValue,
                [key]: {
                    ...prevValue,
                    title: value 
                }
            }
        }, () => {
            console.log(this.state.questions)
        })
    }

    // handling Answer Input fields for answer
    handleAnswerInput = (e) => {
        let key = e.target.name;
        let value = e.target.value;
        let prevValue = this.state.questions[key]
        let currValue = this.state.questions
        this.setState({
            questions: {
                ...currValue,
            [key]: {
                ...prevValue,
                 answer: value 
                }
            }
        }, () => {
            console.log(this.state)
        })

    }

    render() {
        // const lectureId = this.props.match.params.lectureId;
        let noOfQuestions = this.state.noOfQuestions

        return (
            <>
                <Header />
                <MDBContainer>
                    <form>
                        <MDBCard>
                            <MDBCardBody>
                                <div>
                                    <h3>Quiz Block</h3>
                                    <Button className="btn btn-dark" onClick={this.handleAddQuestion}> Add Question</Button>
                                </div>
                                {
                                    noOfQuestions && noOfQuestions.map((val, idx) => {
                                        return (
                                            <div key={idx}>
                                                <MDBInput label={`Question #${idx + 1}`} name={`questions${idx + 1}`} onChange={(e) => this.handleQuestionInput(e)} />
                                                <h5>Question Type</h5>
                                                <Select 
                                                    options={this.options}
                                                    value={this.options.value}
                                                    onChange ={(e)=>this.handleChange(e)} 
                                                />
                                                {   this.state.showMcq ?
                                                    <div>
                                                        <h3>Multiple Choice</h3>
                                                        <Button onClick={this.handleAddQuestion} value={this.state.handleMcqButton} name="handleMcqButton">Add Answer</Button>
                                                        { <MDBInput label={`Choice #${idx}`} name={`questions${idx + 1}`} onChange={(e) => this.handleAnswerInput(e)}  /> }
                                                        <Button>Submit Mcqs</Button>
                                                    </div>
                                                    : null
                                                }
                                                { this.state.showText ?
                                                    <div>
                                                        <h3>Text Type Answer</h3>
                                                        <MDBInput label={`Answer #${idx + 1}`} name={`questions${idx + 1}`} onChange={(e) => this.handleAnswerInput(e)} />
                                                        <Button>Submit question</Button>
                                                        <Button className="btn btn-dark" onClick={this.handleAddQuestion}>Add question</Button>
                                                    </div>
                                                    : null
                                                }
                                                { this.state.showCode ?
                                                    <div>
                                                        <h3>Code</h3>
                                                        <MDBInput label={`Answer #${idx + 1}`} name={`questions${idx + 1}`} onChange={(e) => this.handleAnswerInput(e)} />
                                                        <Button>Submit question</Button>
                                                        <Button>Add question</Button>
                                                    </div>
                                                    : null
                                                }
                                            </div>
                                        )
                                    })
                                }

                            </MDBCardBody>

                        </MDBCard>
                        <div>
                            <Button className="">Upload Quiz</Button>
                            {/* <Link>
                                <Button className="">Back to lecture</Button>
                            </Link> */}
                        </div>
                    </form>
                </MDBContainer>
            </>
        );
    }
}

export default Quizblock;