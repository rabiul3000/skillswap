import React from 'react';
import { NavLink } from 'react-router';

const NavigationLink = ({ link }) => {
	const { fillIcon, outLineIcon, path } = link;

	return (
		<NavLink to={path}>
			{({ isActive }) => (
				<div
					className={`${
						isActive
							? 'border-b-3 border-primary'
							: 'border-b-3 border-transparent'
					} py-3 px-8`}
				>
					{isActive ? fillIcon : outLineIcon}
				</div>
			)}
		</NavLink>
	);
};

export default NavigationLink;
