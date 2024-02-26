'use client';

import { createSlice } from '@reduxjs/toolkit';
import { eSport } from '@/dummy-data/eSport';

const initialState = {
	esports: eSport,
};

export const esportsSlice = createSlice({
	name: 'esports',
	initialState,
	reducers: {
		stake: (state, { payload }) => {
			state.esports = state.esports.map((esport, index) =>
				index === payload ? { ...esport, isStake: !esport.isStake } : esport
			);
		},
	},
	extraReducers: (builder) => {},
});

export const { stake } = esportsSlice.actions;

export default esportsSlice.reducer;
