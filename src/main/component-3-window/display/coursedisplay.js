import React, {Component} from 'react';

import '../component3.css';
const axios = require('axios');

class CourseDisplay extends Component {
    constructor(props) {
      super(props);
      this.state = {
          title: this.props.title,
          credits: this.props.credits,
          timing: this.props.timings
          }
    }
    changehandler(event, fieldName) {

        if(fieldName === 1){
          this.setState({ title : event.target.value });
          console.log(this.state.title);
        }
        else if(fieldName === 2){
          this.setState({ credits : event.target.value });
          console.log(this.state.credits);
        }
        else if(fieldName === 3){
          this.setState({ timing : event.target.value });
          console.log(this.state.timing);
        }
        else{
          console.log('there is some errror.')
        }
    }
    updatehandler = ( event ) => {
        event.preventDefault();
        let url= 'https://localhost:3001/class/'+this.props.id+'/update';
        axios.put(url, {
            title: this.state.title,
            credits: this.state.credits,
            timings: this.state.timing
        })
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });
    }    

    render () {
        console.log(this.props);
        let post = 
            <div>
                <section>
                    <br />
                    <h5>Loading data...</h5>
                </section>
            </div>
        if(this.state.title){
            post = 
            <form onSubmit={this.updatehandler}>
                <div className="container-Fluid">
                    <br />
                    <div className="row">
                        <div className="col-md-2 col-sm-1 col-xs-0">
                        </div>
                        <div className="col-md-4 col-sm-5 col-xs-6">
                        <strong>Name</strong>
                        </div>
                        <div className="col-md-4 col-sm-5 col-xs-6">
                        <h5><input 
                            id="1"
                            type="text" 
                            name="Title" 
                            value={this.state.title}
                            onChange={(e) => this.changehandler(e, 1)}>
                        </input></h5>
                        </div>
                        <div className="col-md-2 col-sm-1 col-xs-0">
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2 col-sm-1 col-xs-0">
                        </div>
                        <div className="col-md-4 col-sm-5 col-xs-6">
                        <strong>Teacher</strong>
                        </div>
                        <div className="col-md-4 col-sm-5 col-xs-6">
                        <h5>{this.props.teacher}</h5>
                        </div>
                        <div className="col-md-2 col-sm-1 col-xs-0">
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2 col-sm-1 col-xs-0">
                        </div>
                        <div className="col-md-4 col-sm-5 col-xs-6">
                        <strong>Lectures</strong>
                        </div>
                        <div className="col-md-4 col-sm-5 col-xs-6">
                        <h5>{this.props.lectures}</h5>
                        </div>
                        <div className="col-md-2 col-sm-1 col-xs-0">
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2 col-sm-1 col-xs-0">
                        </div>
                        <div className="col-md-4 col-sm-5 col-xs-6">
                        <strong>Credits</strong>
                        </div>
                        <div className="col-md-4 col-sm-5 col-xs-6">
                        <h5><input 
                            type="text" 
                            name="Credits" 
                            value={this.state.credits}
                            onChange={(e) => this.changehandler(e, 2)}>
                        </input></h5>
                        </div>
                        <div className="col-md-2 col-sm-1 col-xs-0">
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2 col-sm-1 col-xs-0">
                        </div>
                        <div className="col-md-4 col-sm-5 col-xs-6">
                        <strong>Timings</strong>
                        </div>
                        <div className="col-md-4 col-sm-5 col-xs-6">
                        <h5><input 
                            type="text" 
                            name="Timings" 
                            value={this.state.timings}
                            onChange={(e) => this.changehandler(e, 3)}>
                        </input></h5>
                        </div>
                        <div className="col-md-2 col-sm-1 col-xs-0">
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2 col-sm-1 col-xs-0">
                        </div>
                        <div className="col-md-4 col-sm-5 col-xs-6">
                        <strong>Number of students</strong>
                        </div>
                        <div className="col-md-4 col-sm-5 col-xs-6">
                        <h5>{this.props.students}</h5>
                        </div>
                        <div className="col-md-2 col-sm-1 col-xs-0">
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-sm-6 col-xs-6">
                            <button 
                                className='btn btn-danger' 
                                onClick={this.props.delete}
                                align="center">
                            Delete
                            </button>
                        </div>
                        <div className="col-md-6 col-sm-6 col-xs-6">
                            <button 
                                type="submit" 
                                name="submit"
                                className="btn btn-primary">
                                Update
                            </button>
                        </div>
                    </div>
                </div>
                </form>
            }
        return post;
    }
}
    
export default CourseDisplay;