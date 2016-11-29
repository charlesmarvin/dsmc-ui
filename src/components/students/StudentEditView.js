import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { loadStudent } from './actions';

class StudentEditView extends Component {

	constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      dob: '',
      gender: '',
      email: '',
      primaryPhone: '',
      addressLine1: ''
    };
  }

  componentWillMount() {
    this.props.dispatch(loadStudent(this.props.params.id));
  }

  componentWillReceiveProps(nextProps) {
     this.setState({
       ...nextProps.student
     })
  }

  _handleStudentFieldUpdate(e) {
    console.log(e);
	}

  render() {
        return (
					<div className="row">
						<div className="col-xs-12 col-sm-10">
							<form
								className="form"
								onSubmit={e => this._handleSave(e)}
								noValidate>
								<div>
									<label htmlFor="first-name">
										First Name <span className="red">*</span>
								</label>
								<input
									id="firstName"
									type="text"
									className="col-xs-12  field"
									value={this.state.firstName}
									onChange={e => this._handleStudentFieldUpdate(e)(e)}/>
							</div>
							<div>
								<label htmlFor="last-name">
									Last Name <span className="red">*</span>
							</label>
							<input
								id="lastName"
								type="text"
								className="col-xs-12  field"
								value={this.state.lastName}
								onChange={e => this._handleStudentFieldUpdate(e)}/>
						</div>
						<div>
							<label htmlFor="dob">
								Date of Birth <span className="red">*</span>
							<span className="small muted">YYYY-MM-DD</span>
						</label>
						<input
							id="dob"
							type="text"
							className="col-xs-4 field"
							value={this.state.dob}
							onChange={e => this._handleStudentFieldUpdate(e)}/>
					</div>
					<div>
						<label htmlFor="gender">Gender</label>
						<select
							id="gender"
							className="col-xs-4 field"
							value={this.state.gender}
							onChange={e => this._handleStudentFieldUpdate(e)}>
							<option value="">
								- Select -
							</option>
							<option value="F">Female</option>
							<option value="M">Male</option>
						</select>
					</div>
					<div>

						<label htmlFor="email">
							E-Mail
						</label>
						<input
							id="email"
							type="email"
							className="col-xs-12  field"
							value={this.state.email}
							onChange={e => this._handleStudentFieldUpdate(e)}/>
					</div>
					<div>
						<label htmlFor="primaryPhone">
							Primary Phone <span className="red">*</span>
					</label>
					<input
						id="primaryPhone"
						type="tel"
						className="col-xs-12  field"
						value={this.state.primaryPhone}
						onChange={e => this._handleStudentFieldUpdate(e)}/>
				</div>
				<div>
					<label htmlFor="addressLine1">
						Street Address
					</label>
					<input
						id="addressLine1"
						type="text"
						className="col-xs-12  field"
						value={this.state.addressLine1}
						onChange={e => this._handleStudentFieldUpdate(e)}/>
				</div>
				<div>
					<button type="submit" className="btn btn-primary">Save</button>
					<button type="reset" className="btn">Cancel</button>
				</div>
			</form>
		</div>
	</div>
    );
  }
}

StudentEditView.propTypes = {
	student: PropTypes.object
};

const mapStateToProps = (state, ownProps) => {
  return {
    ...state.auth,
    ...state.student
  }
};

StudentEditView = connect(mapStateToProps)(StudentEditView);
export default StudentEditView;
