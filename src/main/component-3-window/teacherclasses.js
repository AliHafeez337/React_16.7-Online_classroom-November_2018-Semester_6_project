import React, { Component } from 'react';
import axios from 'axios';

import CenteredTabs from './display/homedisplay';
import './component3.css';

class Login extends Component {
    constructor(props) {
      super(props);
      console.log(this.props.authId);
      this.state = {
          classes:[],
          teacherclasses: [],
          loadedPost: null
      };
    }

    componentDidMount () {
        console.log(this.props)
        axios.get( 'http://localhost:3001/class' )
            .then( response => {
                if(response.data.length < 1){
                    console.log("Getting null from server");
                }
                else{
                    this.setState({classes: response.data});
                    console.log(this.state.classes[0].teacher);
                    this.state.classes.map(row => {
                        if(row.teacher === this.props.authId){
                            this.state.teacherclasses.push(row);
                        }
                        return(
                            this.setState( { loadedPost: response.data } ),
                            console.log(this.state.loaded)
                        );
                    });
                    console.log(this.state.teacherclasses);  
                }
        });
    }
/*
    classSelectedHandler = (id) => {
        this.setState({selectedClassId: id});
        console.log(this.state.selectedClassId);
    }
    {!this.state.isloading ? 
                    <CenteredTabs class={this.state.teacherclasses}/>
                    :<h5> Please, wait, page is loading</h5>
                    }
*/
    render () {
        let post = 
            <div>
                <section>
                    <br />
                    <h5>Loading data...</h5>
                </section>
            </div>
        if(this.state.loadedPost){
            post = 
            <div>
                <section>
                    <CenteredTabs class={this.state.teacherclasses}/>
                </section>
            </div>
        }
        return post;
    }
}

export default Login;