import React, { Component } from 'react';
import axios from 'axios';

import './component3.css';
//import Profile from './display/profiledisplay';

class TeacherProfile extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
        profile : null,
        url: 'http://localhost:3001/teacher/'+this.props.authId,
        }
        console.log(this.state.url);
    }

    componentDidMount () {
        axios.get( 'http://localhost:3000/teacher/'+this.props.authId )
            .then( response => {
                console.log('profile working');
                this.setState({profile: response.data});
                console.log(response.data);
            } );
    }
    render () {
        return (
            <div>
                <section>
                    {console.log("get request gets this: "+this.state.profile)}
                    <h3>get request gets this: {this.state.profile}</h3>
                    {/* <Profile profile={this.state.profile} /> */}
                </section>
            </div>
        );
    }
}

export default TeacherProfile;