import { createSlice } from '@reduxjs/toolkit';

const configSlice = createSlice({
  name: 'config',
  initialState: {
    isSkip: false,
  },
  reducers: {
    markSkipIntro: (state, { payload }) => {
      state.isSkip = payload;
    },
  },
  extraReducers: {},
});

export const { actions, reducer: config } = configSlice;

export default config;
