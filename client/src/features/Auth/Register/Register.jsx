import React, { useState } from 'react';
import bgRegister from '../../../media/images/register-bg.jpg';
import { Button, TextField } from '@mui/material';
import { Link } from 'react-router';
import useAuth from '../useAuth';

const Register = () => {
	const [showPassword, setShowPassword] = useState(false);
	const { validUser, loading, error, setError } = useAuth();

	const handleSubmitForRegister = (e) => {
		e.preventDefault();
		const userData = {
			email: e.target.email.value,
			password: e.target.password.value,
		};
		let isValid = validUser(userData);
		if (isValid) {
			console.log('User registered successfully');
		}
	};

	return (
		<div
			className='h-screen flex justify-center pt-14 gap-2'
			style={{
				backgroundImage: `url(${bgRegister})`,
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center',
			}}
		>
			<div className='flex w-full lg:w-1/2 h-fit lg:h-3/4 p-4 pb-20 flex-col rounded-2xl bg-white shadow-2xl shadow-indigo-400'>
				<div className='flex flex-col gap-4 justify-center items-center'>
					<h1 className='text-2xl text-indigo-900 font-extrabold'>Register</h1>
					<form
						className='flex flex-col gap-4 justify-center items-center'
						onSubmit={handleSubmitForRegister}
					>
						<TextField
							onChange={() => setError(null)}
							label='Email'
							name='email'
							variant='outlined'
							type='email'
							error={error}
						/>
						<TextField
							onChange={() => setError(null)}
							name='password'
							label='Password'
							variant='outlined'
							type={showPassword ? 'text' : 'password'}
							error={error}
						/>
						<small
							className='cursor-pointer px-2 rounded bg-gray-200 w-fit self-start text-left text-xs font-semibold text-gray-700 active:scale-75 duration-75'
							onClick={() => setShowPassword(!showPassword)}
						>
							{showPassword ? 'Hide' : 'Show'}
						</small>
						<Button
							type='submit'
							variant='contained'
							size='small'
							fullWidth
							style={{ textTransform: 'capitalize' }}
						>
							{loading ? `loading...` : `Let's Go`}
						</Button>
						<div className='h-8'>
							<small className='text-red-500'>{error}</small>
						</div>
						<div>
							<Link
								to='/login'
								className='hover:underline text-xs bg-gray-300 px-4 py-1 rounded-sm'
							>
								Already Member? Login
							</Link>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Register;
