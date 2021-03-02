import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Redirect, Switch } from 'react-router-dom'

import { firebase } from '../firebase/firebase-config'

import { JournalScreen } from '../components/journal/JournalScreen'
import { AuthRouter } from './AuthRouter'
import { useDispatch } from 'react-redux'
import { login } from '../actions/auth'
import { LoadingScreen } from '../components/commons/LoadingScreen'
import { PublicRouter } from './PublicRouter'
import { PrivateRouter } from './PrivateRouter'

export const AppRouter = () => {
	const dispatch = useDispatch()
	const [checking, setChecking] = useState(true)
	const [isLoggedIn, setIsLoggedIn] = useState(false)

	useEffect(() => {
		firebase.auth().onAuthStateChanged((user) => {
			if (user?.uid) {
				dispatch(login(user.uid, user.displayName))
				setIsLoggedIn(true)
			} else {
				setIsLoggedIn(false)
			}

			setChecking(false)
		})
	}, [dispatch])

	if (checking) {
		return <LoadingScreen />
	}

	return (
		<Router>
			<div>
				<Switch>
					<PublicRouter
						path='/auth'
						component={AuthRouter}
						isLoggedIn={isLoggedIn}
					/>

					<PrivateRouter
						exact
						path='/'
						component={JournalScreen}
						isLoggedIn={isLoggedIn}
					/>
				</Switch>
			</div>
		</Router>
	)
}
