import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import App from './App';
import Error from './Error';
import LoginView from './auth/LoginForm';
import VerifyView from './auth/VerifyAccountForm';
import Dashboard from './dashboard/Dashboard';
// import {deepOrange500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const muiTheme = getMuiTheme({
  palette: {
    
  },
});

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
		<MuiThemeProvider muiTheme={muiTheme}>
			<Provider store={store}>
				<Router history={history}>
					<Route path="/" component={App}>
						<IndexRoute component={Dashboard} onEnter={requireAuth(store)}/>
						<Route path="/error" component={Error} />
						<Route path="/login" component={LoginView} />
						<Route path="/verify" component={VerifyView} />
					</Route>
				</Router>
			</Provider>
		</MuiThemeProvider>
	);
}



Root.propTypes = {
	store: PropTypes.object.isRequired
};

export default Root;
