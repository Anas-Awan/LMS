import React from 'react';
// import { Link } from 'react-router-dom'; 
import { MDBInput, MDBBtn, Button, MDBCard, MDBCardBody, MDBContainer } from 'mdbreact';
import CKEditor from 'react-ckeditor-component';

const Addlectureview = (props) => {
    
    return (
        <>
            <MDBContainer>
                <MDBBtn gradient="blue" value={props.lecture} name="isLectureAdded" onClick ={props.handleToggleButton} > Add Lecture </MDBBtn>
                <MDBBtn gradient="purple" value={props.video} name="isVideoAdded" onClick ={props.handleToggleButton} > Add Video URL</MDBBtn>
                <MDBBtn gradient="blue" value={props.quiz} name="isQuizAdded" onClick ={props.handleToggleButton} > Add Quiz</MDBBtn>
                <MDBBtn gradient="blue" value={props.html} name="isHtmlAdded" onClick ={props.handleToggleButton} > Add Html</MDBBtn>
                <MDBCard>
                    <MDBCardBody>

                        <MDBInput label="Type Lecture Title" name={props.title} onChange={props.handleInput} />
                        {
                            props.lecture ? <div>
                                <h3> Add Lecture</h3>
                                <input type="file" name="file" id="" onClick={props.addNewLecture}/>
                            </div>
                             : null
                        }
                        {
                            props.video ? <div>
                            <h3> Add Video Url</h3>
                            <MDBInput label="Add Video Link" onChange={props.handleInput} />
                            </div>
                             : null
                        }
                        {
                            props.quiz ? <div>
                                <h3>Add Quiz Title</h3>
                                <MDBInput label="Type Quiz Title" onChange={props.handleInput} />
                                
                                    <Button className="btn btn-dark" onClick={props.addNewQuiz} >Add New Quiz</Button>
                                
                            </div> : null

                        }
                        {
                            <div>
                                {props.html ?
                                <>
                                <CKEditor
                                    activeClass="p10"
                                    content={props.content}
                                    events={{
                                        "blur": props.onBlur,
                                        "afterPaste": props.afterPaste,
                                        "change": props.onChange
                                    }} 
                                />
                                <Button className="btn btn-dark" onClick={props.handleSubmitHtml}>Submit HTML</Button>
                                </>
                                : null}
                            </div>
                        }
                    </MDBCardBody>

                </MDBCard>
                <Button className="btn btn-tertary" onClick={props.handleSubmitLecture}> Submit Lecture</Button> <Button className="btn btn-dark">Save As Draft</Button>
            </MDBContainer>
        </>
    );
}

export default Addlectureview;