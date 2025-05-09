import { MdExplore, MdOutlineExplore } from 'react-icons/md';
import { BsPeople, BsFillPeopleFill } from 'react-icons/bs';
import { IoNotifications, IoNotificationsOutline, IoTv, IoTvOutline } from 'react-icons/io5';
import { GoHome, GoHomeFill } from 'react-icons/go';

const navLinks = [
	{
		id: 1,
		path: '/',
		fillIcon: <GoHomeFill className='text-indigo-700' size={25} />,
		outLineIcon: <GoHome className='text-neutral-500' size={25} />,
		name: 'Home',
	},
	{
		id: 2,
		path: '/posts',
		fillIcon: <MdExplore className='text-indigo-700 ' size={25} />,
		outLineIcon: <MdOutlineExplore className='text-neutral-500' size={25} />,
		name: 'Posts',
	},
	{
		id: 3,
		path: '/friends',
		fillIcon: <BsFillPeopleFill className='text-indigo-700 ' size={25} />,
		outLineIcon: <BsPeople className='text-neutral-500' size={25} />,
		name: 'Friends',
	},

	{
		id: 4,
		path: '/videos',
		fillIcon: <IoTv className='text-indigo-700 ' size={25} />,
		outLineIcon: <IoTvOutline className='text-neutral-500' size={25} />,
		name: 'Videos',
	},
	{
		id: 4,
		path: '/notifications',
		fillIcon: <IoNotifications className='text-indigo-700 ' size={25} />,
		outLineIcon: <IoNotificationsOutline className='text-neutral-500' size={25} />,
		name: 'Videos',
	},
];

export default navLinks;
