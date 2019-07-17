import React,{Component} from 'react';
import { BrowserRouter, Route,Switch } from 'react-router-dom';

import Header from './Header';
import Login from './auth/Login';
import Signup from './auth/Signup';
import Courses from './courses/Courses';
import Addcourses from './courses/Addcourses';
import Addcategory from './courses/Addcategory';
import Module from './courses/module/Module';    
import Addmodule from './courses/module/Addmodule';
import Lecture from './courses/module/Lecture';
import Addlecture from './courses/module/Addlecture';
import Content from './courses/module/Content';
import Quizblock from './courses/module/quiz/Quizblock';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Header}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/signup" component={Signup}/>
                    <Route path="/courses" component={Courses}/>
                    <Route path="/addcourses" component={Addcourses}/>
                    <Route path="/addcategory" component={Addcategory}/>
                    
                    <Route path="/course/:courseId/module/:moduleId/lecture/:lectureId/content" component={Content}/> 
                    <Route path="/course/:courseId/module/:moduleId/addlecture/:lectureId" component={Addlecture}/>
                    <Route path="/course/:courseId/module/:moduleId/lecture" component={Lecture} /> 
                    <Route path="/course/:courseId/module" component={Module}/>

                    <Route path="/quiz/:lectureId/quizblock" component={Quizblock} />
                    
                    <Route path="/addmodule" component={Addmodule}/>
                    
                    

                    
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;