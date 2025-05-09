import { useState } from 'react';
import axios from 'axios';
import allData from '../../api/data.json';

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
					setData(allData);
				}
			}
		} catch (error) {
			setError(error.response.data.message || error.message);
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
