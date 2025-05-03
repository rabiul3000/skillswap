import React from 'react';
import { Link, NavLink } from 'react-router';
import { GoHomeFill, GoHome } from 'react-icons/go';
import './Navbar.css';

import {
	BsPeople,
	BsFillPeopleFill,
	BsFileSpreadsheetFill,
	BsFileSpreadsheet,
} from 'react-icons/bs';

import {
	IoTv,
	IoTvOutline,
	IoNotifications,
	IoNotificationsOutline,
} from 'react-icons/io5';

import { MdExplore, MdOutlineExplore } from 'react-icons/md';

const Navbar = () => {
	return (
		<nav className='shadow-md flex justify-between items-center gap-4 h-16 px-8'>
			<div className=''>
				<div className='text-2xl font-bold'>
					SKILL<span className='text-indigo-500'>SWAP</span>
				</div>
			</div>

			<div className='flex items-center justify-center font-bold'>
				<NavLink to='/' className='py-4 px-8'>
					<GoHomeFill className='text-indigo-700' size={30} />
				</NavLink>

				<NavLink to='/posts' className='py-4 px-8'>
					<MdExplore className='text-indigo-700 icon' size={30} />
				</NavLink>

				<NavLink to='/friends' className='py-4 px-8'>
					<BsFillPeopleFill className='text-indigo-700 icon' size={30} />
				</NavLink>

				<NavLink to='/videos' className='py-4 px-8'>
					<IoTv className='text-indigo-700' size={30} />
				</NavLink>
			</div>

			<div className='flex gap-4'>
				<button className='btn btn-ghost btn-circle'>
					<div className='indicator'>
						<IoNotifications size={30} className='text-indigo-700' />
						<span className='badge badge-xs badge-secondary indicator-item'>
							12
						</span>
					</div>
				</button>
				<Link to='/' className='avatar btn-ghost'>
					<div className='w-[36px] rounded-full'>
						<img src='https://img.daisyui.com/images/profile/demo/idiotsandwich@192.webp' />
					</div>
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
