import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { withRouter } from 'react-router-dom';
import '../component3.css';
const axios = require('axios');
//import { red } from '@material-ui/core/colors';

function TabContainer(props) {
    return (
      <Typography component="div" style={{ padding: 8 * 3 }}>
        {props.children}
      </Typography>
    );
  }
  
  TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
  };
  
const styles = {
  root: {
    flexGrow: 1,
  },
};

class CenteredTabs extends React.Component {
  state = {
    value: 0,
    name: '',
    username: '',
    email: '',
    qualification: '',
    password1: '',
    password2: '',
    isValid: false,
    nametouched: false,
    usernametouched: false,
    emailtouched: false,
    qualificationtouched: false,
    password1touched: false,
    password2touched: false,
    lastAtPos: null,
    lastDotPos: null
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  changehandler(event, fieldName) {

    if(fieldName === 1){
      console.log(this.state.isValid);
      this.setState({ nametouched : true })
      this.setState({ name : event.target.value });
      if( this.state.name.trim() === '' && !this.state.name.match(/^[a-zA-Z]+$/)){
        this.setState({ isValid : false });
      }
      else{
        this.setState({ isValid : true });
      }
      //console.log(this.state.isValid);
    }
    else if(fieldName === 2){
      console.log(this.state.isValid);
      this.setState({ usernametouched : true })
      this.setState({ username : event.target.value });
      if( this.state.username.trim() === '' ){
        this.setState({ isValid : false });
      }
      else{
        this.setState({ isValid : true });
      }
      //console.log(this.state.isValid);
    }
    else if(fieldName === 3){
      console.log(this.state.isValid);
      this.setState({ emailtouched : true });
      this.setState({ email : event.target.value });
      
      this.setState({ lastAtPos : event.target.value.lastIndexOf('@') });
      this.setState({ lastDotPos : event.target.value.lastIndexOf('.')});
      
      if( this.state.email.trim() === '' ){
          if( !(this.state.lastAtPos < this.state.lastDotPos 
              && this.state.lastAtPos > 0 
              && this.state.email.indexOf('@@') === -1 
              && this.state.lastDotPos > 2 
              && (this.state.email.length - this.state.lastDotPos) > 2)
              ){
        this.setState({ isValid : false });
      }
    }
      else{
        this.setState({ isValid : true });
      }
    }
    else if(fieldName === 4){
      console.log(this.state.isValid);
        this.setState({ qualificationtouched : true })
      this.setState({ qualification : event.target.value });
      if( this.state.qualification.trim() === '' ){
        this.setState({ isValid : false });
      }
      else{
        this.setState({ isValid : true });
      }
    }
    else if(fieldName === 5){
      console.log(this.state.isValid);
        this.setState({ password1touched : true })
      this.setState({ password1 : event.target.value });
      if( this.state.password1.trim() === ''
          && this.state.password1 !== this.state.password2){
        this.setState({ isValid : false });
      }
      else{
        this.setState({ isValid : true });
      }
    }
    else if(fieldName === 6){
      console.log(this.state.isValid);
        this.setState({ password2touched : true })
      this.setState({ password2 : event.target.value });
      if( this.state.password2.trim() === ''
          && this.state.password2 !== this.state.password1){
        this.setState({ isValid : false });
      }
      else{
        this.setState({ isValid : true });
      }
    }
    else{
      console.log('there is some errror.')
    }
    /* console.log(this.state.username.length);
    if ( this.state.username.length <= 3 ){
      this.setState({ usernametouched : false }); 
    }
    else{
      this.setState({ usernametouched : true }); 
    } */
  }

  teacherhandler = ( event ) => {
    event.preventDefault();
    console.log(this.state.name);
    console.log(this.state.username);
    console.log(this.state.email);
    console.log(this.state.qualification);
    console.log(this.state.password1);
    console.log(this.state.password2);

    axios({
      method: 'post',
      url: 'http://localhost:3001/teacher/register',
      data: {
        Name: this.state.name,
        Email: this.state.email,
        Qualification: this.state.qualification,
        userName: this.state.username,
        Password1: this.state.password1,
        Password2: this.state.password2
      }
    });
    this.props.history.push('/login');
  }

  render() {    
    const { classes } = this.props;
    const { value } = this.state;

    return (
        <div>
        <br />
      <Paper className={classes.root}>
        <br />
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Register as teacher" />
          <Tab label="Register as student" />
        </Tabs>
        {value === 0 && <TabContainer>
          <form onSubmit={this.teacherhandler}>
                <h6>Name</h6>
                <input 
                  type="text" 
                  className={this.state.nametouched 
                    ? '.error form-control'
                    : "form-control"}  
                  id="tuser" 
                  name="Name" 
                  value={this.props.tname}
                  // onChange={this.changehandler.bind(this, 'title')}
                  onChange={(e) => this.changehandler(e, 1)}
                >
                </input>
                <br />
                <h6>UserName</h6>
                <input 
                  type="text" 
                  className={this.state.usernametouched 
                    ? '.error form-control'
                    : "form-control"} 
                  id="tuname" 
                  name="UName" 
                  value={this.props.tuname}
                  onChange={(e) => this.changehandler(e, 2)}>
                </input>
                <br />
                <h6>Email</h6>
                <input 
                  type="text" 
                  className={this.state.emailtouched
                    ? '.error form-control'
                    : "form-control"}
                  id="temail" 
                  name="Email" 
                  value={this.props.temail}
                  onChange={(e) => this.changehandler(e, 3)}>
                </input>
                <br />
                <h6>Qualification</h6>
                <input 
                  type="text" 
                  className={this.state.qualificationtouched
                    ? '.error form-control'
                    : "form-control"}
                  id="tqualification" 
                  name="Qualification" 
                  value={this.props.tqualification}
                  onChange={(e) => this.changehandler(e, 4)}>
                </input>
                <br />
                <h6>Password1</h6>
                <input 
                  type="password" 
                  className={this.state.password1touched
                    ? '.error form-control'
                    : "form-control"}
                  id="tpwd1" 
                  name="pass1" 
                  value={this.props.tpass}
                  onChange={(e) => this.changehandler(e, 5)}>
                </input>
                <br />
                <h6>Password2</h6>
                <input 
                  type="password" 
                  className={this.state.password2touched 
                    ? '.error form-control'
                    : "form-control"}
                  id="tpwd2" 
                  name="pass2"
                  onChange={(e) => this.changehandler(e, 6)}>
                </input>
                <hr />
                <button 
                  type="submit" 
                  disabled={
                    this.state.isValid
                    | !(this.state.nametouched
                    && this.state.usernametouched 
                    && this.state.emailtouched
                    && this.state.qualificationtouched
                    && this.state.password1touched
                    && this.state.password2touched )
                    | !(this.state.password1 === this.state.password2)
                  }
                  name="submit" 
                  className="btn btn-primary">
                Register
                </button>
            </form>
            </TabContainer>}
        {value === 1 && <TabContainer>
                <h6>Name</h6>
                <input type="text" className="form-control" id="suser" name="Name">
                </input>
                <br />
                <h6>Registration</h6>
                <input type="text" className="form-control" id="sregistration" name="UName">
                </input>
                <br />
                <h6>Password1</h6>
                <input type="password" className="form-control" id="spwd1" name="pass1">
                </input>
                <br />
                <h6>Password2</h6>
                <input type="password" className="form-control" id="spwd2" name="pass2">
                </input>
                <hr />
                <button type="submit" name="submit" className="btn btn-primary">
                Register</button>
            </TabContainer>}
      </Paper>
      </div>
    );
  }
}

CenteredTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(CenteredTabs));
