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
	console.log(randomNumber);
	return (
		<div
			className={`h-screen w-full bg-cover bg-bottom-right flex justify-center items-center`}
			style={{ backgroundImage: `url(${homeBgImage})` }}
		>
			<div className='p-12 flex flex-col gap-4 bg-cyan-50 rounded-2xl py-20 shadow-2xl'>
				<h1 className='text-2xl font-bold'>{headings[randomNumber]}</h1>
				<h5 className='text-sm font-semibold'>
					Live 1-on-1 sessions or short video lessons - learn or teach anything,
					anytime.
				</h5>
				<div className='flex justify-around px-4'>
					<Button value='Register' />
					<Button value='Login' />
				</div>
			</div>
		</div>
	);
};

export default Home;
