import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { load } from './actions';
	
class StudentList extends Component {
	componentWillMount() {
      this.props.dispatch(load());
	}

  getPreferredContactNumber(contactNumbers) {
    if (!contactNumbers) {
      return '';
    }
    let mobile = contactNumbers.find((n) => n.type === 'Mobile' );
    if (mobile) {
      return mobile.number;
    }
    let home = contactNumbers.find((n) => n.type === 'Home' );
    if (home) {
      return home.number;
    }
    let work = contactNumbers.find((n) => n.type === 'Work' );
    if (work) {
      return work.number;
    }
  }
  render() {
      return (
        <div className="row">
          <div className="col-xs">
            <div className="content">
              <h3>Students</h3>            
              <section className="">
                {this.props.students.map((student) => {
                  return (
                    <section className="student" key={student.id}>
                      <div className="row">
                        <div className="col-xs-12">
                          {student.firstName} - {this.getPreferredContactNumber(student.contactNumbers)}
                        </div>
                      </div>
                    </section>
                  );
                })}
              </section>		
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