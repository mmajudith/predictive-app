'use client';

import { createSlice } from '@reduxjs/toolkit';
import { eSport } from '@/dummy-data/eSport';

const initialState = {
	esports: eSport,
	address: '',
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
		getAddress: (state, { payload }) => {
			state.address = payload;
		},
	},
	extraReducers: (builder) => {},
});

export const { stake, getAddress } = esportsSlice.actions;

export default esportsSlice.reducer;
