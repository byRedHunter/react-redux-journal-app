import { types } from '../types/types'
/* 
  {
    uid: jaj5sdfja56s9,
    name: 'Jhonny'
  }
*/

export const authReducer = (state = {}, action) => {
	switch (action.type) {
		case types.login:
			return {
				uid: action.payload.uid,
				name: action.payload.displayName,
			}

		case types.logout:
			return {}

		default:
			return state
	}
}
