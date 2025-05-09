import { createBrowserRouter } from 'react-router';
import Home from '../pages/Home';
import Posts from '../pages/posts/Posts';
import RootLayout from '../RootLayout';
import Friends from '../pages/friends/Friends';
import Videos from '../pages/videos/Videos';
import Notifications from '../pages/notifications/Notifications';

const routes = createBrowserRouter([
	{
		path: '/',
		Component: RootLayout,
		children: [
			{
				path: '/',
				Component: Home,
			},
			{
				path: '/posts',
				Component: Posts,
			},

			{
				path: '/friends',
				Component: Friends,
			},
			{
				path: '/videos',
				Component: Videos,
			},
			{
				path: '/notifications',
				Component: Notifications,
			},
		],
	},
]);
export default routes;
