import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	songs: [
		{ title: 'Straberries & Cigarettes', duration: '3:22' },
		{ title: 'Sweet', duration: '4:52' },
		{ title: 'Talking to Myself', duration: '3:51' },
		{ title: 'Hey, Soul Sister', duration: '3:37' },
	],
	selectedSong: null,
};

const songSlice = createSlice({
	name: 'songSlice',
	initialState,
	reducers: {
		selectSong: (state, action) => {
			state.selectedSong = action.payload;
		},
	},
});

export const songActions = songSlice.actions;
export default songSlice.reducer;
