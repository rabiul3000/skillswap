import { createBrowserRouter } from 'react-router';

let router = createBrowserRouter([
	{
		path: '/',
		Component: Home,
	},
	{
		path: '/register',
		Component: Register,
	},
]);
export default router;
