import React from 'react';
import '../component3.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';

const CustomTableCell = withStyles(theme => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const styles = theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
      overflowX: 'auto',
    },
    table: {
      minWidth: 400,
    },
    row: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.background.default,
      },
    },
  });
  /* class Separate extends Component {
    constructor(props) {
      super(props);
      this.state = {
      };
    }
  clickEventHandler = (event) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    console.log('worked');
  }
} */

  function clickEventHandler(toprop, props){
    console.log('worked in function ' + toprop);
    props.history.push(toprop);
    console.log(props);
    //props.history.push({pathname : toprop});
  }

  function CustomizedTable(props) {
    const { classes } = props;
    console.log(props.class[0]);
    console.log(props);
  
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <CustomTableCell align="center">Course</CustomTableCell>
              <CustomTableCell align="center">Lectures</CustomTableCell>
              <CustomTableCell align="center">Students</CustomTableCell>
              <CustomTableCell align="center">More Details</CustomTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.class.map(row => {
              let to='/profile/'+row._id;
              console.log('route for '+row+' is '+to);
              return (
                  <TableRow className={classes.row} key={row._id}>
                    <CustomTableCell align="center" component="th" scope="row">
                      {row.title}
                    </CustomTableCell>
                    <CustomTableCell align="center">{row.lectures}</CustomTableCell>
                    <CustomTableCell align="center">{row.students.length}</CustomTableCell>
                    <CustomTableCell align="center">
                    <Button 
                      id={row._id}
                      variant="contained"
                      color="default" 
                      className={classes.button}
                      onClick = {clickEventHandler.bind(this, to, props)}>
                      Details
                    </Button>
                    </CustomTableCell>
                  </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
  
  CustomizedTable.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
 export default withRouter(withStyles(styles)(CustomizedTable));