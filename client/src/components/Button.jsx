import React from 'react';
import { Link } from 'react-router';

const Button = ({ value, to }) => {
	return (
		<Link
			to={to}
			className='px-12 py-2 rounded-lg bg-indigo-500 text-white font-bold active:scale-75 duration-500'
		>
			{value}
		</Link>
	);
};

export default Button;
