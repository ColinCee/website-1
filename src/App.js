import React from 'react'
import Home from './home/Home'
import { BrowserRouter, Route } from 'react-router-dom'
import Projects from './projects/Projects'

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Route exact path='/' component={Home} />
        <Route exact path='/projects' component={Projects} />
      </div>
    </BrowserRouter>
  )
}
export default App
