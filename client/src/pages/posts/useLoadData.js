import { useState } from 'react';
import axios from 'axios';

const useLoadData = () => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const loadData = async (method, url) => {
		setLoading(true);
		try {
			if (method === 'GET') {
				const res = await axios.get(url);
				if (res.status === 200) {
					setData(res.data);
				} else throw new Error('post not found');
			}
			if (method === 'POST') {
				const res = await axios.get(url);
				if (res.status === 200) {
					setData(res.data);
				} else throw new Error('post not found');
			}
			if (method === 'PUT') {
				const res = await axios.get(url);
				if (res.status === 200) {
					setData(res.data);
				} else throw new Error('post not found');
			}
		} catch (error) {
			setError(error.message);
		} finally {
			setLoading(false);
		}
	};
	return {
		data,
		loading,
		error,
		loadData,
	};
};

export default useLoadData;
