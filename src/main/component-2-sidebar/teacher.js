import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
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
      <Link to="/profile">
        <ListItem button>
          <ListItemText primary="Profile" />
        </ListItem>
      </Link>
      <Divider />
      <Link to="/teacherclasses">
        <ListItem button>
          <ListItemText primary="My Classes" />
        </ListItem>
      </Link>
      <Divider />
      <Link to="/newclass">
        <ListItem button>
          <ListItemText primary="New Class" />
        </ListItem>
      </Link>
      </List>
    </div>
  );
}

SimpleList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleList);
