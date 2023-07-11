export type Theme = {
    colors: {
        primary: string,
        secondary: string,
        primaryText: string,
        secondaryText: string,
    },
    breakpoints: {
        xs: number,
        sm: number,
        md: number,
        lg: number,
        xl: number,
    }
}

import {
    useSelector as useReduxSelector,
    TypedUseSelectorHook,
  } from 'react-redux'
import { RootState } from 'app/redux/store'

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector