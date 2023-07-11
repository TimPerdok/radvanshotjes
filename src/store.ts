import { configureStore } from '@reduxjs/toolkit'

import pageSlice from './reducers/pageSlice'

const store = configureStore({
  reducer: {
    // Define a top-level state field named `todos`, handled by `todosReducer`
    page: pageSlice,
  }
})

export default store