import { createSelector } from 'reselect'

const homeSelector = state => state.home

export const countSelector = createSelector(homeSelector, home => home.count)
