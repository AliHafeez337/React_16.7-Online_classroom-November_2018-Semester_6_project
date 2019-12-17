import React, { Component } from 'react';
//import axios from 'axios';

import NewC from './display/newclassdisplay';
import './component3.css';

class NewClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    console.log(this.props);
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
                    <NewC 
                        title={this.props.title}
                        lectres={this.props.lectres}
                        credits={this.props.credits}
                        date={this.props.date}
                        time={this.props.time}
                        />
                </section>
            </div>
        );
    }
}

export default NewClass;