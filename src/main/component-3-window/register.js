
import React, { Component } from 'react';
//import axios from 'axios';

import CenteredTabs from './display/registerdisplay';
import './component3.css';

class Register extends Component {
    constructor(props) {
      super(props);
      console.log(this.props.tname);
      this.state = {
      };
    }
/*
    componentDidMount () {
        axios.get( 'http://localhost:3001/class' )
            .then( response => {
                this.setState({classes: response.data});
            } );
    }

    classSelectedHandler = (id) => {
        this.setState({selectedClassId: id});
        console.log(this.state.selectedClassId);
    }
*/
    render () {
        return (
            <div>
                <section>
                    <CenteredTabs 
                        tname={this.props.tname}
                        tuname={this.props.tuname}
                        temail={this.props.temail}
                        tqualification={this.props.tqualification}
                        tpass={this.props.tpass}/>
                </section>
            </div>
        );
    }
}

export default Register;