import React, { Component } from 'react';
//import axios from 'axios';

import CenteredTabs from './display/logindisplay';
import './component3.css';

class Login extends Component {
  constructor(props) {
    super(props);
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
                    {/*newClass*/}
                    <CenteredTabs 
                        tid={this.props.tid}
                        sid={this.props.sid}
                        pass={this.props.pass}/>
                </section>
            </div>
        );
    }
}

export default Login;