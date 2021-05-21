import { combineReducers } from 'redux'
import homeReducer from '../views/Home/reducer'

export const rootReducer = combineReducers({
  home: homeReducer,
})
