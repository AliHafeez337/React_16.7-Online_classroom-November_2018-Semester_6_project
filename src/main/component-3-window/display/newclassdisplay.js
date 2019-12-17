
import React, { Component } from 'react';

//import { withRouter } from 'react-router-dom';
import '../component3.css';
//const axios = require('axios');

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: ''
    }
    newclasshandler = ( event ) => {
      event.preventDefault();
      
    }
  
    render () {
      console.log(this.props);
        return (
          <form onSubmit={this.newclasshandler}>
            <div>
                <br />
                <h3>New class credentials</h3>
                <hr />
                <h6>Name of Subject</h6>
                <input type="text" 
                      className="form-control" 
                      id="tuser" 
                      name="Name" 
                      value={this.props.tname}>
                </input>
                <br />
                <h6>Credits</h6>
                <input type="text" className="form-control" id="tuname" name="UName" value={this.props.tuname}>
                </input>
                <br />
                <h6>Lectures</h6>
                <input type="text" className="form-control" id="temail" name="Email" value={this.props.temail}>
                </input>
                <br />
                <h6>Timings</h6>
                <input type="text" className="form-control" id="tqualification" name="Qualification" value={this.props.tqualification}>
                </input>
                <hr />
                <button type="submit" name="submit" className="btn btn-primary">
                Register</button>
            </div>
          </form>
        );
    }
}

export default NewPost;
/*
import 'date-fns';
import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, TimePicker, DatePicker } from 'material-ui-pickers';

const styles = {
  grid: {
    width: '60%',
  },
};

class MaterialUIPickers extends React.Component {
  state = {
    // The first commit of Material-UI
    selectedDate: new Date('2014-08-18T21:11:54'),
  };

  handleDateChange = date => {
    this.setState({ selectedDate: date });
  };

  render() {
    const { classes } = this.props;
    const { selectedDate } = this.state;

    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container className={classes.grid} justify="space-around">
          <DatePicker
            margin="normal"
            label="Date picker"
            value={selectedDate}
            onChange={this.handleDateChange}
          />
          <TimePicker
            margin="normal"
            label="Time picker"
            value={selectedDate}
            onChange={this.handleDateChange}
          />
        </Grid>
      </MuiPickersUtilsProvider>
    );
  }
}

MaterialUIPickers.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MaterialUIPickers);
*/