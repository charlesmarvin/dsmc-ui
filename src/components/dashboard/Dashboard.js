import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
//import { loadProfile } from './actions';
	
class Dashboard extends Component {
	componentWillMount() {
		//this.props.dispatch(loadProfile());
	}
  
    renderSession(session, index, data) {
      let lastClass = (index+1 === data.length) ? 'last' : '';
      return (
          <div className={`row session-details ${lastClass}`} key={session.id}>
            <div className="col-xs-12 col-sm-2">
              <span className="session-time">{session.time}</span>
            </div>
            <div className="col-xs-12 col-sm-10">
              <div className="student-info">
                <span className="student-name">{session.student}</span>
                <span className="phone">{session.studentContact}</span>
                <span className="address">{session.pickupLocation}</span>
              </div>
            </div>
          </div>
      );
    }
    
	render() {
      return (
        <div className="row">
          <div className="col-xs">
            <div className="content">
              <h3>Upcoming Sessions</h3>            
              <section className="upcoming-sessions">
                {this.props.upcomingSessions.map((day, idx) => {
                  return (
                    <section className="day" key={idx}>
                      <div className="row">
                        <div className="col-xs-12 col-sm-2">
                          <span className="session-date">{day.date}</span>
                        </div>
                        <div className="col-xs-12 col-sm-10" >
                          {day.sessions.map(this.renderSession)}
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

Dashboard.propTypes = {
	upcomingLessons: PropTypes.array
};

const mapStateToProps = (state) => ({ ...state.dashboard, ...state.auth });

Dashboard = connect(mapStateToProps)(Dashboard);
export default Dashboard;