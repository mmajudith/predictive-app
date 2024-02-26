'use client';

import { combineReducers } from '@reduxjs/toolkit';
import modalSlice from './utilitiesReducer';
import esportsSlice from './eSportsReducer';

export default combineReducers({
	modalSlice,
	esportsSlice,
});
