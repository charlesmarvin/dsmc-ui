import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { browserHistory } from 'react-router';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import reducers from './reducers';
import thunk from 'redux-thunk';
import Root from './components/Root';

import injectTapEventPlugin from 'react-tap-event-plugin';
import 'flexboxgrid/dist/flexboxgrid.css';
import './index.css';
 
// Needed for onTouchTap 
// http://stackoverflow.com/a/34015469/988941 
injectTapEventPlugin();
const routingAwareReducers = combineReducers({
	...reducers,
  routing: routerReducer
});

const enhancer = composeWithDevTools(
	applyMiddleware(thunk),
  applyMiddleware(routerMiddleware(browserHistory))
);

const store = createStore(
	routingAwareReducers, 
	enhancer
);

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root')
);
