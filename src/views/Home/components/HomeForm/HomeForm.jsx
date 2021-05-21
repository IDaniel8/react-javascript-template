import { useState, Fragment } from 'react'
import { Link } from 'react-router-dom'
import logo from '@assets/react.svg'
import './HomeForm.scss'

function HomeForm() {
  const [name, setName] = useState('')

  return (
    <Fragment>
      <h1>
        Hello React!
        <img src={logo} width="120" alt="react logo" />
      </h1>
      <div>
        <Link to="/about">To About</Link>
      </div>
      <div>
        <label className="homeform_label" htmlFor="name">
          Name:
        </label>
        <input id="name" type="text" value={name} onChange={e => setName(e.target.value)} />
      </div>
    </Fragment>
  )
}

export { HomeForm }
