import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { loadProfile } from './actions';
	
class Dashboard extends Component {
	componentWillMount() {
		this.props.dispatch(loadProfile());
	}

	render() {
		return (
			<div>Hello, {this.props.firstName}!</div>		
		);
	} 
}

Dashboard.propTypes = {
	firstName: PropTypes.string
};

const mapStateToProps = (state) => ({ ...state.profile, ...state.auth });

Dashboard = connect(mapStateToProps)(Dashboard);
export default Dashboard;