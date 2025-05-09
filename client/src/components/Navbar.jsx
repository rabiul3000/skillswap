import React from 'react';
import { Link } from 'react-router';
import './Navbar.css';
import NavigationLink from './NavigationLink';
import navLinks from '../utils/navLinks';

const Navbar = () => {
	const user = null;
	return (
		<nav className='shadow-md flex justify-between items-center gap-4 h-12 px-8'>
			<div className=''>
				<div className='text-lg font-bold'>
					SKILL<span className='text-indigo-500'>SWAP</span>
				</div>
			</div>
			<div className='flex items-center justify-center font-bold'>
				{navLinks.map((link) => (
					<NavigationLink key={link.id} link={link} />
				))}
			</div>

			<div className='flex gap-4'>
				{user ? (
					<Link to='/' className='avatar btn-ghost'>
						<div className='w-[36px] rounded-full'>
							<img src='https://img.daisyui.com/images/profile/demo/idiotsandwich@192.webp' />
						</div>
					</Link>
				) : (
					<div>
						<Link to={'/login'} className='btn btn-sm btn-primary btn-soft '>
							Login
						</Link>
					</div>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
