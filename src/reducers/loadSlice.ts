import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type Loading = {
  checks: {
    loadedEarthTexture: boolean
    loadedEarthCanvas: boolean
  }
  loading: boolean
}

const initialState = {
  checks: {
    loadedEarthTexture: false,
    loadedEarthCanvas: false,
  },
  loading: true,
} as Loading


function checkLoading(state: Loading) {
  state.loading = !Object.values(state?.checks).every((check) => check);
}

const loadSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    setEarthTextureLoaded(state: Loading, action: PayloadAction<boolean>) {
      state.checks.loadedEarthTexture = action.payload;
      checkLoading(state);
    },
    setEarthCanvasLoaded(state: Loading, action: PayloadAction<boolean>) {
      state.checks.loadedEarthCanvas = action.payload;
      checkLoading(state);
    },
  },
})

export const { setEarthTextureLoaded, setEarthCanvasLoaded } = loadSlice.actions
export default loadSlice.reducer