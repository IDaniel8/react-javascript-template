import { Provider } from 'react-redux'
import { hot } from 'react-hot-loader/root'
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import { GlobalStyle } from '@theme'
import store from './store'

import Home from '@views/Home'
import About from '@views/About'

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact={true} path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="*">
            <Redirect to="/home" />
          </Route>
        </Switch>
      </Router>
    </Provider>
  )
}

export default hot(App)
