import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import './component2.css';
import {Link} from 'react-router-dom';

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    textAlign: 'center',
  },
});
/*
function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}
*/

function SimpleList(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <List component="nav">
        <Link to="/register">
            <ListItem button>
            <ListItemText primary="Register" />
            </ListItem>
        </Link>
      <Divider />
        <ListItem button>
          <ListItemText primary="About Us" />
        </ListItem>
      <Divider />
        <ListItem button>
          <ListItemText primary="Contact Us" />
        </ListItem>
      </List>
    </div>
  );
}

SimpleList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleList);
