
import React, { Component } from 'react';
import axios from 'axios';

import './component3.css';
import CourseDisplay from './display/coursedisplay';

class Course extends Component {
    constructor(props) {
      super(props);
      this.state = {
          id : this.props.id,
          title: '',
          teacher: null,
          lectres: null,
          credits: null,
          timings: null,
          students: null,
          url: 'http://localhost:3001/class/' + this.props.match.params.id,
      };
      console.log(this.props);
      console.log(this.state.url);
    }

    componentDidMount () {
        console.log(this.props);
        axios.get( this.state.url )
            .then( response => {
                this.setState({url: 'http://localhost:3001/teacher/'.concat(response.data[0].teacher) });
                console.log(this.state.url);
                axios.get( this.state.url )
                .then( response => {
                    console.log(response.data);
                } );
                console.log(response.data[0]._id);
                this.setState({id : response.data[0]._id})
                this.setState({title: response.data[0].title});
                this.setState({lectres: response.data[0].lectres});
                this.setState({credits: response.data[0].credits});
                this.setState({timings: response.data[0].timings});
                this.setState({teacher: response.data[0].teacher});
                this.setState({students: response.data[0].students.length});
            } );
    }
/*
    classSelectedHandler = (id) => {
        this.setState({selectedClassId: id});
        console.log(this.state.selectedClassId);
    }
*/
    clickDeleteHandler = (id) => {
        console.log('you clicked delete button. '+id);
        let url = 'http://localhost:3001/class/'+id;
  /*       axios({
            method: 'delete',
            url: url
          }); */
        console.log(url);
        axios.delete(url)
    }

    render () {
        let post = 
            <div>
                <section>
                    <br />
                    <h5>Loading data...</h5>
                </section>
            </div>
        if(this.state.title){
            post = 
            <div>
                <section>
                    {/* {console.log(this.state.title)} */}
                    <CourseDisplay
                        title={this.state.title}
                        teacher={this.state.teacher}
                        lectres={this.state.lectres}
                        credits={this.state.credits}
                        timings={this.state.timings}
                        students={this.state.students}
                        delete = {this.clickDeleteHandler.bind(this, this.props.match.params.id)}
                    />
                </section>
            </div>
        }
        return post;
    }
}

export default Course;