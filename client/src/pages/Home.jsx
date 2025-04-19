import React from 'react';
import homeBgImage from '../media/images/home-bg.jpg';
import Button from '../components/Button';

const Home = () => {
	const headings = [
		'Learn Any Skill in Minutes, Teach What You Love - All in One Place!',
		'Swap Skills, Grow Together - The Peer-to-Peer Microlearning Revolution.',
		'SkillSwap: Bite-Sized Learning, Big Connections.',
		'Master Micro-Skills. Share Your Expertise. All in 5-Minute Sessions.',
		'Your 5-Minute Skill Boost Awaits! 🎸💻🍳',
	];

	let randomNumber = Math.round(Math.random() * 4);
	return (
		<div
			className={`h-screen w-full bg-cover bg-bottom-right flex justify-center items-center overflow-hidden`}
			style={{ backgroundImage: `url(${homeBgImage})` }}
		>
			<div className=' lg:p-12 flex flex-col justify-center items-center gap-4 bg-cyan-50 rounded-2xl py-20 shadow-2xl '>
				<h1 className='px-4 w-80 lg:w-full lg:text-2xl font-bold'>
					{headings[randomNumber]}
				</h1>
				<h5 className='px-4 w-80 lg:w-96 text-sm font-semibold text-gray-500'>
					Live 1-on-1 sessions or short video lessons - learn or teach anything,
					anytime.
				</h5>
				<div className='flex flex-col lg:flex-row gap-4 justify-evenly px-4 pt-12'>
					<Button value='Register' to='/register' />
					<Button value='Login' to='/login' />
				</div>
			</div>
		</div>
	);
};

export default Home;
