import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, IndexLink } from 'react-router';
import NavActionLauncher from './launcher/NavActionLauncher';
class App extends Component {

  render() {
    return (
    	<div className="wrap">
          <div className="row nav">
            <div className="col-xs-3 logo">
              <IndexLink to="dashboard">WHEELS</IndexLink>
            </div>

            <div className="col-xs-9 text-right">
              <Link to="">Profile</Link>
              <Link to="">Sign off</Link>
            </div>
          </div>
          <div className="row nav sub-nav">
            <div className="col-xs">
              <Link to="dashboard" activeClassName="active">Dashboard</Link>
              <Link to="students" activeClassName="active">Students</Link>
              <Link to="instructors" activeClassName="active">Instructors</Link>
              <Link to="packages" activeClassName="active">Packages</Link>
            </div>
          </div>
          <div className="row main">
            <div className="col-xs">
              {this.props.children}
            </div>
          </div>
          <NavActionLauncher/>
        </div>
    );
  }
}

App.propTypes = {
    children: React.PropTypes.node,
    profile: React.PropTypes.object,
    dashboard: React.PropTypes.object
};

const mapStateToProps = (state) => ({
	profile: state.profile,
  dashboard: state.dashboard
});

App = connect(mapStateToProps)(App);
export default App;
