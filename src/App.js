import React from 'react';
import Dashboard from './view/Dashboard';
import {
	Switch,
	Route,
	Redirect,
	BrowserRouter as Router
} from 'react-router-dom';
import NotFound from './view/NotFound';

function App() {
	return (
		<div className='App'>
			<Router>
				<Switch>
					<Redirect exact from='/' to='/home' />
					<Route exact path='/home' component={Dashboard} />
					<Route exact path='/*' component={NotFound} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
