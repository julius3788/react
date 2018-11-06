import React from 'react'
//import PropTypes from 'prop-types'
//import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom'
//import IconButton from '@material-ui/core/IconButton'
import { connect } from 'react-redux'
/*

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  card: {
    maxWidth: 345,
  },
  media: {
    // ⚠️ object-fit is not supported by IE11.
    objectFit: 'cover',
  },
};



function NavBar(props) {
  const { classes } = props;
  return (
    <React.Fragment>
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            Qtemu
          </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              <Button color="inherit">Create Meetup</Button>
              <Button color="inherit">Explore</Button>
              <Link to ="/">
                <Button color="inherit">Home</Button>
              </Link>
              <Link to ="/about">
                <Button color="inherit">About</Button>
              </Link>
            </Typography>
          
            <Typography variant="h6" color="inherit" className={classes.grow}>
            
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      
    </div>
    </React.Fragment>
  );
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};
*/

let NavBar = (props) => (
  <AppBar position="static" color="default">
    <Toolbar>
      <Typography variant="title" color="inherit">

        {props.apps.pageTitle}
       

      </Typography>
      <Link to="/">
        <Button color="inherit">Home</Button>
      </Link>
      <Link to="/about">
        <Button color="inherit">About</Button>
      </Link>
    </Toolbar>
  </AppBar>
)

const mapStateToProps = (state) =>{
  return {
    apps: state.apps,
  }
}

NavBar = connect(mapStateToProps)(NavBar)
//export default connect(mapStateToProps)(NavBar)
//export default withStyles(styles)(NavBar);
export default NavBar