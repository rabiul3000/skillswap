import React from 'react';

const Button = ({ value }) => {
	return (
		<button className='px-12 py-2 rounded-lg bg-cyan-400 font-bold active:scale-75 duration-500'>
			{value}
		</button>
	);
};

export default Button;
