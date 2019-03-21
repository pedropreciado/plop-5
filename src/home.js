import React from 'react';
import { router } from './Router';

export default ({ router }) => {
	const {
		navigate,
	} = router;

	return (<div>
			home plop
			<button onClick={() => navigate('profile', {plop:'from home'})}>
				navigate to profile-plop
			</button>
		</div>)
}