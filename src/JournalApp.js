import React from 'react'
import { Provider } from 'react-redux'

// store
import { store } from './store/store'

// components
import { AppRouter } from './routers/AppRouter'

export const JournalApp = () => {
	return (
		<Provider store={store}>
			<AppRouter />
		</Provider>
	)
}
