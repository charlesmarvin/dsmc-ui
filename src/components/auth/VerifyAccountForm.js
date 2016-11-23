import React from 'react';
import { connect } from 'react-redux';
import { verifyAccount } from './actions';
	
let VerifyAccountForm = ({ dispatch }) => {
	let username, verificationCode;
	const submit = (e) => {
		e.preventDefault();
		dispatch(verifyAccount(username.value, verificationCode.value));
	};
	return (
		<div className="row centered">
			<div className="col col-4">
				<form className="form" onSubmit={submit}>
					<div className="form-item">
						<label htmlFor="username">Username <span className="req">*</span></label>
						<input id="username" type="text" ref={node => { username = node }} />
						<div className="error"></div>
					</div>
					<div className="form-item">
						<label htmlFor="verificationCode">Verification Code <span className="desc">...</span></label>
						<input id="verificationCode" type="password" ref={node => { verificationCode = node }}/>
						<div className="error"></div>
					</div>
					<div className="form-item">
						<button className="button primary width-100">Verify Account</button>
					</div>
					<div className="form-item text-centered">
						<a href="#">Resend verication code</a>
					</div>
				</form>
			</div>
		</div>
    );
}

VerifyAccountForm = connect()(VerifyAccountForm);
export default VerifyAccountForm;