import React, { Component } from 'react';
import axios from 'axios';

import CustomizedTable from './display/homedisplay';
import './component3.css';

class Home extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
        classes: [],
        selectedClassId: null
        }
        console.log(this.props);
    }

    componentDidMount () {
        axios.get( 'http://localhost:3001/class' )
            .then( response => {
                this.setState({classes: response.data});
                console.log(response.data);
            } );
    }
/*
    classSelectedHandler = (id) => {
        this.setState({selectedClassId: id});
        console.log(this.state.selectedClassId);
    }
*/
    render () {
        console.log(this.props);
        return (
            <div>
                <section>
                    {/*newClass*/}
                    <CustomizedTable class={this.state.classes}/>
                </section>
            </div>
        );
    }
}

export default Home;