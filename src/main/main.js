import React, { Component } from 'react';
import './main.css';
import Component1 from './component-1-header/component1'
import Component2 from './component-2-sidebar/component2'
import Component3 from './component-3-window/component3'
import Component4 from './component-4-footer/component4'
import { withRouter } from 'react-router-dom';

class Main extends Component {
    state = {
        auth : this.props.location.auth,
        authId: this.props.location.authId
    }
    
    componentDidMount () {
        console.log(this.props);
        /* if(this.props.location.auth !== '' && this.props.location.authId !== ''){
            this.setState({auth : this.props.location.auth});
            this.setState({authId : this.props.location.authId});  
        } */
    }

    render () {
        console.log(this.props);  
        let home = this.props.location
        console.log(home.auth);
        console.log(this.props.location.auth);
        console.log(this.state.auth);
        return (
            <div className="Main">
                <Component1  auth={home.auth}/>
                <div className="container-fluid relative">
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-4 d-md-block sidebar">
                            <br />
                            <Component2 auth={home.auth}/>
                            <br />
                        </div>
                        <div className="col-lg-9 col-sm-8 col-md-9 d-md-block cyan">        
                            <Component3 authId={home.authId}
                                auth={this.state.auth}/>
                            <br />
                        </div>            
                    </div>       
                </div>
                <Component4 />
            </div>
        );
    }
}

export default withRouter(Main);