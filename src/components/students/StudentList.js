import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { load } from './actions';
	
class StudentList extends Component {
	componentWillMount() {
      this.props.dispatch(load());
	}

  renderPhoneContactList(contactNumbers) {
    if(!contactNumbers || contactNumbers.length === 0) {
      return '';
    }
    return (
      <select> 
      {contactNumbers.map((number, idx) => {
          return (<option value={number.number} key={idx}>
            {number.number} - {number.type}
          </option>);
        })}
      </select>
    );
  }
  render() {
      return (
        <div className="row">
          <div className="col-xs">
            <div className="content">
              <div className="student-list">
                {this.props.students.map((student) => {
                  return (
                    <div className="row student-list-item" key={student.id}>
                      <div className="col-xs col-sm-4">
                        <div className="box student-name">
                          <Link to={`students/${student.id}`}>
                          {student.firstName} {student.lastName}
                          </Link>
                        </div>
                      </div>
                      <div className="col-xs col-sm-4">
                        <div className="box">
                          {student.email}
                        </div>
                      </div>
                      <div className="col-xs col-sm-4">
                        <div className="box">
                          {this.renderPhoneContactList(student.contactNumbers)}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      );
	} 
}

StudentList.propTypes = {
	students: PropTypes.array
};

const mapStateToProps = (state) => ({ ...state.students, ...state.auth });

StudentList = connect(mapStateToProps)(StudentList);
export default StudentList;