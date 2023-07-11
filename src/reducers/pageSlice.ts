import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type Size = {
  height: number
  width: number
}

type Page = {
  size: Size
}

const initialState = {
  size: {
    height: 0,
    width: 0,
  }
} as Page

const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    setSize(state: Page, action: PayloadAction<Size>) {
      const { height, width } = action.payload;
      if (width) state.size.width = width;
      if (height) state.size.height = height;
    },
  },
})

export const { setSize } = pageSlice.actions
export default pageSlice.reducer