import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { close, open } from './actions';

class NavActionLauncher extends Component {
  handleClose(e) {
    e.preventDefault();
    this.props.dispatch(close());
  }
  handleOpen(e) {
    e.preventDefault();
    this.props.dispatch(open());
  }
  render() {
    if (!this.props.open) {
      return (
        <div className="action-button-container">
          <button className="action-button" onClick={e => this.handleOpen(e)}>
          </button>
        </div>
      );
    } else {
      return (
          <div className="overlay overlay-hugeinc">
            <label htmlFor="op" onClick={e => this.handleClose(e)}></label>
            <nav>
                <ul>
                    <li><Link to="/sessions/schedule">Schedule Session</Link></li>
                    <li><Link to="/students/new">Add Student</Link></li>
                    <li><Link to="/instructors/new">Add Instructor</Link></li>
                    <li><Link to="/packages/new">Add Package</Link></li>
                </ul>
            </nav>
          </div>
      );
    }
  }
}

NavActionLauncher.propTypes = {
    launcher: React.PropTypes.object
};

const mapStateToProps = (state) => ({ 
	...state.launcher
});

NavActionLauncher = connect(mapStateToProps)(NavActionLauncher);
export default NavActionLauncher;