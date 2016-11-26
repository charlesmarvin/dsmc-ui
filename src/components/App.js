import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Breadcrumbs from 'react-router-breadcrumbs';
import NavActionLauncher from './launcher/NavActionLauncher';
class App extends Component {
  
  render() {
    return (
    	<div className="wrap">
          <nav className="header">
              <div className="logo">
                <Link to="/">WHEELS</Link>
         </div>
              <Breadcrumbs routes={this.props.routes} params={this.props.params} createSeparator=" / " />
          </nav>
          <div className="main">
            <div className="row">
              <div className="col-xs col-sm-offset-2 col-sm-10">
                {this.props.children}
              </div>
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
