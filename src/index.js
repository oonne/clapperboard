import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { Route, Switch } from 'react-router';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';

import reducers from './reducers';
import App from './containers/App/App';
import Home from './containers/Home/Home';
import './assets/index.css';

// Create a history
const history = createBrowserHistory();

// Builds the middlewares
const middlewares = [routerMiddleware(history), thunkMiddleware, createLogger()];

// Add the reducer to store on the `router` key
// Also apply our middleware for navigating
const store = createStore(
	combineReducers({
		...reducers,
		router: routerReducer,
	}),
	applyMiddleware(...middlewares)
);

ReactDOM.render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<App>
				<Switch>
			        <Route path="/" component={Home} exact strict />
			        <Route path="/clapperboard/build/" component={Home} exact strict />
				</Switch>
			</App>
		</ConnectedRouter>
	</Provider>,
	document.getElementById('root')
)
