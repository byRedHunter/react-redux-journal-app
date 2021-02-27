import React from 'react'
import { Link } from 'react-router-dom'

export const LoginScreen = () => {
	return (
		<>
			<h3 className='auth__title'>Login</h3>

			<form>
				<input
					type='text'
					placeholder='Email'
					name='email'
					className='auth__input'
					autoComplete='off'
				/>
				<input
					type='password'
					placeholder='Password'
					name='password'
					className='auth__input'
					autoComplete='off'
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
