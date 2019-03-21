import React from 'react';

export default ({
	router: {
		navigate
	}
}) => (
	<div>
		profile plop
		<button onClick={() => navigate('home', { plop: 'from profile'})}>
			back home
		</button>
		</div>
	)