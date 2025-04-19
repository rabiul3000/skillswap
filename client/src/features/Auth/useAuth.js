import { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';

const useAuth = () => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const user = useContext(AuthContext);

	const validUser = ({ email, password }) => {
		setLoading(true);
		try {
			if (email !== user.email) throw new Error('Invalid email adress');
			if (password !== user.password) throw new Error('Wrong password');
			return true;
		} catch (error) {
			setError(error.message);
			return false;
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
