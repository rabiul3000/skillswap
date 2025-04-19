import { createContext, useEffect, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);

	useEffect(() => {
		let user = { email: 'rabiul@gmail.com', password: '12345' };
		setUser(user);
	}, []);

	return <AuthContext.Provider value={user}> {children} </AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
