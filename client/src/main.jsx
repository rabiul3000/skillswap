import { createRoot } from 'react-dom/client';
import { AuthProvider } from './context/AuthContext.jsx';
import './index.css';
import { RouterProvider } from 'react-router';
import router from './router.jsx';

createRoot(document.getElementById('root')).render(
	<AuthProvider>
		<RouterProvider router={router} />
	</AuthProvider>
);

