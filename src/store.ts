import { configureStore } from '@reduxjs/toolkit'

import pageSlice from './reducers/pageSlice'
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux'
import loadSlice from './reducers/loadSlice'


const store = configureStore({
  reducer: {
    // Define a top-level state field named `todos`, handled by `todosReducer`
    page: pageSlice,
    load: loadSlice,
  }
})

export default store

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

// Use throughout your app instead of plain `useDispatch` and `useSelector`
type DispatchFunc = () => AppDispatch
export const useAppDispatch: DispatchFunc = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector