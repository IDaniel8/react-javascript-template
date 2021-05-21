import { Link } from 'react-router-dom'

import * as S from './About.styled'

function About() {
  return (
    <S.Container>
      <h1>IM ABOUT</h1>
      <div>
        <Link to="/home">To Home</Link>
      </div>
    </S.Container>
  )
}

export { About }
