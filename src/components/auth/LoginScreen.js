import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { startGoogleLogin, startLoginEmailPassword } from '../../actions/auth'
import { useForm } from '../../hooks/useForm'

export const LoginScreen = () => {
	const dispatch = useDispatch()
	const { loading, msgError } = useSelector((state) => state.ui)

	const [values, handleInputChange] = useForm({
		email: 'redhunter@gmail.com',
		password: 'redhunter',
	})
	const { email, password } = values

	const handleLogin = (e) => {
		e.preventDefault()
		dispatch(startLoginEmailPassword(email, password))
	}

	const handleLoginGoogle = () => {
		dispatch(startGoogleLogin())
	}

	return (
		<>
			<h3 className='auth__title'>Login</h3>

			<form onSubmit={handleLogin}>
				{msgError && <div className='auth__alert-error'>{msgError}</div>}

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
				<button
					className='btn btn-primary btn-block'
					type='submit'
					disabled={loading ? true : ''}
				>
					Login
				</button>

				<div className='auth__social-networks'>
					<p>Login with social networks</p>

					<div className='google-btn' onClick={handleLoginGoogle}>
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
