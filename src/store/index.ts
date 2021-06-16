import { configureStore } from '@reduxjs/toolkit'
import toastsReducer from './toasts'

export default configureStore({
  devTools: process.env.NODE_ENV !== 'production',
  reducer: {
    toasts: toastsReducer,
  },
})
