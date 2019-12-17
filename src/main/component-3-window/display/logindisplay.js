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
    isValid: false,
    signintouched: false,
    passwordtouched: false,
    signin: '',
    password: '',
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  changehandler(event, fieldName) {

    if(fieldName === 1){
      console.log(this.state.isValid);
      this.setState({ nametouched : true })
      this.setState({ signin : event.target.value });
    }
    else if(fieldName === 2){
      console.log(this.state.isValid);
      this.setState({ passwordtouched : true })
      this.setState({ password : event.target.value });
    }
    else{
      console.log('there is some errror.')
    }

    if( this.state.signin.trim() === ''
        || this.state.password.trim() === '' ){
      this.setState({ isValid : false });
    }
    else{
      this.setState({ isValid : true });
    }
    console.log(this.state.isValid);
  }

  loginhandler = ( event ) => {
    event.preventDefault();
    console.log(this.state.signin);
    console.log(this.state.password);
    console.log(this.props.authId);
    console.log(this.props.auth);
    console.log(this.props);

    axios.post('http://localhost:3001/teacher/login', 
      {username: this.state.signin, 
        password: this.state.password})
        /*.then(response => res.redirect('/'))*/
        .then(function (response) {
            console.log(response);
        })
        .catch(function(error) {
            console.log(error);
        })
      
    this.props.history.push({
      pathname: '/logedin',
      authId: '5bf589d07d73c50f88f2f7fb',
      auth: 't' });
    //this.props.history.replace('../../main.js', {authId: 123});
    
  }

  render() {    
    const { classes } = this.props;
    const { value } = this.state;

    return (
        <div>
        <br />
      <Paper className={classes.root}>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Login as teacher" />
          <Tab label="Login as student" />
        </Tabs>
        {value === 0 && <TabContainer>
          <form onSubmit={this.loginhandler}>
                <h6>User ID</h6>
                <input 
                  type="text"
                  className={this.state.signintouched
                    ? '.error form-control'
                    : "form-control"} 
                  id="usr" 
                  name="tid" 
                  value={this.props.tid}
                  onChange={(e) => this.changehandler(e, 1)}
                >
                </input>
                <br />
                <h6>Password</h6>
                <input 
                  type="password" 
                  className={this.state.passwordtouched
                    ? '.error form-control'
                    : "form-control"} 
                  id="pwd" 
                  name="pass" 
                  value={this.props.pass}
                  onChange={(e) => this.changehandler(e, 2)}
                >
                </input>
                <hr />
                <button 
                  type="submit" 
                  name="submit" 
                  disabled={
                    !this.state.isValid
                    | (this.state.signintouched
                    && this.state.passwordtouched)
                  }
                  className="btn btn-primary">
                Login</button>
              </form>
            </TabContainer>}
        {value === 1 && <TabContainer>
              <h6>User ID</h6>
                <input type="text" className="form-control" id="usr" name="tid" value={this.props.tid}>
                </input>
                <br />
                <h6>Password</h6>
                <input type="password" className="form-control" id="pwd" name="pass" value={this.props.pass}>
                </input>
                <hr />
                <button type="submit" name="submit" onClick={this.props.click} className="btn btn-primary">
                Login</button>
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
