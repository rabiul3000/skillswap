import React, { useEffect } from 'react';
import { allPostUrl } from '../../api/urls';
import useLoadData from './useLoadData';

const Posts = () => {
	const { data, loading, error, loadData } = useLoadData();

	useEffect(() => {
		loadData('GET', allPostUrl);
	}, []);

	return (
		<div>
			<h1>Posts</h1>
		</div>
	);
};

export default Posts;
