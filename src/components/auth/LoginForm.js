import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { login } from './actions';
	
class LoginForm extends Component {
	constructor(props) {
    super(props);
    this.state = {errors: {}};
  }

	validate() {
		let username = null, password = null;
		if(!this.state.username || !this.state.username.trim().length) {
				username: "Required";
		}
		if(!this.state.password || !this.state.password.trim().length) {
				password: "Required";
		}
		this.setState({
			errors: {
				username,
				password
			}
		});
		return !(username && password);
	}
	submit(e) {
		e.preventDefault();
		if (this.validate()) {
  		this.props.dispatch(login(this.state.username, this.state.password));
		}
	}
	
	render() {
		let loginBtnText = 'Sign In';
		if (this.props.isLoggingIn) {
			loginBtnText = 'Signing in...';
		}
		return (
			<div className="row center-xs">
				<div className="col-xs-10 col-sm-4 col-md-3">
					<form className="form login-form" onSubmit={e => this.submit(e)} >
						<TextField
				      hintText="Username"
				      floatingLabelText="Username"
				      errorText={this.state.errors.username}
				      fullWidth={true}
				      onChange={e => this.setState({ username: e.target.value })}
				    />

				    <TextField
				      hintText="Password"
				      floatingLabelText="Password"
				      type="password"
				      errorText={this.state.errors.password}
				      fullWidth={true}
				      onChange={e => this.setState({ password: e.target.value })}
				    />
				    <div>
				    	<RaisedButton label={loginBtnText} 
				    		primary={true} 
				    		type="submit" />
				    </div>
			    </form>
				</div>
			</div>
    );
	}
}

LoginForm.propTypes = {
	isLoggingIn: PropTypes.bool,
	authenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({ ...state.auth });

LoginForm = connect(mapStateToProps)(LoginForm);
export default LoginForm;