import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type Loading = {
  checks: {
    loadedImages: boolean
  }
  loading: boolean
}

const initialState = {
  checks: {},
  loading: true,
} as Loading


function checkLoading(state: Loading) {
  state.loading = !Object.values(state?.checks).every((check) => check);
}

const loadSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    setImagesLoaded(state: Loading, action: PayloadAction<boolean>) {
      state.checks.loadedImages = action.payload;
      checkLoading(state);
    },
  },
})

export const { setImagesLoaded } = loadSlice.actions
export default loadSlice.reducer