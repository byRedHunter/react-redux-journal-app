import React from 'react'
import { Link } from 'react-router-dom'
import validator from 'validator'

import { useForm } from '../../hooks/useForm'

export const RegisterScreen = () => {
	const [values, handleInputChange] = useForm({
		name: 'Antonio Quispe Navarro',
		email: 'antonio@gmail.com',
		password: '123456',
		password2: '123456',
	})
	const { name, email, password, password2 } = values

	const handleRegister = (e) => {
		e.preventDefault()

		if (isFormValid()) {
			console.log('formulario validado')
		}
	}

	const isFormValid = () => {
		if (name.trim().length === 0) {
			console.log('El nombre es requerido.')
			return false
		} else if (!validator.isEmail(email)) {
			console.log('El email no es valido.')
			return false
		} else if (password !== password2 || password.length < 5) {
			console.log(
				'Password should be at least 6 characters and match each other.'
			)
			return false
		}

		return true
	}

	return (
		<>
			<h3 className='auth__title'>Register</h3>

			<form onSubmit={handleRegister}>
				<div className='auth__alert-error'>Hay un error</div>

				<input
					type='text'
					placeholder='Name'
					name='name'
					className='auth__input'
					autoComplete='off'
					value={name}
					onChange={handleInputChange}
				/>

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
				<input
					type='password'
					placeholder='Confirm Password'
					name='password2'
					className='auth__input'
					autoComplete='off'
					value={password2}
					onChange={handleInputChange}
				/>

				<button className='btn btn-primary btn-block mb-5' type='submit'>
					Register
				</button>

				<Link className='link' to='/auth/login'>
					Already registered?
				</Link>
			</form>
		</>
	)
}
