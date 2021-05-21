import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './rootReducer'
import { isDevelopment } from '@shared'

export const store = configureStore({
  reducer: rootReducer,
  devTools: isDevelopment,
})
