import React from 'react';
import Loader from 'react-loader-spinner';

const LoaderComponent = () => {
	return (
		<Loader
			type='Circles'
			color='#7166d2'
			height={100}
			width={100}
			timeout={300000} //3 secs
		/>
	);
};

export default LoaderComponent;
