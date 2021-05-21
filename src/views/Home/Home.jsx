import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createSelector } from 'reselect'

import { HomeForm } from './components'

import { addCounter } from './actions'
import { countSelector } from './selectors'

import * as S from './Home.styled'

// This memoize the complex selection for animals
const animalsFilteredReselectSelector = createSelector(
  state => state.home.animals,
  animals => animals.filter(animal => animal.type === 'dog'),
)

// This not memoize the complex selection for animals wich causes lot recalculations
const animalFilteredNormalSelector = state => state.home.animals.filter(animal => animal.type === 'dog')

function Home() {
  const dispatch = useDispatch()
  const countTimes = useSelector(countSelector)

  const animalsReselect = useSelector(animalsFilteredReselectSelector)
  const animalsNormalSelect = useSelector(animalFilteredNormalSelector)

  useEffect(() => {
    console.log('WITH RESELECT', animalsReselect)
  }, [animalsReselect])

  useEffect(() => {
    console.log('WITH NORMAL SELECT', animalsNormalSelect)
  }, [animalsNormalSelect])

  return (
    <S.Container>
      <HomeForm />
      <div>
        <button onClick={() => dispatch(addCounter())}>dispatch action counter {countTimes}</button>
      </div>
    </S.Container>
  )
}

export { Home }
