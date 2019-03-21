import React from 'react';
import createRouter from 'router5';
import browserPlugin from 'router5-plugin-browser';
import { RouterProvider, Route } from 'react-router5';

import Home from './home';
import Profile from './profile';

const routes = [
	{ name: 'home', path: '/'},
	{ name: 'profile', path: '/profile' },
];

const router = createRouter(routes);

router.usePlugin(browserPlugin());

router.start('/signin');
	
	const Routes = ({ route }) => {
		console.log('routing to', route);
		
		switch(route.name) {
			case 'home': 
			return <Home router={router} />;
			case 'profile':
			return <Profile router={router} />;
			default:
			return null;
		}
	}
	
	export class Router extends React.Component {
		render() {
			return (
			<RouterProvider router={router}>
				<Route>{({ route }) => <Routes route={route} />}</Route>
			</RouterProvider>
		);
	}
}
export { router };