import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { login } from '../../actions/auth'
import { useForm } from '../../hooks/useForm'

export const LoginScreen = () => {
	const dispatch = useDispatch()

	const [values, handleInputChange] = useForm({
		email: 'redhunter@gmail.com',
		password: '123456',
	})
	const { email, password } = values

	const handleLogin = (e) => {
		e.preventDefault()
		dispatch(login('12sd5', 'Jhonny Quispe'))
	}

	return (
		<>
			<h3 className='auth__title'>Login</h3>

			<form onSubmit={handleLogin}>
				<input
					type='text'
					placeholder='Email'
					name='email'
					className='auth__input'
					autoComplete='off'
					value={email}
					onChange={handleInputChange}
				/>
				<input
					type='password'
					placeholder='Password'
					name='password'
					className='auth__input'
					autoComplete='off'
					value={password}
					onChange={handleInputChange}
				/>
				<button className='btn btn-primary btn-block' type='submit'>
					Login
				</button>

				<div className='auth__social-networks'>
					<p>Login with social networks</p>

					<div className='google-btn'>
						<figure className='google-icon-wrapper'>
							<img
								src='https://cdn.iconscout.com/icon/free/png-256/google-470-675827.png'
								alt='google icon'
								className='google-icon'
							/>
						</figure>

						<div className='btn-text'>
							<b>Sign in with google</b>
						</div>
					</div>
				</div>

				<Link className='link' to='/auth/register'>
					Create new account
				</Link>
			</form>
		</>
	)
}
