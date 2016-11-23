import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

class Login extends Component {
  static muiName = 'FlatButton';
  handleNavToLogin() {
  	push('/login');
  }
  render() {
    return (
      <FlatButton 
      	label="Sign In"
      	{...this.props}
      	onTouchTap={this.handleNavToLogin} />
    );
  }
}

const Logged = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton><MoreVertIcon /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <MenuItem primaryText="Profile" />
    <MenuItem primaryText="Help" />
    <MenuItem primaryText="Sign out" />
  </IconMenu>
);


Logged.muiName = 'IconMenu';

class App extends Component {

  render() {
    return (
    	<div>
    		<AppBar title="DSMC"
          iconElementRight={this.props.profile.firstName? <Logged /> : <Login />} />
	      <div className="row">
			    <div className="col-xs-12">
			      	{this.props.children}
			    </div>
			  </div>
      </div>
    );
  }
}

App.propTypes = {
    children: React.PropTypes.node,
    profile: React.PropTypes.object
};

const mapStateToProps = (state) => ({ 
	profile: state.profile
});

App = connect(mapStateToProps)(App);
export default App;
