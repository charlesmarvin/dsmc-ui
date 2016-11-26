import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Breadcrumbs from 'react-router-breadcrumbs';
import NavActionLauncher from './launcher/NavActionLauncher';
class App extends Component {
  
  render() {
    return (
    	<div className="wrap">
          <div className="row nav">
            <div className="col-xs-4 col-sm-2 logo">
              <Link to="/">WHEELS</Link>
            </div>
            <div className="col-xs-12 last-xs col-sm-7">
              <Breadcrumbs routes={this.props.routes} params={this.props.params} createSeparator=" / " />
            </div>
            <div className="col-xs-8 col-sm-3 last-sm text-right">
              <Link to="">Profile</Link>
              <Link to="">Sign off</Link>
            </div>
          </div>
              
          <div className="row main">
            <div className="col-xs col-sm-offset-2 col-sm-10">
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
