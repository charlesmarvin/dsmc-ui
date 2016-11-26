import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { login } from './actions';
	
class LoginForm extends Component {
	constructor(props) {
    super(props);
    this.state = {errors: {}};
  }

	validate() {
		let username = null, password = null;
		if(!this.state.username || !this.state.username.trim().length) {
				username = "Required";
		}
		if(!this.state.password || !this.state.password.trim().length) {
				password = "Required";
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
			<div className="row">
				<div className="col-xs">
					<form className="content" onSubmit={e => this.submit(e)} >
          <div className="row">
            <div className="col-xs">
            <label>
              Username:
              <input type="text" name="username" value={this.state.username} onChange={e => this.setState({ username: e.target.value })} />
              <span className="error">{this.state.errors.username}</span>
            </label>
            </div>
              </div>
              <div className="row">
            <div className="col-xs">
          <label>
            Password:
            <input type="password" name="password" value={this.state.password} onChange={e => this.setState({ password: e.target.value })} />
            <span className="error">{this.state.errors.password}</span>
          </label>
            </div>
              </div>
				    <div>
				    	<button type="submit">{loginBtnText}</button>
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