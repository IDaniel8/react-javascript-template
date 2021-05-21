import { createReducer } from '@reduxjs/toolkit'
import * as actions from './actions'

const initialState = {
  animals: [
    {
      name: 'Milton',
      type: 'cat',
      age: 4,
    },
    {
      name: 'Sammy',
      type: 'dog',
      age: 2,
    },
    {
      name: 'Joseph',
      type: 'turtle',
      age: 34,
    },
    {
      name: 'Simon',
      type: 'dog',
      age: 8,
    },
  ],
  count: 0,
}

const reducer = createReducer(initialState, builder => {
  builder.addCase(actions.addCounter, state => {
    state.count = state.count + 1
  })
})

export default reducer
