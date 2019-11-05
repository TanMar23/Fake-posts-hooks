import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Hooks from './components/Hooks'
import Class from './components/Class'

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/hooks" component={Hooks} />
      <Route exact path="/class" component={Class} />
    </Switch>
  </BrowserRouter>
)

export default Router
