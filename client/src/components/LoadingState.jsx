import React from 'react';

const LoadingState = () => {
	return (
		<div className='h-100 w-full flex justify-center items-center'>
			<div>
				<span className='loading loading-bars loading-xs'></span>
				<span className='loading loading-bars loading-xs'></span>
				<span className='loading loading-bars loading-xs'></span>
				<span className='loading loading-bars loading-xs'></span>
				<span className='loading loading-bars loading-xs'></span>
			</div>
		</div>
	);
};

export default LoadingState;
