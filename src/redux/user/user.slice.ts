import { createSlice } from '@reduxjs/toolkit';

interface IUserPayload {
	user: IUserData
	isAuthenticated: boolean
}

const initialState: IUserPayload = {
	user: {
		email: '',
		firstName: '',
		lastName: '',
		avatar: '',
		role: 'USER',
	},
	isAuthenticated: false,
}

export const userSlice = createSlice({
	name: 'toast',
	initialState,
	reducers: {
		setUser: (state, action) => {
			state.user.email = action.payload.email;
			state.user.firstName = action.payload.firstName;
			state.user.lastName = action.payload.lastName;
			state.user.avatar = action.payload.avatar;
			state.user.role = action.payload.role;
		}
	}
})

export const { setUser } = userSlice.actions

export default userSlice.reducer