import React from 'react';
import { useRouteError } from 'react-router';

const PostsErrorPage = () => {
	const { message } = useRouteError();
	return (
		<div>
			<h1 className='text-4xl'>{message}</h1>
		</div>
	);
};

export default PostsErrorPage;
