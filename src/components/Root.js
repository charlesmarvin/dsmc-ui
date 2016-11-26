import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import App from './App';
import Error from './Error';
import LoginView from './auth/LoginForm';
import VerifyView from './auth/VerifyAccountForm';
import Dashboard from './dashboard/Dashboard';
import StudentList from './students/StudentList';

const requireAuth = (store) => {
	return (nextState, replace) => {
    const state = store.getState();
    if (!state.auth || !state.auth.authenticated) {
      replace({ 
      	pathname: '/login', 
      	state: { nextPathname: nextState.location.pathname }
      });
    }
  };
}

const Root = ({store}) => {
	const history = syncHistoryWithStore(browserHistory, store);
	return(
      <Provider store={store}>
          <Router history={history}>
              <Route path="/" component={App} breadcrumbIgnore>
                  <IndexRoute component={Dashboard} name="Dashboard" /> //onEnter={requireAuth(store)}
                  <Route path="error" component={Error} />
                  <Route path="login" component={LoginView} name="Login" />
                  <Route path="students" component={StudentList} name="Students" />
                  <Route path="sessions" component={() => (<div>Sessions!</div>)} name="Sessions">
                    <Route path="schedule" component={() => (<div>Schedule Session!!</div>)} name="Schedule"/>
                  </Route>
                  <Route path="verify" component={VerifyView} />
                  <Route path="*" component={() => <span>404</span>} name="Not Found" />
              </Route>
          </Router>
      </Provider>
	);
}



Root.propTypes = {
	store: PropTypes.object.isRequired
};

export default Root;
