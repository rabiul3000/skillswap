import { createContext, useEffect, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);

	useEffect(() => {
		setUser({ email: 'rabiul@gmail.com', password: '12345' });
	}, []);

	return <AuthContext.Provider value={user}> {children} </AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
