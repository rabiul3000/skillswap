import { createBrowserRouter } from 'react-router';
import Home from './pages/Home';
import Register from './features/Auth/Register/Register';
import Login from './features/Auth/Login/Login';

let router = createBrowserRouter([
	{
		path: '/',
		Component: Home,
	},
	{
		path: '/register',
		Component: Register,
	},
	{
		path: '/login',
		Component: Login,
	},
]);
export default router;
