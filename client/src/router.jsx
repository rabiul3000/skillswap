import { createBrowserRouter } from 'react-router';
import Landing from './pages/Landing';

let router = createBrowserRouter([
	{
		path: '/',
		Component: Landing,
	},
]);
export default router;
