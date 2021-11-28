import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ServerCall from '../Components/ServerCall';

export default function Login({ props }) {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});
	const handleChange = (e) => {
		const { id, value } = e.target;
		setFormData((prevState) => ({
			...prevState,
			[id]: value,
		}));
	};
	const handleSubmitClick = (e) => {
		e.preventDefault();
		if (formData.password.length) {
			ServerCall.auth('auth/login', { formData });
		} else {
			props.showError('Enter Password');
		}
	};
	return (
		<div
			className=' d-flex justify-content-center align-items-center'
			style={{ height: '100vh' }}
		>
			<div className='card' style={{ width: '24rem' }}>
				<div className='card-body'>
					<h1 className='card-title text-center'>Login</h1>

					<form onSubmit={handleSubmitClick}>
						<div className='form-group my-2'>
							<input
								type='email'
								className='form-control'
								placeholder='Enter email'
								name='email'
								value={formData.email}
								onChange={handleChange}
							/>
						</div>

						<div className='form-group my-2'>
							<input
								type='password'
								className='form-control'
								placeholder='Password'
								name='password'
								value={formData.password}
								onChange={handleChange}
							/>
						</div>

						<div className='form-group my-2 d-grid'>
							<button type='submit' className='btn btn-dark'>
								Sign In
							</button>
						</div>

						<p className='text-muted text-center'>
							Don't have an account?{' '}
							<Link to='/signup' className='text-dark'>
								Sign Up
							</Link>
						</p>
					</form>
				</div>
			</div>
		</div>
	);
}
