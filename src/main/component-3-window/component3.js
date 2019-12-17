import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './component3.css';
import CenteredTabs from './login';
import Home from './home';
import Register from './register';
import TeacherClass from './teacherclasses';
import StudentClass from './teacherclasses';
import NewClass from './newclass';
import TeacherProfile from './teacherprofile';
import Course from './course';
import { withRouter } from 'react-router-dom';

class Component3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tid: null,
            sid: null,
            pass: null,
            tname: null,
            tuname: null,
            temail: null,
            tqualification: null,
            tpass: null,
            title: null,
            lectures: null,
            credits: null,
            date: null,
            time: null
            //auth: this.props.auth,
            //authId: this.props.authId
        };
        console.log(this.props);
        //console.log(this.state.authId);
    }
    searchPersonHandler(tid, sid, pass){

    }
    render () {
        console.log(this.props);
        return (
            <Switch>
                {/*
                    this.props.auth ==="s" 
                ? <Route exact path="/teacherclasses" 
                    render={props => 
                        <TeacherClass 
                            authId={this.state.authId} 
                        />} 
                    />
                
                : <Route exact path="/studentclasses" 
                    render={props => 
                        <StudentClass 
                            authId={this.state.authId} 
                        />} 
                    />
                    */}
                <Route exact path="/teacherclasses" 
                    render={props => 
                        <TeacherClass 
                            authId={this.props.authId} 
                        />
                    } 
                />
                <Route exact path="/studentclasses" 
                    render={props => 
                        <StudentClass 
                            authId={this.props.authId} 
                            title ={this.state.title}
                            lectures={this.state.lectures}
                            credits={this.state.credits}
                            date={this.state.date}
                            time={this.state.time}
                        />
                    }
                />
                <Route exact path="/newclass" 
                    render={props => 
                        <NewClass 
                            authId={this.props} 
                        />
                    } 
                />
                <Route exact path="/profile" 
                    render={props => 
                        <TeacherProfile 
                            authId={this.props.authId} 
                        />
                    } 
                />
                <Route path="/login"
                        exact
                        component={CenteredTabs} 
                        tid={this.state.tid}
                        sid={this.state.sid}
                        pass={this.state.pass}
                        //click={() => this.searchPersonHandler( tid, sid, pass )} 
                        />}
                <Route path="/" exact component={Home} />
                <Route path="/logedin" exact component={Home} />
                <Route path="/logout" exact component={Home} />
                <Route path="/register"
                    exact 
                    component={Register} 
                    tname={this.state.tname}
                    tuname={this.state.tuname}
                    temail={this.state.temail}
                    tqualification={this.state.tqualification}
                    tpass={this.state.tpass}
                />
                <Route path="/profile/:id" component={Course} />
                <Route render={() => <h1>Not found</h1>}/>
                {/* <Redirect from="/" to="/logout" />
                <Route path="/" component={Posts} /> */}
            </Switch>
        )
    }
}

export default withRouter(Component3);