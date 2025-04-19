import { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';

const useAuth = () => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const user = useContext(AuthContext);

	const validUser = ({ email, password }) => {
		try {
			setLoading(true);
			if (email !== user.email) throw new Error('Invalid email or password');
			if (password !== user.password)
				throw new Error('Invalid email or password');
			return true;
		} catch (error) {
			setError(error.message);
		} finally {
			setLoading(false);
		}
	};

	return {
		loading,
		error,
		validUser,
		setError,
	};
};

export default useAuth;
