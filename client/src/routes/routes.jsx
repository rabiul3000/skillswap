import { createBrowserRouter } from 'react-router';
import Home from '../pages/Home';
import Posts from '../pages/posts/Posts';
import RootLayout from '../RootLayout';
import Friends from '../pages/friends/Friends';
import Videos from '../pages/videos/Videos';

export let routes = createBrowserRouter([
	{
		path: '/',
		Component: RootLayout,
		children: [
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
		],
	},
]);
